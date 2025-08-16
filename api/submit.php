<?php
$rate_limit_dir = __DIR__ . '/rate_limits/';
if (!is_dir($rate_limit_dir)) {
    mkdir($rate_limit_dir, 0755, true);
}

$ip_address = $_SERVER['REMOTE_ADDR'];
$rate_limit_file = $rate_limit_dir . md5($ip_address);
$time_limit = 60; // 1 хвилина
$max_requests = 2;

if (file_exists($rate_limit_file)) {
    $data = json_decode(file_get_contents($rate_limit_file), true);
    if (time() - $data['timestamp'] < $time_limit) {
        if ($data['count'] >= $max_requests) {
            file_put_contents(__DIR__ . '/debug.log', "Rate limit exceeded for IP: $ip_address\n", FILE_APPEND);
            http_response_code(429);
            echo json_encode(['message' => 'Забагато запитів. Спробуйте пізніше.', 'status' => 'error']);
            exit;
        }
        $data['count']++;
    } else {
        $data = ['timestamp' => time(), 'count' => 1];
    }
} else {
    $data = ['timestamp' => time(), 'count' => 1];
}
file_put_contents($rate_limit_file, json_encode($data));

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

header('Access-Control-Allow-Origin: https://autotradekh.online');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

$allowed_origin = 'https://autotradekh.online';
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if ($origin !== $allowed_origin) {
    file_put_contents(__DIR__ . '/debug.log', "Invalid origin: $origin\n", FILE_APPEND);
    http_response_code(403);
    echo json_encode(['message' => 'Помилка: Запит із недозволеного домену', 'status' => 'error']);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['message' => 'Помилка: Дозволено лише POST-запити', 'status' => 'error']);
    exit;
}

require_once __DIR__ . '/../vendor/autoload.php';

use Dotenv\Dotenv;

try {
    $dotenv = Dotenv::createImmutable(__DIR__ . '/..');
    $dotenv->load();

    $botToken = filter_var($_ENV['TELEGRAM_BOT_TOKEN'] ?? null, FILTER_SANITIZE_FULL_SPECIAL_CHARS);
    $chatId = filter_var($_ENV['TELEGRAM_CHATID'] ?? null, FILTER_SANITIZE_FULL_SPECIAL_CHARS);

    if (!$botToken || !$chatId) {
        file_put_contents(__DIR__ . '/debug.log', 'Помилка: Не вдалося завантажити TELEGRAM_BOT_TOKEN або TELEGRAM_CHATID' . "\n", FILE_APPEND);
        http_response_code(500);
        echo json_encode(['message' => 'Помилка: Не вдалося завантажити конфігурацію', 'status' => 'error']);
        exit;
    }

    ini_set('session.cookie_httponly', 1);
    ini_set('session.cookie_secure', 1);
    ini_set('session.gc_maxlifetime', 1800);
    session_start();

    $input = json_decode(file_get_contents('php://input'), true);
    if (!$input) {
        $input = $_POST;
    }

    if (!isset($input['csrf_token']) || $input['csrf_token'] !== $_SESSION['csrf_token']) {
        http_response_code(403);
        echo json_encode(['message' => 'Помилка: Недійсний CSRF-токен', 'status' => 'error']);
        exit;
    }

    $name = filter_var($input['name'] ?? '', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
    $phone = filter_var($input['phone'] ?? '', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
    $message = filter_var($input['message'] ?? '', FILTER_SANITIZE_FULL_SPECIAL_CHARS);

    if (!$name || !$phone || !$message) {
        http_response_code(400);
        echo json_encode(['message' => 'Помилка: Усі поля мають бути заповнені', 'status' => 'error']);
        exit;
    }

    if (!preg_match('/^\+?[0-9\s\-()]{7,15}$/', $phone)) {
        http_response_code(400);
        echo json_encode(['message' => 'Помилка: Некоректний номер телефону', 'status' => 'error']);
        exit;
    }

    $telegramMessage = urlencode("Нова заявка:\nІм'я: $name\nТелефон: $phone\nПовідомлення: $message");
    $telegramUrl = "https://api.telegram.org/bot" . urlencode($botToken) . "/sendMessage?chat_id=" . urlencode($chatId) . "&text=$telegramMessage";

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $telegramUrl);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $result = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    $result = json_decode($result, true);

    if ($httpCode === 200 && isset($result['ok']) && $result['ok']) {
        // session_regenerate_id(true); // Розкоментуйте для оновлення сесії
        http_response_code(200);
        echo json_encode(['message' => 'Заявка успішно відправлена!', 'status' => 'success']);
    } else {
        $error = 'Помилка Telegram: ' . ($result['description'] ?? 'Не вдалося відправити заявку');
        file_put_contents(__DIR__ . '/debug.log', $error . "\n", FILE_APPEND);
        echo json_encode(['message' => $error, 'status' => 'error']);
    }
    exit;

} catch (Exception $e) {
    $error = 'Помилка: ' . $e->getMessage();
    file_put_contents(__DIR__ . '/debug.log', $error . "\n", FILE_APPEND);
    http_response_code(500);
    echo json_encode(['message' => $error, 'status' => 'error']);
    exit;
}