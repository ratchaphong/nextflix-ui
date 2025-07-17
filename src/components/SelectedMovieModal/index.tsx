"use client";

import { SelectedMovieModalProps } from "./SelectedMovieModal.types";
import cx from "classnames";
import styles from "./SelectedMovieModal.module.css";
import useSelectedMovieModal from "./SelectedMovieModal.hooks";

export default function SelectedMovieModal({
  selectedMovieId,
  handleCardModalClose,
  movies: r,
}: SelectedMovieModalProps) {
  const { t } = useSelectedMovieModal();

  return (
    <div className={styles.modal__backdrop} onClick={handleCardModalClose}>
      <div
        className={cx(styles.modal__content, styles.modal__zoom)}
        onClick={(e) => e.stopPropagation()}
      >
        <iframe
          className={styles.modal__video}
          src={`${r.find((m) => m.id === selectedMovieId)?.video}&mute=0`}
          title="Full Preview"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
        <h2>{r.find((m) => m.id === selectedMovieId)?.title}</h2>
        <p>{r.find((m) => m.id === selectedMovieId)?.description}</p>
        <button onClick={handleCardModalClose} className={styles.closeBtn}>
          {t("close")}
        </button>
      </div>
    </div>
  );
}
