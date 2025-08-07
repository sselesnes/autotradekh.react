import css from "./Hero.module.css";
import car from "../../assets/alfa-romeo-147-shadow.webp";
import handKey from "../../assets/firefly-hand-key.webp";
import handMoney from "../../assets/firefly-hand-money.webp";
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
        <br></br>
        <br></br>Допоможемо у продажу після аварій, пожеж, прильотів та навіть з проблемними
        документами або у кредиті.
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
        <img className={css.car} src={car} alt="car" />
        <img className={css.hand_key} src={handKey} alt="hand with car key" />
        <img className={css.hand_money} src={handMoney} alt="hand with money" />
      </div>
    </section>
  );
}
