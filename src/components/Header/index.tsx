"use client";

import styles from "./Header.module.css";
import { useHeader } from "./Header.hooks";
import { Link } from "@/i18n/navigation";
import { FaBars, FaBell, FaSearch } from "react-icons/fa";
import cx from "classnames";

export default function Header() {
  const {
    t,
    locale,
    hideSignInButton,
    shouldHideHeader,
    isLoggedIn,
    handleLanguageChange,
    handleSignInClick,
    menuOpen,
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
            <img
              src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
              alt="logo"
              className={styles.brand__logo}
            />
          </div>
        </Link>

        {isLoggedIn ? (
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
                <a href="#" aria-disabled>
                  {t("movies")}
                </a>
              </li>
              <li>
                <a href="#" aria-disabled>
                  {t("new")}
                </a>
              </li>
              <li>
                <a href="#" aria-disabled>
                  {t("myList")}
                </a>
              </li>
            </ul>
            <div className={styles.logged}>
              <FaSearch className="text-white cursor-pointer" />
              <FaBell className="text-white cursor-pointer" />
              <img
                src="/image/avatar.jpg"
                alt="profile"
                className={styles.profileIcon}
              />
              <button
                className={styles.hamburger}
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <FaBars />
              </button>
            </div>
            {menuOpen && (
              <ul className={styles.mobileMenu}>
                <li>
                  <Link href={"/select-profile"}>{t("home")}</Link>
                </li>
                <li>
                  <a href="#" aria-disabled>
                    {t("tvShows")}
                  </a>
                </li>
                <li>
                  <a href="#" aria-disabled>
                    {t("movies")}
                  </a>
                </li>
                <li>
                  <a href="#" aria-disabled>
                    {t("new")}
                  </a>
                </li>
                <li>
                  <a href="#" aria-disabled>
                    {t("myList")}
                  </a>
                </li>
              </ul>
            )}
          </div>
        ) : (
          <div className={styles.navbar__nav__items}>
            <div className={styles.nav__item}>
              <div className={styles.dropdown__container}>
                <select
                  name="languages"
                  id="languagesSelect"
                  className={styles.language__drop__down}
                  onChange={handleLanguageChange}
                  value={locale}
                >
                  <option value="en">English</option>
                  <option value="th">ไทย</option>
                </select>
              </div>
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
