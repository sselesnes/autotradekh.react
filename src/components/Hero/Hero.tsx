import css from "./Hero.module.css";
import car from "../../assets/alfa-romeo-147.webp";
import arrow_right from "../../assets/arrow-right.svg";

export default function Hero() {
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
