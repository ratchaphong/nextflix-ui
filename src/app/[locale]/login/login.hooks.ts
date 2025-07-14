"use client";

import { FormikHelpers } from "formik";
import { useTranslations } from "next-intl";
import { useAuthStore } from "@/stores/auth.store";
import { LoginFormValues } from "@/types/login";
import { useRouter } from "@/i18n/navigation";

export function useLoginPage() {
  const t = useTranslations("LoginPage");
  const { login, error } = useAuthStore();
  const router = useRouter();

  const handleSubmit = async (
    values: LoginFormValues,
    actions: FormikHelpers<LoginFormValues>
  ) => {
    console.log("📨 Submitting form...", values);
    try {
      await login({
        email: values.email,
        password: values.password,
      });

      console.log("✅ Login success");
      router.push("/select-profile");
    } catch (error) {
      console.error("❌ Login failed:", error);
      // actions.setFieldError("password", t("loginFailed"));
    } finally {
      actions.setSubmitting(false);
    }
  };

  return {
    t,
    error,
    handleSubmit,
  };
}
