import css from "./Workflow.module.css";

// Імпортуємо зображення
import w1 from "../../assets/w1.png";
import w2 from "../../assets/w2.png";
import w3 from "../../assets/w3.png";
import w4 from "../../assets/w4.png";
import w5 from "../../assets/w5.png";
import w6 from "../../assets/w6.png";

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
      "Після огляду ми надаємо Вам попередню пропозицію щодо вартості авто на основі його стану та ринкових цін",
    image: w3,
  },
  {
    title: "Виїзд експерта",
    describe:
      "Наш спеціаліст безкоштовно приїде до вас у зручний час для огляду автомобіля та оцінки його стану",
    image: w2,
  },
  {
    title: "Узгодження умов угоди",
    describe:
      "Ми обговорюємо з вами остаточну ціну та деталі угоди, щоб все було прозоро та зрозуміло",
    image: w5,
  },
  {
    title: "Допомога з документами",
    describe:
      "Ми беремо на себе підготовку всіх необхідних документів для швидкого та законного оформлення угоди",
    image: w4,
  },
  {
    title: "Отримайте свої кошти",
    describe:
      "Після підписання документів ви одразу отримуєте гроші зручним для Вас способом – готівкою чи на картку",
    image: w6,
  },
];

export default function Workflow() {
  return (
    <section role="region" aria-labelledby="workflow-title">
      {" "}
      {/* Змінено роль для кращої семантики */}
      <h2 id="workflow-title" className={css.sectionTitle}>
        Як це працює?
      </h2>{" "}
      {/* Додано заголовок для aria-labelledby */}
      <ul className={css.list}>
        {workflowList.map(workflow => (
          <li className={css.item} key={workflow.title}>
            <h3 className={css.title}>{workflow.title}</h3> {/* Змінено на h3 для ієрархії */}
            <img className={css.image} src={workflow.image} alt={`Крок: ${workflow.title}`} />
            <p className={css.describe}>{workflow.describe}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
