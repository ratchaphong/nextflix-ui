"use client";

import { useState } from "react";

import styles from "./navbar.module.css";
import { FaBars, FaBell, FaSearch } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      {/* LEFT: Logo + Menu */}
      <div className={styles.navLeft}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt="Netflix"
          className={styles.logo}
        />
        <ul className={styles.navLinks}>
          <li>
            <a href="#">หน้าแรก</a>
          </li>
          <li>
            <a href="#">รายการทีวี</a>
          </li>
          <li>
            <a href="#">ภาพยนตร์</a>
          </li>
          <li>
            <a href="#">มาใหม่</a>
          </li>
          <li>
            <a href="#">รายการของฉัน</a>
          </li>
        </ul>
      </div>

      {/* RIGHT: Icons */}
      <div className={styles.navRight}>
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

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className={styles.mobileMenu}>
          <li>
            <a href="#">หน้าแรก</a>
          </li>
          <li>
            <a href="#">รายการทีวี</a>
          </li>
          <li>
            <a href="#">ภาพยนตร์</a>
          </li>
          <li>
            <a href="#">มาใหม่</a>
          </li>
          <li>
            <a href="#">รายการของฉัน</a>
          </li>
        </ul>
      )}
    </nav>
  );
}
