"use client";

import styles from "./Header.module.css";
import useHeader from "./Header.hooks";
import { Link } from "@/i18n/navigation";
import { FaBars } from "react-icons/fa";
import cx from "classnames";
import DropdownMenu from "../DropdownMenu";

export default function Header() {
  const {
    t,
    locale,
    hideSignInButton,
    shouldHideHeader,
    isLoggedIn,
    menuOpen,
    selectedProfile,
    logoSrc,
    handleLanguageChange,
    handleSignInClick,
    setMenuOpen,
  } = useHeader();

  if (shouldHideHeader) return null;

  return (
    <header>
      <nav
        className={
          isLoggedIn ? cx(styles.navbar, styles.logged__in) : styles.navbar
        }
      >
        <Link href={isLoggedIn ? "/select-profile" : "/"}>
          <div className={styles.navbar__brand}>
            <img src={logoSrc} alt="logo" className={styles.brand__logo} />
          </div>
        </Link>

        {isLoggedIn ? (
          selectedProfile ? (
            <div className={styles.navbar__nav__items}>
              <ul className={styles.nav__item__logged}>
                <li>
                  <Link href={"/select-profile"}>{t("home")}</Link>
                </li>
                <li>
                  <a href="#" aria-disabled>
                    {t("tvShows")}
                  </a>
                </li>
                <li>
                  <Link href={"/movie-search"}>{t("movies")}</Link>
                </li>
                {/* <li>
                <a href="#" aria-disabled>
                  {t("new")}
                </a>
              </li>
              <li>
                <a href="#" aria-disabled>
                  {t("myList")}
                </a>
              </li> */}
              </ul>
              <div className={styles.logged}>
                <DropdownMenu profile={selectedProfile} t={t} />
                <button
                  className={styles.hamburger}
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  <FaBars />
                </button>
              </div>
              <ul className={cx(styles.mobile__menu, menuOpen && styles.show)}>
                <li>
                  <Link href={"/select-profile"}>{t("home")}</Link>
                </li>
                <li>
                  <a href="#" aria-disabled>
                    {t("tvShows")}
                  </a>
                </li>
                <li>
                  <Link href={"/movie-search"}>{t("movies")}</Link>
                </li>
                {/* <li>
                <a href="#" aria-disabled>
                  {t("new")}
                </a>
              </li>
              <li>
                <a href="#" aria-disabled>
                  {t("myList")}
                </a>
              </li> */}
              </ul>
            </div>
          ) : null
        ) : (
          <div className={styles.navbar__nav__items}>
            <div className={styles.nav__item}>
              <select
                name="languages"
                id="languages"
                className={styles.language__drop__down}
                onChange={handleLanguageChange}
                value={locale}
                aria-label="Select language"
              >
                <option value="en">English</option>
                <option value="th">ไทย</option>
              </select>
            </div>
            {!hideSignInButton && (
              <div className={styles.nav__item}>
                <button
                  className={styles.signin__button}
                  onClick={handleSignInClick}
                >
                  {t("signIn")}
                </button>
              </div>
            )}
          </div>
        )}
      </nav>
    </header>
  );
}
