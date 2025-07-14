"use client";

import { Field, ErrorMessage, useField } from "formik";
import styles from "./FormikTextInput.module.css"; // หรือใช้ home.module.css ก็ได้
import { HTMLInputTypeAttribute } from "react";
import cx from "classnames";

interface FormikTextInputProps {
  id: string;
  name: string;
  label: string;
  type?: HTMLInputTypeAttribute;
  className?: string;
}

export default function FormikTextInput({
  id,
  name,
  label,
  type = "text",
  className,
}: FormikTextInputProps) {
  const [, meta] = useField(name);
  const hasError = meta.touched && meta.error;

  return (
    <div className={styles.form__container}>
      <Field
        id={id}
        name={name}
        type={type}
        placeholder=" "
        className={cx(
          className || styles.email__input,
          hasError && styles.input__error
        )}
      />
      <label htmlFor={id} className={styles.email__label}>
        {label}
      </label>
      <ErrorMessage name={name}>
        {(msg) => <small className={styles.error__text}>{msg}</small>}
      </ErrorMessage>
    </div>
  );
}
