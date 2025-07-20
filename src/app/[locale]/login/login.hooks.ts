"use client";

import { FormikHelpers } from "formik";
import { useTranslations } from "next-intl";
import { useAuthStore } from "@/stores/auth.store";
import { LoginFormValues } from "@/types/login.form";
import { useRouter } from "@/i18n/navigation";
import { secureStorage } from "@/lib/secureStorage";
import { useMemo } from "react";
import { initialValues } from "./login.utils";

export default function useLoginPage() {
  const t = useTranslations("LoginPage");
  const { login, error } = useAuthStore();
  const router = useRouter();

  const handleSubmit = async (
    values: LoginFormValues,
    actions: FormikHelpers<LoginFormValues>
  ) => {
    console.log("📨 Submitting form...", values);
    try {
      if (values.rememberMe) {
        secureStorage.setLogin(values.email, values.password);
      } else {
        secureStorage.clearLogin();
      }
      await login({
        email: values.email,
        password: values.password,
      });
      console.log("✅ Login success");
      router.push("/select-profile");
    } catch (error) {
      console.error("❌ Login failed:", error);
    } finally {
      actions.setSubmitting(false);
    }
  };

  const formInitialValues = useMemo<LoginFormValues>(() => {
    const saved = secureStorage.getLogin();
    return saved ? { ...saved, rememberMe: true } : initialValues;
  }, []);

  return {
    t,
    error,
    initialValues: formInitialValues,
    handleSubmit,
  };
}
