"use client";

import styles from "./ExpiredTokenModal.module.css";
import useExpiredTokenModal from "./ExpiredTokenModal.hooks";

export default function ExpiredTokenModal() {
  const { t, acknowledged, handleAcknowledge } = useExpiredTokenModal();

  if (acknowledged) return null;

  return (
    <div className={styles.modal__backdrop}>
      <div className={styles.modal__content}>
        <h2>{t("title")}</h2>
        <p>{t("description")}</p>
        <button onClick={handleAcknowledge} className={styles.button}>
          {t("button")}
        </button>
      </div>
    </div>
  );
}
