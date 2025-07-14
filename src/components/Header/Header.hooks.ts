"use client";

import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { useAuthStore } from "@/stores/auth.store";
import { useState } from "react";

const HIDDEN_PATHS = ["/select-profile"];

export function useHeader() {
  const t = useTranslations("Header");
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const { profile } = useAuthStore();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLocale = e.target.value;
    router.replace(pathname, { locale: selectedLocale });
  };

  const handleSignInClick = () => {
    router.push("/login");
  };

  const hideSignInButton = pathname === "/login" || pathname === "/register";
  const shouldHideHeader = HIDDEN_PATHS.includes(pathname);
  const isLoggedIn = !!profile;

  return {
    t,
    locale,
    hideSignInButton,
    shouldHideHeader,
    isLoggedIn,
    handleLanguageChange,
    handleSignInClick,
    menuOpen,
    setMenuOpen,
  };
}
