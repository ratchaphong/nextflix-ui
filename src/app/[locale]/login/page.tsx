"use client";

import { Formik, Form, Field } from "formik";
import styles from "./login.module.css";
import FormikTextInput from "@/components/FormikTextInput";
import useLoginPage from "./login.hooks";
import { loginSchema } from "./login.schema";
import { Link } from "@/i18n/navigation";

export default function LoginPage() {
  const { t, error, initialValues, handleSubmit } = useLoginPage();

  return (
    <main className={styles.container}>
      <div className={styles.overlay} />
      <div className={styles.form__wrapper}>
        <h1 className={styles.form__title}>{t("title")}</h1>
        <Formik
          enableReinitialize
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={loginSchema(t)}
        >
          {({ isSubmitting }) => (
            <Form className={styles.form__main}>
              {error && <small>{error}</small>}
              <FormikTextInput
                id="email"
                name="email"
                type="email"
                label={t("emailOrPhone")}
              />
              <FormikTextInput
                id="password"
                name="password"
                type="password"
                label={t("password")}
              />
              <button type="submit" disabled={isSubmitting}>
                {t("loginButton")}
              </button>
              <div className={styles.form__divider}>{t("or")}</div>
              <button className="secondary" type="button" disabled>
                {t("loginWithCode")}
              </button>
              <Link
                href="/"
                aria-disabled="true"
                className={styles.form__forgot}
                onClick={(e) => e.preventDefault()}
              >
                {t("forgotPassword")}
              </Link>
              <div className={styles.form__options}>
                <label className={styles.form__checkbox}>
                  <Field type="checkbox" name="rememberMe" />
                  {t("rememberMe")}
                </label>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </main>
  );
}
