"use client";

import { AddProfileFormValues } from "@/components/AddProfileModal/AddProfileModal.types";
import { useRouter } from "@/i18n/navigation";
import { useAuthStore } from "@/stores/auth.store";
import { Profile } from "@/types/login";
import { FormikHelpers } from "formik";
import { useTranslations } from "next-intl";
import { useState } from "react";

export const useSelectProfile = () => {
  const { logout, addProfile, profile } = useAuthStore();
  const [showAddModal, setShowAddModal] = useState(false);

  const router = useRouter();
  const t = useTranslations("SelectProfilePage");

  const handleSelectProfile = (p: Profile) => {
    console.log(p);
    router.push({
      pathname: "/dashboard",
      query: {
        profileId: p.id,
      },
    });
  };

  const handleAddProfile = () => {
    setShowAddModal(true);
  };

  const handleSignOut = () => {
    logout();
  };

  const handleSubmit = async (
    values: AddProfileFormValues,
    actions: FormikHelpers<AddProfileFormValues>
  ) => {
    console.log("📨 Submitting form...", values);
    try {
      await addProfile(values);
      setShowAddModal(false);
    } catch (error) {
      console.error("❌ Add profile failed:", error);
    } finally {
      actions.setSubmitting(false);
    }
  };

  return {
    t,
    profile,
    showAddModal,
    handleSelectProfile,
    handleSignOut,
    handleSubmit,
    handleAddProfile,
    setShowAddModal,
  };
};
