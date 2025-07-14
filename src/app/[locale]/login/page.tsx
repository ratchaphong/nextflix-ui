"use client";

import { useTranslations } from "next-intl";
import styles from "./login.module.css";

export default function LoginPage() {
  const t = useTranslations("LoginPage");

  return (
    <div className={styles.container}>
      <div className={styles.overlay} />
      <div className={styles.formWrapper}>
        <h1 className={styles.title}>{t("title")}</h1>

        <input
          className={styles.input}
          type="text"
          placeholder={t("emailOrPhone")}
        />
        <input
          className={styles.input}
          type="password"
          placeholder={t("password")}
        />
        <button className={styles.loginButton}>{t("loginButton")}</button>

        <div className={styles.divider}>{t("or")}</div>
        <button className={"secondary"} disabled>
          {t("loginWithCode")}
        </button>
        <a
          href="#"
          aria-disabled="true"
          className={styles.forgotPassword}
          onClick={(e) => e.preventDefault()}
        >
          {t("forgotPassword")}
        </a>
        <div className={styles.options}>
          <label className={styles.checkbox}>
            <input type="checkbox" /> {t("rememberMe")}
          </label>
        </div>

        <div className={styles.registerText}>
          {t("notAMember")} <a href="#">{t("signUpNow")}</a>
        </div>

        {/* <small className={styles.note}>
          {t("captchaNote")} <a href="#">{t("learnMore")}</a>
        </small> */}
      </div>
    </div>
  );
}
