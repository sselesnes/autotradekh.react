import css from "./App.module.css"; //global container
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Benefits from "../Benefits/Benefits";
import ContactModalBtn from "../ContactModalBtn/ContactModalBtn";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

import { useState, useEffect, useRef } from "react";

export default function App() {
  const [showModalBtn, setShowModalBtn] = useState(true);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowModalBtn(true);
        if (entry.isIntersecting) {
          setShowModalBtn(false); // Ховаємо кнопку, коли Contact у вьюпорті
        }
      },
      { threshold: 0.1 } // Активуємо, коли 10% Contact видно
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  return (
    <div className={css.container}>
      <Header />
      <Hero />
      <Benefits />
      {showModalBtn && <ContactModalBtn />}
      <div ref={contactRef}>
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
