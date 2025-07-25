import { useRouter } from "@/i18n/navigation";
import { logger } from "@/lib/logger";
import { RegisterFormValues } from "@/types/login.form";
import { FormikHelpers } from "formik";
import { useTranslations } from "next-intl";
import { initialValues } from "./register.utils";
import { useEffect, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { RegisterPayload } from "@/types/login.store";
import { useAuthStore } from "@/stores/auth.store";
import { secureStorage } from "@/lib/secureStorage";

export function useRegisterPage() {
  const t = useTranslations("Register");
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const { register, fetchAllPackages, packages } = useAuthStore();

  const handleSubmit = async (
    values: RegisterFormValues,
    actions: FormikHelpers<RegisterFormValues>
  ) => {
    logger.log("📨 Submitting form...", values);
    if (!email) return;
    try {
      const payload: RegisterPayload = {
        email,
        password: "Nextzy123",
        name: "Nextzy",
      };
      secureStorage.setLogin(payload.email, payload.password);
      await register(payload);
      logger.log("✅ Register success");
      router.push("/login");
    } catch (error) {
      logger.error("❌ Register failed:", error);
    } finally {
      actions.setSubmitting(false);
    }
  };

  const formInitialValues = useMemo<RegisterFormValues>(() => {
    return initialValues;
  }, []);

  useEffect(() => {
    if (email) {
      console.log(email);
    } else {
      router.replace("/");
    }
  }, [email]);

  useEffect(() => {
    fetchAllPackages();
  }, []);

  return {
    t,
    packages,
    initialValues: formInitialValues,
    handleSubmit,
  };
}
