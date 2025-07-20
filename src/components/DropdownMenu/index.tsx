import { useRouter } from "@/i18n/navigation";
import styles from "./DropdownMenu.module.css";
import { DropdownMenuProps } from "./DropdownMenu.types";
import useDropdownMenu from "./DropdownMenu.hooks";

export default function DropdownMenu({ profile, t }: DropdownMenuProps) {
  const { logout, handleChangeLocale, locale } = useDropdownMenu();
  const router = useRouter();

  return (
    <div className={styles.dropdown__wrapper}>
      <img
        src={profile.image || "/image/avatar.jpg"}
        alt={profile.name}
        className={styles.profile__icon}
      />
      <div className={styles.dropdown__menu}>
        <ul>
          <li onClick={() => router.push("/select-profile")}>
            {t("manageProfile")}
          </li>
          {["th", "en"]
            .filter((lang) => lang !== locale)
            .map((lang) => (
              <li key={lang} onClick={() => handleChangeLocale(lang)}>
                {/* {lang === "th" ? "🇹🇭 ภาษาไทย" : "🇺🇸 English"} */}
                {t("changeLanguage")}
              </li>
            ))}
          <li onClick={logout}>{t("signOut")}</li>
        </ul>
      </div>
    </div>
  );
}
