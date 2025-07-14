"use client";

import { Formik, Form, Field } from "formik";
import styles from "./login.module.css";
import FormikTextInput from "@/components/form/FormikTextInput";
import { useLoginPage } from "./login.hooks";
import { initialValues } from "./login.utils";
import { loginSchema } from "./login.schema";
import { Link } from "@/i18n/navigation";

export default function LoginPage() {
  const { t, handleSubmit, error } = useLoginPage();

  return (
    <div className={styles.container}>
      <div className={styles.overlay} />
      <div className={styles.formWrapper}>
        <h1 className={styles.title}>{t("title")}</h1>
        <Formik
          enableReinitialize
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={loginSchema(t)}
        >
          {({ isSubmitting }) => (
            <Form className={styles.form}>
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
              <button
                type="submit"
                className={styles.loginButton}
                disabled={isSubmitting}
              >
                {t("loginButton")}
              </button>
              <div className={styles.divider}>{t("or")}</div>
              <button className="secondary" type="button" disabled>
                {t("loginWithCode")}
              </button>
              <Link
                href="/"
                aria-disabled="true"
                className={styles.forgotPassword}
                onClick={(e) => e.preventDefault()}
              >
                {t("forgotPassword")}
              </Link>
              <div className={styles.options}>
                <label className={styles.checkbox}>
                  <Field type="checkbox" name="rememberMe" />
                  {t("rememberMe")}
                </label>
              </div>
            </Form>
          )}
        </Formik>
        {/* <div className={styles.registerText}>
          {t("notAMember")} <a href="#">{t("signUpNow")}</a>
        </div> */}
        {/* <small className={styles.note}>
          {t("captchaNote")} <a href="#">{t("learnMore")}</a>
        </small> */}
      </div>
    </div>
  );
}
