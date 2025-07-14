"use client";

import { MovieModalProps } from "../TrendingCarousel/TrendingCarousel.types";
import styles from "./MovieModal.module.css";

export default function MovieModal({ movie, onClose }: MovieModalProps) {
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
            src={movie.image}
            alt={movie.title}
            className={styles.modal__image}
          />
          <div className={styles.modal__overlay} />
        </div>

        <div className={styles.modal__info}>
          <h2 className={styles.modal__title}>{movie.title}</h2>
          <div className={styles.modal__tags}>
            <span>{movie.year}</span>
            <span>{movie.ageRating}</span>
            {movie.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <p className={styles.modal__description}>{movie.description}</p>
          <button className={styles.modal__button}>เริ่มต้นใช้งาน</button>
        </div>
      </div>
    </div>
  );
}
