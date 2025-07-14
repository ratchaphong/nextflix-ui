"use client";
import styles from "./home/home.module.css";
import TrendingCarousel from "@/components/TrendingCarousel";
import { Form, Formik } from "formik";
import { validationSchema } from "./home/home.schema";
import FormikTextInput from "@/components/form/FormikTextInput";
import { initialValues } from "./home/home.utils";
import { useHomeForm } from "./home/home.hooks";

export default function HomePage() {
  const { handleSubmit, t } = useHomeForm();

  return (
    <main>
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

          <Formik
            enableReinitialize
            initialValues={initialValues}
            validationSchema={validationSchema(t)}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className={styles.email__form__container}>
                <FormikTextInput
                  id="email"
                  name="email"
                  type="email"
                  label={t("emailLabel")}
                />
                <button
                  type="submit"
                  className={styles.primary__button}
                  disabled={isSubmitting}
                >
                  {t("getStarted")} <i className="fal fa-chevron-right"></i>
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </section>

      <section className={styles.carousel__section}>
        <TrendingCarousel />
      </section>

      <section className={styles.benefits__section}>
        <h2 className={styles.benefits__title}>{t("benefitsTitle")}</h2>
        <div className={styles.benefits__grid}>
          <div className={styles.benefit__card}>
            {/* <img src="/tv-icon.png" alt="TV" /> */}
            <h3>{t("benefit1Title")}</h3>
            <p>{t("benefit1Desc")}</p>
          </div>
          <div className={styles.benefit__card}>
            {/* <img src="/download-icon.png" alt="Download" /> */}
            <h3>{t("benefit2Title")}</h3>
            <p>{t("benefit2Desc")}</p>
          </div>
          <div className={styles.benefit__card}>
            {/* <img src="/device-icon.png" alt="Devices" /> */}
            <h3>{t("benefit3Title")}</h3>
            <p>{t("benefit3Desc")}</p>
          </div>
          <div className={styles.benefit__card}>
            {/* <img src="/profile-icon.png" alt="Profile" /> */}
            <h3>{t("benefit4Title")}</h3>
            <p>{t("benefit4Desc")}</p>
          </div>
        </div>
      </section>

      <section className={styles.faq__section}>
        <h2 className={styles.faq__title}>{t("faqTitle")}</h2>
        <div className={styles.faq__list}>
          {[1, 2, 3, 4, 5].map((n) => (
            <details key={n} className={styles.faq__item}>
              <summary>{t(`faq${n}Q`)}</summary>
              <p>{t(`faq${n}A`)}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
