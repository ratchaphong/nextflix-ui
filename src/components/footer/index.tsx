"use client";

import { useFooter } from "./Footer.hooks";
import styles from "./Footer.module.css";

const Footer = () => {
  const { t, shouldHideFooter } = useFooter();

  if (shouldHideFooter) return null;

  return (
    <footer className={styles.footer}>
      {/* <div className={styles.socialIcons}>
        <FontAwesomeIcon icon={faFacebookF} />
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faTwitter} />
        <FontAwesomeIcon icon={faYoutube} />
      </div> */}

      <div className={styles.linkGrid}>
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

      <button className={styles.serviceCode}>{t("serviceCode")}</button>
      <p className={styles.copy}>{t("copyright")}</p>
    </footer>
  );
};

export default Footer;
