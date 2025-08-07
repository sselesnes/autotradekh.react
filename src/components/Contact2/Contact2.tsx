import css from "./Contact2.module.css";
import arrow_right from "../../assets/arrow-right.svg";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

type ModalProps = {
  openModal: () => void;
};

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
      <h2 className={css.banner_main}>Час діяти</h2>
      <p className={css.banner_content}>
        <strong>Лише один крок відділяє Вас від мети.</strong> Залиште свою заявку і наша
        команда допоможе Вам отримати кошти швидко та комфортно.
      </p>
      {/* Викликаємо openModal, переданий з App */}
      <button className={css.button} onClick={openModal}>
        Отримати кошти
        <img className={css.arrow_left} src={arrow_right} alt="Arrow" />
      </button>
      <p className={css.banner_content}>
        Ми зв’яжемось із Вами у найкоротший термін, щоб узгодити всі деталі.
      </p>
    </section>
  );
}
