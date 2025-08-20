// header aria
import css from "./Header.module.css";
import telegramLogo from "../../assets/telegram.webp";
import viberLogo from "../../assets/viber.webp";
import autotradekhLogo from "../../assets/autotradekh-logo2.webp";
import autotradekhLogoPNG from "../../assets/autotradekh-logo2.webp?w=416&format=png&enhanced";

// import { useRef } from "react";
// // import { useGSAP } from "@gsap/react";
// // import gsap from "gsap";

export default function Header() {
  // const container = useRef<HTMLDivElement>(null);
  // const logoRef = useRef<HTMLDivElement>(null);
  // const phoneRef = useRef<HTMLDivElement>(null);

  // useGSAP(
  //   () => {
  //     // const mediaQuery = window.matchMedia("(max-width: 767px)");

  //     // const handleAnimation = () => {
  //     // if (mediaQuery.matches) {
  //     gsap.set(logoRef.current, { opacity: 1 });
  //     gsap.set(phoneRef.current, { opacity: 0 });

  //     const timeline = gsap.timeline({ repeat: -1, repeatDelay: 0 });
  //     timeline
  //       .to({}, { duration: 5 })
  //       .to(logoRef.current, { opacity: 0, duration: 0.3, ease: "power2.inOut" })
  //       .to(phoneRef.current, { opacity: 1, duration: 0.3, ease: "power2.inOut" }, "-=0.3")
  //       .to({}, { duration: 3 })
  //       .to(phoneRef.current, { opacity: 0, duration: 0.3, ease: "power2.inOut" })
  //       .to(logoRef.current, { opacity: 1, duration: 0.3, ease: "power2.inOut" }, "-=0.3");
  //     // };
  //     // else {
  //     //   gsap.set([logoRef.current, phoneRef.current], { opacity: 1 });
  //     //   gsap.killTweensOf([logoRef.current, phoneRef.current]);
  //     // }
  //     // };

  //     // handleAnimation();
  //     // mediaQuery.addEventListener("change", handleAnimation);

  //     // return;
  //     // () => mediaQuery.removeEventListener("change", handleAnimation);
  //   },
  //   { scope: container }
  // );

  return (
    <header
      className={css.container}
      // ref={container}
    >
      <div
        className={css.autotradekh_logo_wrapper}
        // ref={logoRef}
        aria-label="Головна сторінка Autotradekh"
      >
        <a href="/" aria-label="Перейти на головну сторінку">
          <picture>
            {/* <source media="(max-width: 1279px)" srcSet={`${carT1} 1x, ${carT2} 2x`} /> */}
            {/* <source
              srcSet={`${autotradekhLogoPNG} 1x, ${autotradekhLogoPNG} 2x`}
              type="image/png"
            /> */}
            <source srcSet={`${autotradekhLogo} 1x, ${autotradekhLogo} 2x`} type="image/webp" />
            <img
              className={css.autotradekh_logo}
              src={autotradekhLogoPNG}
              alt="Логотип Autotradekh"
            />
          </picture>
        </a>
      </div>
      {/* 
      <div className={css.phone} ref={phoneRef}>
        <a href="tel:+380956196756" aria-label="Зателефонувати: 095 619 67 56">
          095 619 67 56
        </a>
      </div> */}

      <div className={css.messengers} aria-label="Зв'язатися через месенджери">
        <div className={css.telegram}>
          <a
            href="https://t.me/+380956196756"
            target="_blank"
            aria-label="Написати у Telegram"
            rel="noopener noreferrer"
          >
            <img src={telegramLogo} alt="Логотип Telegram" />
          </a>
        </div>
        <div className={css.viber}>
          <a
            href="viber://chat?number=%2B380956196756"
            aria-label="Написати у Viber"
            rel="noopener noreferrer"
          >
            <img src={viberLogo} alt="Логотип Viber" />
          </a>
        </div>
      </div>
    </header>
  );
}
