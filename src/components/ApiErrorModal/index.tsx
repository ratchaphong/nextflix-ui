"use client";

import styles from "./ApiErrorModal.module.css";
import useApiErrorModal from "./ApiErrorModal.hooks";

export default function ApiErrorModal() {
  const { t, acknowledged, handleAcknowledge } = useApiErrorModal();

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
