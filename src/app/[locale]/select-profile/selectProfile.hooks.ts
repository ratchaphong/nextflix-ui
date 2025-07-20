"use client";

import { useRouter } from "@/i18n/navigation";
import { useAuthStore } from "@/stores/auth.store";
import { Profile } from "@/types/global";
import { AddProfileFormValues } from "@/types/login.form";
import { FormikHelpers } from "formik";
import { useTranslations } from "next-intl";
import { useState } from "react";

export const useSelectProfile = () => {
  const { logout, addProfile, updateProfile, setProfileId, profile } =
    useAuthStore();
  const [showAddModal, setShowAddModal] = useState(false);
  const [isManageMode, setIsManageMode] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);

  const router = useRouter();
  const t = useTranslations("SelectProfilePage");

  const handleSelectProfile = (p: Profile) => {
    if (isManageMode) {
      console.log("🛠️ Edit mode: Open edit modal for", p);
      setSelectedProfile(p);
      setShowAddModal(true);
      return;
    }

    setProfileId(p.id);

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

  const handleCloseModal = () => {
    setShowAddModal(false);
    setSelectedProfile(null);
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
      if (selectedProfile) {
        await updateProfile(selectedProfile.id, values);
      } else {
        await addProfile(values);
      }
      handleCloseModal();
    } catch (error) {
      console.error("❌ Submitting form failed:", error);
    } finally {
      actions.setSubmitting(false);
    }
  };

  return {
    t,
    profile,
    isManageMode,
    showAddModal,
    selectedProfile,
    handleSelectProfile,
    handleSignOut,
    handleSubmit,
    handleAddProfile,
    setShowAddModal,
    setIsManageMode,
    handleCloseModal,
  };
};
