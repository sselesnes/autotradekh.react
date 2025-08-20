//app

import css from "./App.module.css";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Benefits from "../Benefits/Benefits";
import Footer from "../Footer/Footer";
import Contact from "../Contact/Contact";
import Contact2 from "../Contact2/Contact2";
import Workflow from "../Workflow/Workflow";
import ContactModalBtn from "../ContactModalBtn/ContactModalBtn";

import { useState, useEffect, useRef } from "react";

export default function App() {
  // Єдиний стан для модального вікна
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showModalBtn, setShowModalBtn] = useState(true);
  const intersectionRef = useRef<HTMLDivElement>(null);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    // Фіксуємо поточне значення ref у константі
    const currentRef = intersectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowModalBtn(!entry.isIntersecting && !isModalOpen);
      },
      { threshold: 1 }
    );

    // Використовуємо отримане значення для спостереження
    if (currentRef) {
      observer.observe(currentRef);
    }

    // Використовуємо отримане значення у функції очищення
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [isModalOpen]);

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
