// import React from "react";
import css from "../App/App.module.css";

import Header from "../Header/Header";

export default function NotFound() {
  return (
    <div className={css.container}>
      <Header />
      <h1>404 - Сторінку не знайдено</h1>
      <p>Вибачте, але сторінка, яку ви шукаєте, не існує.</p>
    </div>
  );
}
