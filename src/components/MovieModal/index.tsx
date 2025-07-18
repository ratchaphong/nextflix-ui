"use client";

import { MovieModalProps } from "./MovieModal.types";
import styles from "./MovieModal.module.css";
import useMovieModal from "./MovieModal.hooks";

export default function MovieModal({ movie, onClose }: MovieModalProps) {
  const { t, detail, handleSignInClick } = useMovieModal({ movie });

  if (!detail) return null;

  return (
    <div className={styles.modal__backdrop} onClick={onClose}>
      <div
        className={styles.modal__content}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={styles.close__button} onClick={onClose}>
          ×
        </button>
        <div className={styles.modal__top}>
          <img
            src={detail.image}
            alt={detail.title}
            className={styles.modal__image}
          />
          <div className={styles.modal__overlay} />
        </div>

        <div className={styles.modal__info}>
          <h2 className={styles.modal__title} title={detail.title}>
            {detail.title}
          </h2>
          <div className={styles.modal__tags}>
            <span>{detail.year}</span>
            <span>{detail.ageRating}</span>
            {detail.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <p className={styles.modal__description}>{detail.description}</p>
          <button className={styles.modal__button} onClick={handleSignInClick}>
            {t("getStarted")}
          </button>
        </div>
      </div>
    </div>
  );
}
