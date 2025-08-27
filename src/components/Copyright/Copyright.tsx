// copyright - aria is a last resort

import css from "./Copyright.module.css";

interface CopyrightProps {
  isVisible: boolean;
}

export default function Copyright({ isVisible }: CopyrightProps) {
  const visibilityClass = isVisible ? css.visible : css.hidden;
  return (
    <div className={`${css.main} ${visibilityClass}`}>
      <a
        href="https://www.linkedin.com/in/yurii-boblak/"
        target="_blank"
        rel="noopener noreferrer"
      >
        YB © 2025
      </a>
    </div>
  );
}
