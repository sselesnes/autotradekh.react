// contact2 aria

import css from "./Contact2.module.css";
import arrow_right from "../../assets/arrow-right.svg";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import type { ModalProps } from "../../types/types.ts";

export default function Contact2({ openModal }: ModalProps) {
  useGSAP(() => {
    // Animate arrow_left
    gsap.to(`.${css.arrow_left}`, {
      x: 8, // Move 8px to the right
      duration: 0.5,
      repeat: -1, // Repeat indefinitely
      yoyo: true, // Reverse back to original position
      ease: "power1.inOut", // Smooth easing
    });
  }, []);

  return (
    <section role="region" aria-labelledby="contact2-title">
      <h2 id="contact2-title" className={css.banner_main}>
        Отримайте гроші за авто вже сьогодні: автовикуп у Харкові
      </h2>
      <p className={css.banner_content}>
        <strong>Лише один крок відділяє Вас від мети.</strong> Залиште свою заявку і наша
        команда допоможе Вам отримати кошти швидко та комфортно.
      </p>
      <button className={css.button} onClick={openModal}>
        Отримати кошти
        <img className={css.arrow_left} src={arrow_right} alt="" aria-hidden="true" />
      </button>
      <p className={css.banner_content}>
        Ми зв’яжемось із Вами у найкоротший термін, щоб узгодити всі деталі.
      </p>
    </section>
  );
}
