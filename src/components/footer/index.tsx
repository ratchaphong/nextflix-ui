"use client";

import { useFooter } from "./Footer.hooks";
import styles from "./Footer.module.css";

const Footer = () => {
  const { t, shouldHideFooter, theme, toggleTheme } = useFooter();

  if (shouldHideFooter) return null;

  return (
    <footer className={styles.footer}>
      <div className={styles.footer___grid}>
        <ul>
          <li>{t("audioDescription")}</li>
          <li>{t("investorRelations")}</li>
          <li>{t("legalNotices")}</li>
        </ul>
        <ul>
          <li>{t("helpCenter")}</li>
          <li>{t("jobs")}</li>
          <li>{t("cookieSettings")}</li>
        </ul>
        <ul>
          <li>{t("giftCards")}</li>
          <li>{t("termsOfUse")}</li>
          <li>{t("corporateInfo")}</li>
        </ul>
        <ul>
          <li>{t("mediaCenter")}</li>
          <li>{t("privacy")}</li>
          <li>{t("contactUs")}</li>
        </ul>
      </div>

      <div className={styles.theme__toggle}>
        <span>{theme === "dark" ? t("darkMode") : t("lightMode")}</span>
        <label className={styles.switch}>
          <input
            type="checkbox"
            onChange={toggleTheme}
            checked={theme === "dark"}
          />
          <span className={styles.slider}></span>
        </label>
      </div>
      {/* <button className={styles.service__code}>{t("serviceCode")}</button> */}
      <p className={styles.copy}>{t("copyright")}</p>
    </footer>
  );
};

export default Footer;
