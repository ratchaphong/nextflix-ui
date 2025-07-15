"use client";

import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { useAuthStore } from "@/stores/auth.store";
import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

const HIDDEN_PATHS = ["/select-profile"];

export function useHeader() {
  const t = useTranslations("Header");
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const searchParams = useSearchParams();
  const profileId = searchParams.get("profileId");

  const { profile } = useAuthStore();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLocale = e.target.value;
    router.replace(pathname, { locale: selectedLocale });
  };

  const handleSignInClick = () => {
    router.push("/login");
  };

  const hideSignInButton = ["/login", "/register"].includes(pathname);
  const shouldHideHeader = HIDDEN_PATHS.includes(pathname);
  const isLoggedIn = !!profile;

  const selectedProfile = useMemo(() => {
    if (!profileId || !profile) return null;
    return profile.profiles.find((p) => p.id === profileId) || null;
  }, [profileId, profile]);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      console.log("⏱️ Resize detected. Width:", width);

      if (width > 768) {
        console.log("📱 Width > 768px: Closing menu.");
        setMenuOpen(false);
      }
    };

    // เช็คทันทีตอนโหลดด้วย
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return {
    t,
    locale,
    hideSignInButton,
    shouldHideHeader,
    isLoggedIn,
    menuOpen,
    profile,
    selectedProfile,
    handleLanguageChange,
    handleSignInClick,
    setMenuOpen,
  };
}
