"use client";

import styles from "./Header.module.css";
import { useHeader } from "./Header.hooks";

export default function Header() {
  const {
    t,
    locale,
    handleLanguageChange,
    handleSignInClick,
    hideSignInButton,
  } = useHeader();

  return (
    <header>
      <nav className={styles.navbar}>
        <div className={styles.navbar__brand}>
          <img
            src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
            alt="logo"
            className={styles.brand__logo}
          />
        </div>

        <div className={styles.navbar__nav__items}>
          <div className={styles.nav__item}>
            <div className={styles.dropdown__container}>
              <i className="fas fa-globe"></i>
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
      </nav>
    </header>
  );
}
