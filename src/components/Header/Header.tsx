// header aria

import css from "./Header.module.css";
import telegramLogo from "../../assets/telegram.webp";
import telegramLogoPNG from "../../assets/telegram.webp?format=png&enhanced";
import viberLogo from "../../assets/viber.webp";
import viberLogoPNG from "../../assets/viber.webp?format=png&enhanced";
import autotradekhLogo from "../../assets/autotradekh-logo2.webp";
import autotradekhLogoPNG from "../../assets/autotradekh-logo2.webp?w=416&format=png&enhanced";

export default function Header() {
  return (
    <header className={css.container}>
      <div className={css.autotradekh_logo_wrapper} aria-label="Головна сторінка Autotradekh">
        <a href="/" aria-label="Перейти на головну сторінку">
          <picture>
            <source srcSet={`${autotradekhLogo} 1x, ${autotradekhLogo} 2x`} type="image/webp" />
            <img
              className={css.autotradekh_logo}
              src={autotradekhLogoPNG}
              alt="Логотип Autotradekh"
            />
          </picture>
        </a>
      </div>
      <div className={css.messengers} aria-label="Зв'язатися через месенджери">
        <div className={css.telegram}>
          <a
            href="https://t.me/+380956196756"
            target="_blank"
            aria-label="Написати у Telegram"
            rel="noopener noreferrer"
          >
            <picture>
              <source srcSet={telegramLogo} type="image/webp" />
              <img src={telegramLogoPNG} alt="Логотип Telegram" />
            </picture>
          </a>
        </div>
        <div className={css.viber}>
          <a
            href="viber://chat?number=%2B380956196756"
            aria-label="Написати у Viber"
            rel="noopener noreferrer"
          >
            <picture>
              <source srcSet={viberLogo} type="image/webp" />
              <img src={viberLogoPNG} alt="Логотип Viber" />
            </picture>
          </a>
        </div>
      </div>
    </header>
  );
}
