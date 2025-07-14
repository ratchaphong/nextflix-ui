"use client";

import { FormValues } from "./home.types";
import { useTranslations } from "next-intl";
import { FormikHelpers } from "formik";

export function useHomeForm() {
  const t = useTranslations("HomePage");

  const handleSubmit = async (
    values: FormValues,
    actions: FormikHelpers<FormValues>
  ) => {
    console.log("📨 Submitting form...", values);
    try {
      console.log("Submitted:", values);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      actions.setSubmitting(false);
    }
  };

  return {
    handleSubmit,
    t,
  };
}
