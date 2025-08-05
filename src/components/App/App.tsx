import css from "./App.module.css";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Benefits from "../Benefits/Benefits";
import ContactModalBtn from "../ContactModalBtn/ContactModalBtn";
import Footer from "../Footer/Footer";
import Contact from "../Contact/Contact";

import { useState, useEffect, useRef } from "react";

export default function App() {
  // Єдиний стан для модального вікна
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showModalBtn, setShowModalBtn] = useState(true);
  const contactRef = useRef<HTMLDivElement>(null);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Ховаємо кнопку, якщо Footer у в'юпорті АБО модальне вікно відкрите
        setShowModalBtn(!entry.isIntersecting && !isModalOpen);
      },
      { threshold: 0.1 }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, [isModalOpen]); // Додаємо isModalOpen до залежностей, щоб оновлювати observer

  return (
    <div className={css.container}>
      <Header />
      <Hero openModal={openModal} />
      <Benefits />
      {showModalBtn && <ContactModalBtn openModal={openModal} />}
      <div ref={contactRef}>
        <Footer />
      </div>
      {isModalOpen && <Contact closeModal={closeModal} />}
    </div>
  );
}
