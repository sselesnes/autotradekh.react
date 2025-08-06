import css from "./App.module.css";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Benefits from "../Benefits/Benefits";
import ContactModalBtn from "../ContactModalBtn/ContactModalBtn";
import Footer from "../Footer/Footer";
import Contact from "../Contact/Contact";
import Contact2 from "../Contact2/Contact2";
import Workflow from "../Workflow/Workflow";

import { useState, useEffect, useRef } from "react";

export default function App() {
  // Єдиний стан для модального вікна
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showModalBtn, setShowModalBtn] = useState(true);
  const intersectionRef = useRef<HTMLDivElement>(null);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Ховаємо кнопку, якщо Footer у в'юпорті АБО модальне вікно відкрите
        setShowModalBtn(!entry.isIntersecting && !isModalOpen);
      },
      { threshold: 1 }
    );

    if (intersectionRef.current) {
      observer.observe(intersectionRef.current);
    }

    return () => {
      if (intersectionRef.current) {
        observer.unobserve(intersectionRef.current);
      }
    };
  }, [isModalOpen]); // Додаємо isModalOpen до залежностей, щоб оновлювати observer

  return (
    <div className={css.container}>
      <Header />
      <Hero openModal={openModal} />
      <Benefits />
      <Workflow />
      <div ref={intersectionRef}>
        {isModalOpen && <Contact closeModal={closeModal} />}
        <Contact2 openModal={openModal} />
      </div>
      <Footer />
      {showModalBtn && <ContactModalBtn openModal={openModal} />}
    </div>
  );
}
