"use client";

import { useTranslations } from "next-intl";
import styles from "@/styles/home.module.css";
import Header from "@/components/Header";

export default function HomePage() {
  const t = useTranslations("HomePage");

  return (
    <main>
      <Header />
      <section className={styles.hero}>
        <div className={styles.hero__bg__image__container}>
          <img
            src="https://assets.nflxext.com/ffe/siteui/vlv3/9c5457b8-9ab0-4a04-9fc1-e608d5670f1a/710d74e0-7158-408e-8d9b-23c219dee5df/IN-en-20210719-popsignuptwoweeks-perspective_alpha_website_small.jpg"
            alt="BG hero image"
            className={styles.hero__bg__image}
          />
        </div>
        <div className={styles.hero__bg__overlay}></div>

        <div className={styles.hero__card}>
          <h1 className={styles.hero__title}>{t("title")}</h1>
          <p className={styles.hero__subtitle}>{t("subtitle")}</p>
          <p className={styles.hero__description}>{t("description")}</p>

          <div className={styles.email__form__container}>
            <div className={styles.form__container}>
              <input
                id="email"
                type="email"
                className={styles.email__input}
                placeholder=" "
              />
              <label htmlFor="email" className={styles.email__label}>
                {t("emailLabel")}
              </label>
            </div>
            <button className={styles.primary__button}>
              {t("getStarted")} <i className="fal fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </section>

      {/* <footer className={styles.footer}>
        <div className={styles.footer__row__1}>
          <h4>{t("footer.call")}</h4>
        </div>
        <div className={styles.footer__row__2}>
          <div>
            <p>{t("footer.faq")}</p>
            <p>{t("footer.privacy")}</p>
          </div>
          <div>
            <p>{t("footer.help")}</p>
            <p>{t("footer.jobs")}</p>
          </div>
          <div>
            <p>{t("footer.account")}</p>
            <p>{t("footer.watch")}</p>
          </div>
          <div>
            <p>{t("footer.media")}</p>
            <p>{t("footer.contact")}</p>
          </div>
        </div>
        <div className={styles.footer__row__3}>
          <div className={styles.dropdown__container}>
            <i className="fas fa-globe"></i>
            <select name="languages" className={styles.language__drop__down}>
              <option value="en">English</option>
              <option value="th">ไทย</option>
            </select>
          </div>
        </div>
        <div className={styles.footer__row__4}>
          <p>Netflix</p>
        </div>
      </footer> */}
    </main>
  );
}
