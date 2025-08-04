import css from "./Header.module.css";
import telegramLogo from "../../assets/telegram.webp";
import viberLogo from "../../assets/viber.webp";
// import tiktokLogo from "../../assets/tiktok.svg";
import autotradekhLogo from "../../assets/autotradekh-logo2.webp";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Header() {
  const container = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mediaQuery = window.matchMedia("(max-width: 767px)");

      const handleAnimation = () => {
        if (mediaQuery.matches) {
          gsap.set(logoRef.current, { opacity: 1 });
          gsap.set(phoneRef.current, { opacity: 0 });

          const timeline = gsap.timeline({ repeat: -1, repeatDelay: 0 });
          timeline
            .to({}, { duration: 5 })
            .to(logoRef.current, { opacity: 0, duration: 0.3, ease: "power2.inOut" })
            .to(phoneRef.current, { opacity: 1, duration: 0.3, ease: "power2.inOut" }, "-=0.3")
            .to({}, { duration: 3 })
            .to(phoneRef.current, { opacity: 0, duration: 0.3, ease: "power2.inOut" })
            .to(logoRef.current, { opacity: 1, duration: 0.3, ease: "power2.inOut" }, "-=0.3");
        } else {
          gsap.set([logoRef.current, phoneRef.current], { opacity: 1 });
          gsap.killTweensOf([logoRef.current, phoneRef.current]); // Зупиняємо всі анімації
        }
      };

      handleAnimation(); // Виклик при ініціалізації
      mediaQuery.addEventListener("change", handleAnimation); // Реакція на зміну розміру

      return () => mediaQuery.removeEventListener("change", handleAnimation); // Очищення
    },
    { scope: container }
  );

  return (
    <header className={css.container} ref={container}>
      <div className={css.autotradekh_logo_wrapper} ref={logoRef}>
        <img className={css.autotradekh_logo} src={autotradekhLogo} alt="Autotradekh logo" />
      </div>
      <div className={css.phone} ref={phoneRef}>
        <a href="tel:+380956196756">095 619 67 56</a>
      </div>

      <div className={css.messengers}>
        {/* <div className={css.tiktok}>
          <a href="https://www.tiktok.com/@auto_trade_kh" target="_blank">
            <img src={tiktokLogo} alt="tiktok" />
          </a>
        </div> */}

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
    </header>
  );
}
