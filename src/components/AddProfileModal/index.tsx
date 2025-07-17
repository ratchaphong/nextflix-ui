"use client";

import { Formik, Form } from "formik";
import styles from "./AddProfileModal.module.css";
import { AddProfileModalProps } from "./AddProfileModal.types";
import useAddProfileModal from "./AddProfileModal.hooks";
import FormikTextInput from "../FormikTextInput";
import { addProfileSchema } from "./AddProfileModal.schema";
import { initialValues } from "./AddProfileModal.utils";

const AddProfileModal = ({ onClose, onSubmit }: AddProfileModalProps) => {
  const { t, fileInputRef, handleImageUpload } = useAddProfileModal();

  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <h2 className={styles.title}>{t("title")}</h2>
        <p className={styles.subtitle}>{t("subtitle")}</p>

        <Formik
          initialValues={initialValues}
          validationSchema={addProfileSchema(t)}
          onSubmit={onSubmit}
        >
          {({ isSubmitting, setFieldValue, values }) => (
            <Form className={styles.form}>
              <div className={styles.inputGroup}>
                <div
                  className={styles.avatar_wrapper}
                  onClick={() => fileInputRef.current?.click()}
                >
                  <img
                    src={values.image || "/image/avatar.jpg"}
                    className={styles.avatar}
                    alt="Avatar"
                  />
                </div>

                <input
                  type="file"
                  accept="image/*"
                  hidden
                  ref={fileInputRef}
                  onChange={(e) => handleImageUpload(e, setFieldValue)}
                />

                <FormikTextInput id="name" name="name" label={t("name")} />
              </div>
              <div className={styles.button__group}>
                <button type="submit" disabled={isSubmitting}>
                  {t("continue")}
                </button>
                <button type="button" className={"secondary"} onClick={onClose}>
                  {t("cancel")}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AddProfileModal;
