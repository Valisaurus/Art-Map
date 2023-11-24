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
          <div className={styles.exitButton} onClick={hideMenu}>
            stäng meny
          </div>
        ) : (
          <>meny</>
        )}
      </div>
      <div
        className={`${styles.listContainer} ${isActive ? styles.active : ""}`}
      >
        <div className={styles.list}>
          <Link href="/user/about" passHref legacyBehavior>
            <a onClick={hideMenu}>Din profil</a>
          </Link>

          <Link href="/user/settings" passHref legacyBehavior>
            <a onClick={hideMenu}>hantera konto</a>
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
