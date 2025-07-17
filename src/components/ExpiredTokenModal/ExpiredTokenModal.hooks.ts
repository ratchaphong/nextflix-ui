"use client";

import { useRouter } from "@/i18n/navigation";
import { tokenStorage } from "@/lib/tokenStorage";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function useExpiredTokenModal() {
  const router = useRouter();
  const t = useTranslations("ExpiredTokenModal");
  const [acknowledged, setAcknowledged] = useState(false);

  const handleAcknowledge = () => {
    setAcknowledged(true);
    tokenStorage.clearToken();
    router.replace("/");
  };

  return { t, acknowledged, handleAcknowledge };
}
