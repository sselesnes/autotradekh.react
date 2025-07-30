import css from "./Hero.module.css";
import car from "../../assets/alfa-romeo-147.webp";
import arrow_right from "../../assets/arrow-right.svg";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Hero() {
  useGSAP(() => {
    // Animate arrow_left
    gsap.to(`.${css.arrow_left}`, {
      x: 8, // Move 8px to the right
      duration: 0.5,
      repeat: -1, // Repeat indefinitely
      yoyo: true, // Reverse back to original position
      ease: "power1.inOut", // Smooth easing
    });

    // Animate arrow_right
    gsap.to(`.${css.arrow_right}`, {
      x: -8, // Move 8px to the left
      duration: 0.5,
      repeat: -1, // Repeat indefinitely
      yoyo: true, // Reverse back to original position
      ease: "power1.inOut", // Smooth easing
    });
  }, []);

  return (
    <section role="banner" aria-labelledby="hero">
      <h1 className={css.banner_main}>
        Терміновий викуп будь-яких
        <br />
        автомобілів в Харкові та області
      </h1>
      <p className={css.banner_content}>
        Отримайте до 95% вартості Вашого авто на руки вже сьогодні
      </p>
      <h2 className={css.banner_sub}>
        <img className={css.arrow_left} src={arrow_right} alt="Arrow" />
        <a href="tel:+380956196756">Зателефонуйте</a> або залиште заявку
        <img className={css.arrow_right} src={arrow_right} alt="Arrow" />
      </h2>
      <img className={css.car} src={car} alt="car" />
    </section>
  );
}
