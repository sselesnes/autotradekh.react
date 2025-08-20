//contact aria

import css from "./Contact.module.css";
import { useState, useEffect, useRef } from "react";
import type { ModalProps } from "../../types/types.ts";

interface FormData {
  name: string;
  phone: string;
  message: string;
}

interface FormMessage {
  text: string;
  status: "success" | "error" | null;
}

export default function Contact({ closeModal }: ModalProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    message: "",
  });
  const [csrfToken, setCsrfToken] = useState<string>("");
  const [formMessage, setFormMessage] = useState<FormMessage>({ text: "", status: null });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const modalRef = useRef<HTMLDivElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  useEffect(() => {
    fetch("/api/csrf-token.php")
      .then(res => res.json())
      .then(data => setCsrfToken(data.csrf_token))
      .catch(() => {
        setFormMessage({ text: "Помилка: Не вдалося отримати CSRF-токен", status: "error" });
      });

    if (modalRef.current) {
      modalRef.current.focus();
    }
    if (nameInputRef.current) {
      nameInputRef.current.focus();
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormMessage({ text: "", status: null });

    const phoneRegex = /^\+?[0-9\s\-()]{7,15}$/;
    if (!phoneRegex.test(formData.phone)) {
      setFormMessage({ text: "Помилка: Некоректний номер телефону", status: "error" });
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/submit.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, csrf_token: csrfToken }),
        credentials: "include",
      });

      const result = await response.json();
      // console.log("Response status:", response.status, "Response body:", result);

      if (!response.ok) {
        setFormMessage({
          text: result.message || "Помилка: Невідома помилка сервера",
          status: "error",
        });
        setIsSubmitting(false);
        return;
      }

      setFormMessage({ text: result.message, status: result.status });

      if (result.status === "success") {
        setFormData({ name: "", phone: "", message: "" });
        if (closeModal) {
          setTimeout(() => {
            closeModal();
          }, 3000);
        }
      }
    } catch (error) {
      let errorMessage = "Не вдалося відправити запит до сервера";
      if (error instanceof Error) {
        errorMessage = error.message || errorMessage;
      }
      setFormMessage({
        text: `Помилка: ${errorMessage}`,
        status: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-form-title"
      className={css.formSection}
    >
      <div className={css.backdrop} onClick={closeModal}>
        <div
          className={css.formModal}
          onClick={e => e.stopPropagation()}
          role="document"
          tabIndex={-1}
          ref={modalRef}
        >
          <button
            className={css.closeBtn}
            onClick={closeModal}
            aria-label="Закрити модальне вікно"
          >
            ✖
          </button>
          <h2 id="contact-form-title" className={css.formTitle}>
            Залишити заявку
          </h2>
          <form
            onSubmit={handleSubmit}
            className={css.form}
            aria-describedby="form-instructions"
          >
            <input type="hidden" name="csrf_token" value={csrfToken} />
            <input
              type="text"
              name="name"
              placeholder="Ваше ім'я"
              value={formData.name}
              onChange={handleInputChange}
              required
              className={css.input}
              aria-label="Ваше ім'я"
              ref={nameInputRef}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Номер телефону"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className={css.input}
              aria-label="Номер телефону"
              title="Введіть коректний номер телефону"
            />
            <textarea
              name="message"
              placeholder="Марка, модель, стан авто"
              value={formData.message}
              onChange={handleInputChange}
              required
              className={css.textarea}
              aria-label="Марка, модель, стан авто"
            />
            <button type="submit" disabled={isSubmitting} className={css.submitButton}>
              {isSubmitting ? "Відправка..." : "Відправити заявку"}
            </button>

            <div
              aria-live="polite"
              className={`${css.message} ${css[formMessage.status || ""]}`}
            >
              {formMessage.text}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
