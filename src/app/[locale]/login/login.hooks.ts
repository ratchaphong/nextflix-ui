"use client";

import { FormikHelpers } from "formik";
import { useTranslations } from "next-intl";
import { FormValues } from "./login.types";
import { useAuthStore } from "@/stores/auth.store";

export function useLoginPage() {
  const t = useTranslations("LoginPage");
  const { login, error } = useAuthStore();

  const handleSubmit = async (
    values: FormValues,
    actions: FormikHelpers<FormValues>
  ) => {
    console.log("📨 Submitting form...", values);
    try {
      await login({
        email: values.email,
        password: values.password,
      });

      console.log("✅ Login success");
    } catch (error) {
      console.error("❌ Login failed:", error);
      // actions.setFieldError("password", t("loginFailed"));
    } finally {
      actions.setSubmitting(false);
    }
  };

  return {
    handleSubmit,
    t,
    error,
  };
}
