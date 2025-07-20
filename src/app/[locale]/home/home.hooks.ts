"use client";

import { useTranslations } from "next-intl";
import { FormikHelpers } from "formik";
import { useEffect } from "react";
import { useMovieStore } from "@/stores/movie.store";
import { useAuthStore } from "@/stores/auth.store";
import { useRouter } from "@/i18n/navigation";
import { secureStorage } from "@/lib/secureStorage";
import { HomeFormValues } from "@/types/login.form";
import { RegisterPayload } from "@/types/login.store";
import { logger } from "@/lib/logger";

export default function useHomeForm() {
  const t = useTranslations("HomePage");
  const { fetchMovies } = useMovieStore();
  const { register } = useAuthStore();
  const router = useRouter();

  const handleSubmit = async (
    values: HomeFormValues,
    actions: FormikHelpers<HomeFormValues>
  ) => {
    logger.log("📨 Submitting form...", values);
    try {
      // window.alert("ฟีเจอร์นี้ยังไม่พร้อมใช้งานในขณะนี้");
      const payload: RegisterPayload = {
        ...values,
        password: "Nextzy123",
        name: "Nextzy",
      };
      secureStorage.setLogin(payload.email, payload.password);
      await register(payload);
      router.push("/login");
    } catch (error) {
      logger.error("Error submitting form:", error);
    } finally {
      actions.setSubmitting(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return {
    t,
    handleSubmit,
  };
}
