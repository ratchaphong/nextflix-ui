"use client";

import { useTranslations } from "next-intl";
import { FormikHelpers } from "formik";
import { useEffect } from "react";
import { useMovieStore } from "@/stores/movie.store";
import { useAuthStore } from "@/stores/auth.store";
import { useRouter } from "@/i18n/navigation";
import { HomeFormValues } from "@/types/login.form";
import { CheckEmailPayload } from "@/types/login.store";
import { logger } from "@/lib/logger";

export default function useHomeForm() {
  const t = useTranslations("HomePage");
  const { fetchMovies } = useMovieStore();
  const { checkEmail } = useAuthStore();
  const router = useRouter();

  const handleSubmit = async (
    values: HomeFormValues,
    actions: FormikHelpers<HomeFormValues>
  ) => {
    logger.log("📨 Submitting form...", values);
    try {
      const payload: CheckEmailPayload = values;
      const isAvailable = await checkEmail(payload);
      if (isAvailable) {
        router.push({
          pathname: "/register",
          query: {
            email: values.email,
          },
        });
      }
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
