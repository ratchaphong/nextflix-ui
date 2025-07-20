import { usePathname, useRouter } from "@/i18n/navigation";
import { useAuthStore } from "@/stores/auth.store";
import { useLocale } from "next-intl";

export default function useDropdownMenu() {
  const { logout } = useAuthStore();
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const handleChangeLocale = (targetLocale: string) => {
    if (targetLocale === locale) return;
    router.replace(pathname, { locale: targetLocale });
  };

  return { logout, handleChangeLocale, locale };
}
