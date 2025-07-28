import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
        describe: "Ми викуповуємо автомобілі незалежно від їх технічного стану чи зовнішнього вигляду.",
    },
    {
        title: "Безкоштовна консультація",
        describe: "Наші фахівці нададуть професійну консультацію щодо вартості та умов викупу.",
    },
    {
        title: "Економія вашого часу",
        describe: "Ми беремо на себе всі клопоти з продажу авто, щоб ви могли займатися своїми справами.",
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
        describe: "Ми беремо на себе всі формальності з переоформлення документів у державних органах.",
    },
];
export default function Benefits() {
    const randomBenefits = [...benefits].sort(() => Math.random() - 0.5).slice(0, 3);
    return (_jsxs("section", { className: css.container, children: [_jsx("h1", { className: css.benefits_title, children: "\u0427\u041E\u041C\u0423 \u041F\u041E\u041D\u0410\u0414 1000+ \u041A\u041B\u0406\u0404\u041D\u0422\u0406\u0412 \u0412\u0418\u0411\u0420\u0410\u041B\u0418 \u041D\u0410\u0421?" }), randomBenefits.length && (_jsx("ul", { className: css.benefits, children: randomBenefits.map((benefit, index) => (_jsxs("li", { className: css.benefit_item, children: [_jsxs("div", { className: css.benefit_title, children: [_jsx("img", { src: svg_ok, className: css.ok_icon, alt: "Check icon" }), _jsxs("h2", { className: css.main, children: [" ", benefit.title] })] }), _jsx("p", { className: css.describe, children: benefit.describe })] }, index))) }))] }));
}
