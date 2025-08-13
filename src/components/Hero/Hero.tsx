import css from "./Hero.module.css";
import carM1 from "../../assets/alfa-romeo-147-shadow-m1.webp";
import carM2 from "../../assets/alfa-romeo-147-shadow-m2.webp";
import carT1 from "../../assets/alfa-romeo-147-shadow-t1.webp";
import carT2 from "../../assets/alfa-romeo-147-shadow-t2.webp";
import carD1 from "../../assets/alfa-romeo-147-shadow-t2.webp";
import handKeyT1 from "../../assets/firefly-hand-key-t1.webp";
import handKeyT2 from "../../assets/firefly-hand-key-t2.webp";
import handKeyD1 from "../../assets/firefly-hand-key-d1.webp";
import handKeyD2 from "../../assets/firefly-hand-key-d2.webp";
import handMoneyT1 from "../../assets/firefly-hand-money-t1.webp";
import handMoneyT2 from "../../assets/firefly-hand-money-t2.webp";
import handMoneyD1 from "../../assets/firefly-hand-money-d1.webp";
import handMoneyD2 from "../../assets/firefly-hand-money-d2.webp";
import arrow_right from "../../assets/arrow-right.svg";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import type { ModalProps } from "../../types/types.ts";

export default function Hero({ openModal }: ModalProps) {
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
    <section role="hero">
      <h1 className={css.banner_main}>Терміновий викуп авто в Харкові</h1>
      <p className={css.banner_content}>
        Наш сервіс пропонує швидкий і безпечний викуп автомобілів.
        {/* <br></br>
        <br></br>Допоможемо у продажу після аварій, пожеж, прильотів та навіть з проблемними
        документами або у кредиті. */}
        <br></br>
        <br></br>
        Щоб дізнатися вартість свого авто просто
        <strong> заповніть форму на сайті або подзвоніть нам.</strong>
      </p>
      <h2 className={css.banner_sub}>
        <img className={css.arrow_left} src={arrow_right} alt="Arrow" />
        <a className={css.button} href="tel:+380956196756">
          Зателефонуйте
        </a>
        <p>або</p>
        {/* Викликаємо openModal, переданий з App */}
        <button className={css.button} onClick={openModal}>
          залиште заявку
        </button>
        <img className={css.arrow_right} src={arrow_right} alt="Arrow" />
      </h2>
      <div className={css.car_container}>
        <picture>
          <source media="(max-width: 767px)" srcSet={`${carM1} 1x, ${carM2} 2x`} />
          <source media="(min-width: 768px)" srcSet={`${carT1} 1x, ${carT2} 2x`} />
          <source media="(min-width: 1280px)" srcSet={carD1} />
          <img className={css.car} src={carM1} alt="car" />
        </picture>

        <picture>
          <source media="(max-width: 1279px)" srcSet={`${handKeyT1} 1x, ${handKeyT2} 2x`} />
          <source media="(min-width: 1280px)" srcSet={`${handKeyD1} 1x, ${handKeyD2} 2x`} />
          <img className={css.hand_key} src={handKeyT1} alt="hand with car key" />
        </picture>

        <picture>
          <source media="(max-width: 1279px)" srcSet={`${handMoneyT1} 1x, ${handMoneyT2} 2x`} />
          <source media="(min-width: 1280px)" srcSet={`${handMoneyD1} 1x, ${handMoneyD2} 2x`} />
          <img className={css.hand_money} src={handMoneyT1} alt="hand with money" />
        </picture>
      </div>
    </section>
  );
}
