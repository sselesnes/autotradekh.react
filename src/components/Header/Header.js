import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import css from "./Header.module.css";
import telegramLogo from "../../assets/telegram.webp";
import viberLogo from "../../assets/viber.webp";
export default function Header() {
    return (_jsxs("header", { className: css.container, children: [_jsx("div", { className: css.phone, children: _jsx("a", { href: "tel:+380956196756", children: "095 619 67 56" }) }), _jsxs("div", { className: css.messengers, children: [_jsx("div", { className: css.telegram, children: _jsx("a", { href: "https://t.me/+380956196756", children: _jsx("img", { src: telegramLogo, alt: "telegram" }) }) }), _jsx("div", { className: css.viber, children: _jsx("a", { href: "viber://chat?number=%2B380956196756", children: _jsx("img", { src: viberLogo, alt: "viber" }) }) })] })] }));
}
