"use client";

import { useRouter } from "@/i18n/navigation";
import { useAuthStore } from "@/stores/auth.store";
import { Profile } from "@/types/login";
import { useTranslations } from "next-intl";

export const useSelectProfile = () => {
  const { logout, profile } = useAuthStore();
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

  const handleSignOut = () => {
    logout();
  };

  return { t, profile, handleSelectProfile, handleSignOut };
};
