import css from "./Contact2.module.css";

type ModalProps = {
  openModal: () => void;
};

export default function Contact2({ openModal }: ModalProps) {
  return (
    <section role="region" aria-labelledby="contact2-title">
      <h1 className={css.banner_main}>Час діяти</h1>
      <p className={css.banner_content}>
        Лише один крок відділяє вас від мети. Залиште свою заявку і наша команда допоможе Вам
        отримати кошти швидко та комфортно.
      </p>
      {/* Викликаємо openModal, переданий з App */}
      <button className={css.button} onClick={openModal}>
        Отримати кошти
      </button>
    </section>
  );
}
