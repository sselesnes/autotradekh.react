import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import css from "./App.module.css";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Benefits from "../Benefits/Benefits";
export default function App() {
    return (_jsxs("div", { className: css.container, children: [_jsx(Header, {}), _jsx(Hero, {}), _jsx(Benefits, {})] }));
}
