import css from "./Hero.module.css";
import car from "../../assets/car_big.webp";

export default function Hero() {
  return (
    <section role="banner" aria-labelledby="hero-title">
      <h1 className={css.banner_main}>
        Терміновий викуп будь-яких<br></br>автомобілів в Харкові та області
      </h1>
      <p className={css.banner_content}>
        Отримайте до 95% вартості Вашого авто на руки вже сьогодні
      </p>
      <h2 className={css.banner_sub}>
        <a href="tel:+380956196756">Зателефонуйте</a> або залиште заявку
      </h2>
      {/* <p className={css.banner_content}>Ми виплатимо вам всю суму готівкою вже сьогодні</p> */}
      <img className={css.car} src={car} alt="car" />
    </section>
  );
}
