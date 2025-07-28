import css from "./Benefits.module.css";
import type { Benefit } from "../../types/types";
// import car from "../../assets/alfa-romeo-147.webp";

const benefits: Benefit[] = [
  {
    title: "Максимально висока ціна",
    describe: "Ми намагаємось дати максимально високу ціну. Ми заробляємо на кількості авто.",
  },
  {
    title: "Викуп авто будь-яких марок",
    describe: "Наша організація займається викупом авто будь-яких марок і моделей.",
  },
  {
    title: "Повний розрахунок готівкою",
    describe: "Ви отримаєте всю суму на руки готівкою у день звернення.",
  },
  {
    title: "Швидке оформлення",
    describe: "Оформлення всього пакета документів займає трохи більше години.",
  },
  {
    title: "Юридична прозорість",
    describe: "Ми позбавимо Вас ризиків втратити гроші і бути ошуканими.",
  },
  {
    title: "Виїзд експерта до клієнта",
    describe: "Вам не потрібно кудись їхати, ми приїдемо туди, куди Вам зручно.",
  },
  {
    title: "Викуп день у день",
    describe: "Ви гарантовано отримаєте гроші за власний автомобіль у день звернення.",
  },
  {
    title: "Швидка оцінка авто",
    describe: "Не потрібно їхати на жодні СТО, ми оцінимо ваше авто на місці безкоштовно.",
  },
];

export default function Benefits() {
  const randomBenefits = [...benefits].sort(() => Math.random() - 0.5).slice(0, 3);

  return (
    <section className={css.container}>
      {randomBenefits.length && (
        <ul className={css.benefits}>
          {randomBenefits.map((benefit, index) => (
            <li key={index} className={css.benefitItem}>
              <h2 className={css.title}>{benefit.title}</h2>
              <p className={css.describe}>{benefit.describe}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
