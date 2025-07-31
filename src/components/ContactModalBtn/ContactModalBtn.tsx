import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import css from "./ContactModalBtn.module.css";
import phone from "../../assets/phone.svg";

export default function ContactModalBtn() {
  const phoneRef = useRef(null);

  useGSAP(() => {
    if (phoneRef.current) {
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 2 });

      // Перша фрікція
      tl.to(phoneRef.current, {
        x: () => 3,
        y: () => -1.5,
        scale: 1.1, // Збільшення для пульсації
        duration: 0.2, // Швидка анімація
        ease: "power2.inOut", // Плавне тремтіння
      })
        // Друга фрікція (повторюється тричі)
        .to(phoneRef.current, {
          x: () => -3.5,
          y: () => 1,
          scale: 1.1,
          duration: 0.2,
          ease: "power2.inOut",
          repeat: 2, // Повторити 2 рази (всього 3 виконання)
        })
        // Третя фрікція
        .to(phoneRef.current, {
          x: () => 0,
          y: () => 0,
          scale: 1.1,
          duration: 0.2,
          ease: "power2.inOut",
        });
    }
  }, []);

  return (
    <div className={css.modalBtn}>
      <img ref={phoneRef} className={css.phone} src={phone} alt="Phone" />
    </div>
  );
}
