"use client";

import styles from "./MovieModal.module.css";

export default function MovieModal({
  movie,
  onClose,
}: {
  movie: {
    id: number;
    image: string;
    title: string;
    year: number;
    ageRating: string;
    tags: string[];
    description: string;
  };
  onClose: () => void;
}) {
  return (
    <div className={styles.modal__backdrop} onClick={onClose}>
      <div
        className={styles.modal__content}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={styles.close__button} onClick={onClose}>
          ×
        </button>
        <img
          src={movie.image}
          alt={movie.title}
          className={styles.modal__image}
        />
        <h2>{movie.title}</h2>
        <div className={styles.modal__tags}>
          <span>{movie.year}</span>
          <span>{movie.ageRating}</span>
          {movie.tags.map((tag: string) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <p>{movie.description}</p>
        <button className={styles.modal__button}>เริ่มต้นใช้งาน</button>
      </div>
    </div>
  );
}
