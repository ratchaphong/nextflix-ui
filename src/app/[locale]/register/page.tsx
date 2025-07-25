"use client";

import { Formik, Form } from "formik";
import styles from "./register.module.css";
import { useRegisterPage } from "./register.hooks";
import { registerSchema } from "./register.schema";
import PackageTable from "@/components/PackageTable";

export default function RegisterPage() {
  const { t, handleSubmit, initialValues, packages } = useRegisterPage();

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>{t("choosePlan")}</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={registerSchema(t)}
      >
        {() => (
          <Form className={styles.form}>
            <PackageTable packages={packages} />
          </Form>
        )}
      </Formik>
    </main>
  );
}
