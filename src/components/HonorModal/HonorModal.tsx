import css from "./HonorModal.module.css";
import { useEffect } from "react";

export default function HonorModal() {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className={css.backdrop}>
      <div className={css.honorModal}>
        <h2>Хвилина загальнонаціональної пошани</h2>
        <p>
          Щодня о 9:00 ми схиляємо голови, щоб вшанувати пам'ять захисників і цивільних, які
          віддали життя через російське вторгнення. Робота нашого сервісу призупинена на 60
          секунд. Пам'ять про кожного — це те, що робить нас сильнішими.
        </p>
        <h3>Дякуємо, що розділяєте цю мить з нами.</h3>
      </div>
    </div>
  );
}
