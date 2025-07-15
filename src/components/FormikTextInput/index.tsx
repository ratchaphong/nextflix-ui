"use client";

import { Field, ErrorMessage, useField } from "formik";
import styles from "./FormikTextInput.module.css";
import cx from "classnames";
import { FormikTextInputProps } from "./FormikTextInput.types";

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
    <div className={styles.form__wrapper}>
      <Field
        id={id}
        name={name}
        type={type}
        placeholder=" "
        className={cx(
          className || styles.form__input,
          hasError && styles.form__input__error
        )}
      />
      <label htmlFor={id} className={styles.form__label}>
        {label}
      </label>
      <ErrorMessage name={name}>
        {(msg) => <small className={styles.form__error}>{msg}</small>}
      </ErrorMessage>
    </div>
  );
}
