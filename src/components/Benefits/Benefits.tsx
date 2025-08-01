import { useState, useEffect, useRef } from "react";
import css from "./Benefits.module.css";
import svg_ok from "../../assets/ok.svg";

const benefits = [
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
  {
    title: "Викуп авто в будь-якому стані",
    describe:
      "Ми викуповуємо автомобілі незалежно від їх технічного стану чи зовнішнього вигляду.",
  },
  {
    title: "Безкоштовна консультація",
    describe: "Наші фахівці нададуть професійну консультацію щодо вартості та умов викупу.",
  },
  {
    title: "Економія вашого часу",
    describe:
      "Ми беремо на себе всі клопоти з продажу авто, щоб ви могли займатися своїми справами.",
  },
  {
    title: "Прозора оцінка вартості",
    describe: "Наші експерти надають чітке пояснення, як формується ціна вашого авто.",
  },
  {
    title: "Відсутність прихованих платежів",
    describe: "Ви не платите жодних додаткових комісій чи зборів за наші послуги.",
  },
  {
    title: "Викуп авто після ДТП",
    describe: "Ми готові викупити ваш автомобіль навіть після аварії чи серйозних пошкоджень.",
  },
  {
    title: "Цілодобова підтримка",
    describe: "Наша команда доступна 24/7 для консультацій та організації викупу.",
  },
  {
    title: "Гнучкий графік роботи",
    describe: "Ми працюємо у зручний для вас час, включаючи вихідні та святкові дні.",
  },
  {
    title: "Допомога з переоформленням",
    describe:
      "Ми беремо на себе всі формальності з переоформлення документів у державних органах.",
  },
];

const getRandomBenefits = () => {
  return [...benefits].sort(() => Math.random() - 0.5).slice(0, 4);
};

export default function Benefits() {
  const [currentBenefits, setCurrentBenefits] = useState(getRandomBenefits);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      // Зберігаємо відстань від низу сторінки
      // const distanceFromBottom =
      //   document.documentElement.scrollHeight - (window.scrollY + window.innerHeight);

      // Спочатку запускаємо зникнення
      setIsFadingOut(true);

      // Замінюємо бенефіти після завершення анімації зникнення
      setTimeout(() => {
        setCurrentBenefits(getRandomBenefits());
        // Вимикаємо анімацію зникнення, щоб нові бенефіти з’явилися
        setIsFadingOut(false);

        // Відновлюємо позицію прокрутки, зберігаючи відстань від низу
        // const newScrollHeight = document.documentElement.scrollHeight;
        // const newScrollY = newScrollHeight - (window.innerHeight + distanceFromBottom);
        // window.scrollTo(0, newScrollY);
      }, 333); // Час має відповідати тривалості CSS-анімації
    }, 7777); // Інтервал між повними циклами

    return () => {
      if (intervalRef.current !== null) {
        window.clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <section className={css.benefits}>
      <h1 className={css.benefits_title}>ЧОМУ ПОНАД 1000+ КЛІЄНТІВ ВИБРАЛИ AUTOTRADEKH ?</h1>
      {currentBenefits.length > 0 && (
        <ul className={`${css.benefits} ${isFadingOut ? css.fading_out : css.fading_in}`}>
          {currentBenefits.map(benefit => (
            <li key={benefit.title} className={css.benefit_item}>
              <div className={css.benefit_title}>
                <img src={svg_ok} className={css.ok_icon} alt="Check icon" />
                <h2 className={css.main}>{benefit.title}</h2>
              </div>
              <p className={css.describe}>{benefit.describe}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
