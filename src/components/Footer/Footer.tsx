// footer aria

import css from "./Footer.module.css";
import telegramLogo from "../../assets/telegram.webp";
import viberLogo from "../../assets/viber.webp";
import autotradekhLogo from "../../assets/autotradekh-logo2.webp";
import telegramLogoPNG from "../../assets/telegram.webp?format=png&enhanced";
import viberLogoPNG from "../../assets/viber.webp?format=png&enhanced";
import autotradekhLogoPNG from "../../assets/autotradekh-logo2.webp?w=760&format=png&enhanced";

export default function Footer() {
  return (
    <footer className={css.container}>
      <div className={css.phone}>
        <a href="tel:+380956196756" aria-label="Зателефонувати: 095 619 67 56">
          095 619 67 56
        </a>
      </div>
      <div className={css.messengers}>
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
            <p>Telegram</p>
          </a>
        </div>
        <div className={css.viber}>
          <a href="viber://chat?number=%2B380956196756" aria-label="Написати у Viber">
            <picture>
              <source srcSet={viberLogo} type="image/webp" />
              <img src={viberLogoPNG} alt="Логотип Viber" />
            </picture>
            <p>Viber</p>
          </a>
        </div>
      </div>
      <div className={css.autotradekh_logo_wrapper}>
        <a href="/" aria-label="Перейти на головну сторінку Autotradekh">
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
    </footer>
  );
}
