"use client";

import { Formik, Form } from "formik";
import styles from "./AddProfileModal.module.css";
import { AddProfileModalProps } from "./AddProfileModal.types";
import useAddProfileModal from "./AddProfileModal.hooks";
import FormikTextInput from "../FormikTextInput";
import { addProfileSchema } from "./AddProfileModal.schema";

const AddProfileModal = ({ onClose, onSubmit, data }: AddProfileModalProps) => {
  const { t, initialValues, fileInputRef, handleImageUpload } =
    useAddProfileModal({ data });

  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <h2 className={styles.title}>{t(data ? "titleEdit" : "title")}</h2>
        <p className={styles.subtitle}>
          {t(data ? "subtitleEdit" : "subtitle")}
        </p>

        <Formik
          enableReinitialize
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
                  {t("continueEdit")}
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
