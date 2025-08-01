import { useState, useEffect } from "react";
import css from "./Contact.module.css";

interface FormData {
  name: string;
  phone: string;
  message: string;
}

interface FormMessage {
  text: string;
  status: "success" | "error" | null;
}

export default function Form() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    message: "",
  });
  const [csrfToken, setCsrfToken] = useState<string>("");
  const [formMessage, setFormMessage] = useState<FormMessage>({ text: "", status: null });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Fetch CSRF token on component mount
  useEffect(() => {
    fetch("/api/csrf-token.php")
      .then(res => res.json())
      .then(data => setCsrfToken(data.csrf_token))
      .catch(() => {
        setFormMessage({ text: "Помилка: Не вдалося отримати CSRF-токен", status: "error" });
      });
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormMessage({ text: "", status: null });

    // Client-side phone validation
    // const phoneRegex = /^\+?[0-9\s\-()]{7,15}$/;
    // if (!phoneRegex.test(formData.phone)) {
    //   setFormMessage({ text: "Помилка: Некоректний номер телефону", status: "error" });
    //   setIsSubmitting(false);
    //   return;
    // }

    if (!formData.name || !formData.phone || !formData.message) {
      setFormMessage({ text: "Помилка: Усі поля мають бути заповнені", status: "error" });
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/submit.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, csrf_token: csrfToken }),
        credentials: "include", // Додайте це, якщо ще не додали
      });

      // Додайте цю перевірку
      if (!response.ok) {
        // Якщо відповідь не успішна, спробуємо отримати повідомлення з тіла відповіді.
        // Якщо парсинг json не вдається, кидаємо власну помилку.
        const errorData = await response.json().catch(() => {
          throw new Error("Помилка: Некоректна відповідь від сервера");
        });
        throw new Error(errorData.message || "Помилка: Невідома помилка сервера");
      }

      const result = await response.json();
      setFormMessage({ text: result.message, status: result.status });
      if (result.status === "success") {
        setFormData({ name: "", phone: "", message: "" });
      }
    } finally {
      // catch (error) {
      //   // Тепер тут ви отримаєте повідомлення, яке ми викинули вище
      //   // або стандартну мережеву помилку.
      //   setFormMessage({
      //     text: error.message || "Помилка: Не вдалося відправити заявку",
      //     status: "error",
      //   });
      // }
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className={css.formSection}>
      <h2 className={css.formTitle}>Залишити заявку</h2>
      <form onSubmit={handleSubmit} className={css.form}>
        <input type="hidden" name="csrf_token" value={csrfToken} />
        <input
          type="text"
          name="name"
          placeholder="Ваше ім'я"
          value={formData.name}
          onChange={handleInputChange}
          required
          className={css.input}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Номер телефону"
          value={formData.phone}
          onChange={handleInputChange}
          required
          //   pattern="\+?[0-9\s\-()]{7,15}"
          title="Введіть коректний номер телефону (7-15 цифр, можливі пробіли, дефіси, дужки)"
          className={css.input}
        />
        <textarea
          name="message"
          placeholder="Марка, модель, стан авто"
          value={formData.message}
          onChange={handleInputChange}
          required
          className={css.textarea}
        />
        <button type="submit" disabled={isSubmitting} className={css.submitButton}>
          {isSubmitting ? "Відправка..." : "Відправити заявку"}
        </button>
      </form>
      {formMessage.text && (
        <div className={`${css.message} ${css[formMessage.status || ""]}`}>
          {formMessage.text}
        </div>
      )}
    </section>
  );
}
