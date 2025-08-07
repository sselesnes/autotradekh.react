import css from "./ContactModalBtn.module.css";
import phone from "../../assets/phone.svg";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import type { ModalProps } from "../../types/types.ts";

export default function ContactModalBtn({ openModal }: ModalProps) {
  // export default function ContactModalBtn({ openModal }: ContactModalBtnProps) {
  const phoneRef = useRef(null);

  useGSAP(() => {
    if (phoneRef.current) {
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 2 });

      tl.to(phoneRef.current, {
        x: () => 3,
        y: () => -1.5,
        scale: 1.1,
        duration: 0.2,
        ease: "power2.inOut",
      })
        .to(phoneRef.current, {
          x: () => -3.5,
          y: () => 1,
          scale: 1.1,
          duration: 0.2,
          ease: "power2.inOut",
          repeat: 2,
        })
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
      <button className={css.phoneBtn} onClick={openModal}>
        <img ref={phoneRef} className={css.phone} src={phone} alt="Phone" />
      </button>
    </div>
  );
}
