// import React from "react";
import css from "../App/App.module.css";
import styles from "./NotFound.module.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function NotFound() {
  return (
    <div className={css.container}>
      <div className={styles.error_vh}>
        <Header />
        <div>
          <h1 className={styles.error_title}>404 - Сторінку не знайдено</h1>
          <p className={styles.error_text}>Тобто тут нічого нема</p>
        </div>
        <Footer />
      </div>
    </div>
  );
}
