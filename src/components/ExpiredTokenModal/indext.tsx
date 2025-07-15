"use client";

import styles from "./ExpiredTokenModal.module.css";
import { useRouter } from "@/i18n/navigation";
import { tokenStorage } from "@/lib/tokenStorage";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function ExpiredTokenModal() {
  const router = useRouter();
  const t = useTranslations("ExpiredTokenModal");
  const [acknowledged, setAcknowledged] = useState(false);

  const handleAcknowledge = () => {
    setAcknowledged(true);
    tokenStorage.clearToken();
    router.replace("/");
  };

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
