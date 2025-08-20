//workflow aria

import css from "./Workflow.module.css";
import w1_t1 from "../../assets/w1-t1.webp";
import w1_t2 from "../../assets/w1-t2.webp";
import w1_d1 from "../../assets/w1-d1.webp";
import w2_t1 from "../../assets/w2-t1.webp";
import w2_t2 from "../../assets/w2-t2.webp";
import w2_d1 from "../../assets/w2-d1.webp";
import w3_t1 from "../../assets/w3-t1.webp";
import w3_t2 from "../../assets/w3-t2.webp";
import w3_d1 from "../../assets/w3-d1.webp";
import w4_t1 from "../../assets/w4-t1.webp";
import w4_t2 from "../../assets/w4-t2.webp";
import w4_d1 from "../../assets/w4-d1.webp";
import w5_t1 from "../../assets/w5-t1.webp";
import w5_t2 from "../../assets/w5-t2.webp";
import w5_d1 from "../../assets/w5-d1.webp";
import w6_t1 from "../../assets/w6-t1.webp";
import w6_t2 from "../../assets/w6-t2.webp";
import w6_d1 from "../../assets/w6-d1.webp";
import w1_t1PNG from "../../assets/w1-t1.webp?format=png&enhanced";
import w2_t1PNG from "../../assets/w2-t1.webp?format=png&enhanced";
import w3_t1PNG from "../../assets/w3-t1.webp?format=png&enhanced";
import w4_t1PNG from "../../assets/w4-t1.webp?format=png&enhanced";
import w5_t1PNG from "../../assets/w5-t1.webp?format=png&enhanced";
import w6_t1PNG from "../../assets/w6-t1.webp?format=png&enhanced";

const workflowList = [
  {
    title: "Зв’яжіться з нами",
    describe:
      "Зателефонуйте або заповніть форму на нашому сайті, вказавши основну інформацію про Ваш автомобіль",
    image: [w1_t1, w1_t2, w1_d1, w1_t1PNG],
  },
  {
    title: "Попередня оцінка",
    describe:
      "Ви отримуєте попередню пропозицію щодо вартості авто на основі його стану та ринкових цін",
    image: [w3_t1, w3_t2, w3_d1, w3_t1PNG],
  },
  {
    title: "Виїзд експерта",
    describe:
      "Наш спеціаліст безкоштовно приїде до Вас у зручний час для огляду автомобіля та оцінки його стану",
    image: [w2_t1, w2_t2, w2_d1, w2_t1PNG],
  },
  {
    title: "Погодження умов",
    describe:
      "Ми обговорюємо з ами остаточну ціну та деталі угоди, щоб все було прозоро та зрозуміло",
    image: [w5_t1, w5_t2, w5_d1, w5_t1PNG],
  },
  {
    title: "Допомога з документами",
    describe:
      "Ми беремо на себе підготовку всіх необхідних документів для швидкого та законного оформлення",
    image: [w4_t1, w4_t2, w4_d1, w4_t1PNG],
  },
  {
    title: "Отримайте ваші кошти",
    describe:
      "Після підписання документів ви одразу отримуєте гроші зручним для Вас способом – готівкою чи на картку",
    image: [w6_t1, w6_t2, w6_d1, w6_t1PNG],
  },
];

export default function Workflow() {
  return (
    <section role="region" aria-labelledby="workflow-title">
      <h2 id="workflow-title" className={css.workflow_title}>
        Як це працює?
      </h2>
      <ul className={css.list} aria-label="Покроковий процес викупу авто">
        {workflowList.map((workflow, index) => (
          <li
            className={css.item}
            key={index}
            aria-label={`Крок ${index + 1}: ${workflow.title}`}
          >
            <picture className={css.image}>
              <source
                media="(max-width: 1000px)"
                srcSet={`${workflow.image[0]} 1x, ${workflow.image[1]} 2x`}
                type="image/webp"
              />
              <source
                media="(min-width: 1000px)"
                srcSet={`${workflow.image[2]} 1x, ${workflow.image[0]} 2x`}
                type="image/webp"
              />
              <img
                className={css.car}
                src={workflow.image[3]}
                alt={`Ілюстрація для кроку: ${workflow.title}`}
              />
            </picture>

            <div className={css.text_block}>
              <h3 className={css.title}>{workflow.title}</h3>
              <p className={css.describe}>{workflow.describe}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
