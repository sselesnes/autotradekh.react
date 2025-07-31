import css from "./Footer.module.css";
import telegramLogo from "../../assets/telegram.webp";
import viberLogo from "../../assets/viber.webp";
import tiktokLogo from "../../assets/tiktok.svg";
import autotradekhLogo from "../../assets/autotradekh-logo2.webp";

export default function Footer() {
  return (
    <header className={css.container}>
      <div className={css.phone}>
        <a href="tel:+380956196756">095 619 67 56</a>
      </div>
      <div className={css.messengers}>
        <div className={css.telegram}>
          <a href="https://www.tiktok.com/@auto_trade_kh" target="_blank">
            <img src={tiktokLogo} alt="tiktok" />
          </a>
        </div>

        <div className={css.telegram}>
          <a href="https://t.me/+380956196756" target="_blank">
            <img src={telegramLogo} alt="telegram" />
          </a>
        </div>
        <div className={css.viber}>
          <a href="viber://chat?number=%2B380956196756">
            <img src={viberLogo} alt="viber" />
          </a>
        </div>
      </div>
      <div className={css.autotradekh_logo_wrapper}>
        <img className={css.autotradekh_logo} src={autotradekhLogo} alt="Autotradekh logo" />
      </div>
    </header>
  );
}
