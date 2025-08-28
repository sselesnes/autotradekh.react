// hero aria

import css from "./Hero.module.css";
import carM1 from "../../assets/alfa-romeo-147-shadow-m1.webp";
import carM2 from "../../assets/alfa-romeo-147-shadow-m2.webp";
import carPNG from "../../assets/alfa-romeo-147-shadow-m2.webp?format=png&enhanced";
import carT1 from "../../assets/alfa-romeo-147-shadow-t1.webp";
import carT2 from "../../assets/alfa-romeo-147-shadow-t2.webp";
import carD1 from "../../assets/alfa-romeo-147-shadow-t2.webp?w=1216&enhanced";
import handKeyT1 from "../../assets/firefly-hand-key-t1.webp";
import handKeyT2 from "../../assets/firefly-hand-key-t2.webp";
import handKeyPNG from "../../assets/firefly-hand-key-t2.webp?format=png&enhanced";
import handKeyD1 from "../../assets/firefly-hand-key-d1.webp";
import handKeyD2 from "../../assets/firefly-hand-key-d2.webp";
import handMoneyT1 from "../../assets/firefly-hand-money-t1.webp";
import handMoneyT2 from "../../assets/firefly-hand-money-t2.webp";
import handMoneyPNG from "../../assets/firefly-hand-money-t2.webp?format=png&enhanced";
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
    <section aria-labelledby="hero-title" className={css.hero}>
      <h1 id="hero-title" className={css.banner_main}>
        <span>Автовикуп Харків: </span>Терміновий викуп авто
      </h1>
      <div className={css.banner_content}>
        <p>
          <strong>AUTOTRADEKH</strong> спеціалізується на автовикупі вже понад 10 років,
          обслуговуючи місто Харків та область. Багаторічний досвід дозволяє гарантувати чесні
          та вигідні умови для кожного клієнта.
        </p>

        <br></br>
        <p>
          Звертайтесь до нас якщо Вам потрібен терміновий викуп авто зокрема після ДТП. Ми
          забезпечимо швидке та безпечне вирішення будь-яких питань, пов’язаних з продажем
          Вашого транспортного засобу, та надамо повний супровід угоди.
        </p>
        <br></br>

        <p>
          Щоб дізнатися вартість свого авто, просто
          <strong> заповніть форму на сайті або зателефонуйте нам.</strong>
        </p>
      </div>
      <div className={css.banner_sub} role="toolbar" aria-label="Варіанти зв'язку">
        <img className={css.arrow_left} src={arrow_right} alt="" aria-hidden="true" />
        <a
          className={css.button}
          href="tel:+380956196756"
          aria-label="Зателефонувати для отримання консультації"
        >
          Зателефонуйте
        </a>
        <p>або</p>
        <button className={css.button} onClick={openModal}>
          залиште заявку
        </button>
        <img className={css.arrow_right} src={arrow_right} alt="" aria-hidden="true" />
      </div>
      <div className={css.car_container}>
        <picture>
          <source
            media="(max-width: 414.01px)"
            srcSet={`${carM1} 1x, ${carM2} 2x`}
            type="image/webp"
          />
          <source
            media="(max-width: 1279px)"
            srcSet={`${carT1} 1x, ${carT2} 2x`}
            type="image/webp"
          />
          <source
            media="(min-width: 1280px)"
            srcSet={`${carD1} 1x, ${carD1} 2x`}
            type="image/webp"
          />
          <img
            className={css.car}
            src={carPNG}
            alt="Aвтомобіль Alfa Romeo 147 кольору металік"
          />
        </picture>

        <picture>
          <source
            media="(max-width: 380px)"
            srcSet={`${handKeyT1} 1x, ${handKeyT2} 2x`}
            type="image/webp"
          />
          <source
            media="(min-width: 381px)"
            srcSet={`${handKeyD1} 1x, ${handKeyD2} 2x`}
            type="image/webp"
          />
          <img className={css.hand_key} src={handKeyPNG} alt="Рука з ключем від автомобіля" />
        </picture>

        <picture>
          <source
            media="(max-width: 380px)"
            srcSet={`${handMoneyT1} 1x, ${handMoneyT2} 2x`}
            type="image/webp"
          />
          <source
            media="(min-width: 381px)"
            srcSet={`${handMoneyD1} 1x, ${handMoneyD2} 2x`}
            type="image/webp"
          />
          <img className={css.hand_money} src={handMoneyPNG} alt="Рука з пачкою грошей" />
        </picture>
      </div>
    </section>
  );
}
