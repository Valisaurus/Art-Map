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
          <Link href="/user/about">Dina uppgifter</Link>

          <Link href="/user/settings">Inställningar</Link>
          <LogoutButton />
          <span>sv / en</span>
        </div>
      </div>
    </nav>
  );
};

export default AdminNav;
