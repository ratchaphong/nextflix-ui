"use client";

import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";

export function useHeader() {
  const t = useTranslations("HomePage");
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLocale = e.target.value;
    router.replace(pathname, { locale: selectedLocale });
  };

  const handleSignInClick = () => {
    router.push("/login");
  };

  const hideSignInButton = pathname === "/login" || pathname === "/register";

  return {
    t,
    locale,
    handleLanguageChange,
    handleSignInClick,
    hideSignInButton,
  };
}
