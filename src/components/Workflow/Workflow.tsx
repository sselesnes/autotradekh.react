import css from "./Workflow.module.css";

// Імпортуємо зображення
import w1 from "../../assets/w1.webp";
import w2 from "../../assets/w2.webp";
import w3 from "../../assets/w3.webp";
import w4 from "../../assets/w4.webp";
import w5 from "../../assets/w5.webp";
import w6 from "../../assets/w6.webp";

const workflowList = [
  {
    title: "Зв’яжіться з нами",
    describe:
      "Зателефонуйте або заповніть форму на нашому сайті, вказавши основну інформацію про Ваш автомобіль",
    image: w1, // Використовуємо імпортовану змінну
  },
  {
    title: "Попередня оцінка",
    describe:
      "Ви отримуєте попередню пропозицію щодо вартості авто на основі його стану та ринкових цін",
    image: w3,
  },
  {
    title: "Виїзд експерта",
    describe:
      "Наш спеціаліст безкоштовно приїде до Вас у зручний час для огляду автомобіля та оцінки його стану",
    image: w2,
  },
  {
    title: "Погодження умов",
    describe:
      "Ми обговорюємо з ами остаточну ціну та деталі угоди, щоб все було прозоро та зрозуміло",
    image: w5,
  },
  {
    title: "Допомога з документами",
    describe:
      "Ми беремо на себе підготовку всіх необхідних документів для швидкого та законного оформлення",
    image: w4,
  },
  {
    title: "Отримайте ваші кошти",
    describe:
      "Після підписання документів ви одразу отримуєте гроші зручним для Вас способом – готівкою чи на картку",
    image: w6,
  },
];

export default function Workflow() {
  return (
    <section role="region" aria-labelledby="workflow-title">
      <h2 id="workflow-title" className={css.workflow_title}>
        Як це працює?
      </h2>
      <ul className={css.list}>
        {workflowList.map((workflow, index) => (
          <li className={css.item} key={index}>
            <img className={css.image} src={workflow.image} alt={`Крок: ${workflow.title}`} />
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
