"use client";

import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { useAuthStore } from "@/stores/auth.store";
import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { HIDDEN_PATHS_HEADER, HIDDEN_SIGN_IN_BUTTON_HEADER } from "@/utils";

export function useHeader() {
  const t = useTranslations("Header");
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const searchParams = useSearchParams();
  const profileId = searchParams.get("profileId");

  const { profile } = useAuthStore();
  const [menuOpen, setMenuOpen] = useState(false);
  const [logoSrc, setLogoSrc] = useState(
    "https://www.freepnglogos.com/uploads/netflix-logo-0.png"
  );

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLocale = e.target.value;
    router.replace(pathname, { locale: selectedLocale });
  };

  const handleSignInClick = () => {
    router.push("/login");
  };

  const hideSignInButton = HIDDEN_SIGN_IN_BUTTON_HEADER.includes(pathname);
  const shouldHideHeader = HIDDEN_PATHS_HEADER.includes(pathname);
  const isLoggedIn = !!profile;

  const updateLogo = () => {
    const theme = document.documentElement.getAttribute("data-theme");
    const isLight = theme === "light";
    setLogoSrc(
      isLight
        ? "https://www.freepnglogos.com/uploads/netflix-logo-0.png"
        : "https://upload.wikimedia.org/wikipedia/commons/e/e9/Pornhub-style_Wikipedia_logo.png?20190401080407"
    );
  };

  const selectedProfile = useMemo(() => {
    if (!profileId || !profile) return null;
    return profile.profiles.find((p) => p.id === profileId) || null;
  }, [profileId, profile]);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      // console.log("⏱️ Resize detected. Width:", width);

      if (width > 768) {
        // console.log("📱 Width > 768px: Closing menu.");
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

  useEffect(() => {
    updateLogo(); // initial load

    const observer = new MutationObserver(() => updateLogo());

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
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
    logoSrc,
    handleLanguageChange,
    handleSignInClick,
    setMenuOpen,
  };
}
