"use client";
import { useState } from "react";

import Link from "next/link";
import styles from "./UserNav.module.css";
import LogoutButton from "@/components/User/LogoutButton/LogoutButton";

const AdminNav = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  const hideMenu = () => {
    setIsActive(false);
  };

  return (
    <nav className={`${styles.nav} ${isActive ? styles.active : ""}`}>
      <div className={styles.home}>
        <Link href="/user">
          GBG ART GUIDE <span className={styles.user}>Inloggad</span>
        </Link>
      </div>
      <div
        className={`${styles.hamburger} ${isActive ? styles.active : ""}`}
        onClick={toggleMenu}
      >
        {isActive ? (
          // Render your exit or close button when the menu is active
          <div className={styles.exitButton} onClick={hideMenu}>
            stäng meny
          </div>
        ) : (
          // Render your hamburger bars when the menu is not active
          <>meny</>
        )}
      </div>
      <div
        className={`${styles.listContainer} ${isActive ? styles.active : ""}`}
      >
        <div className={styles.list}>
          <Link href="/user/about" passHref legacyBehavior>
            <a onClick={hideMenu}>Dina uppgifter</a>
          </Link>

          <Link href="/user/settings" passHref legacyBehavior>
            <a onClick={hideMenu}>Inställningar</a>
          </Link>
          <LogoutButton />
          <div>
            <span className={styles.lang}>sv</span> /
            <span className={styles.lang}>en</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AdminNav;
