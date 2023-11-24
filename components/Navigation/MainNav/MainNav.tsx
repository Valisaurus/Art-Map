"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./MainNav.module.css";
import { useRouter } from "next/navigation";

const Nav = () => {
  const [isActive, setIsActive] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  const hideMenu = () => {
    setIsActive(false);
  };

  const handleHomeClick = () => {
    router.push("/");   
  };

  return (
    <nav className={`${styles.nav} ${isActive ? styles.active : ""}`}>
      <div className={styles.home} onClick={handleHomeClick}>
        <Link href="/">GBG ART GUIDE</Link>
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
          <Link href="/utstallningar" passHref legacyBehavior>
            <a onClick={hideMenu}>Utställningar</a>
          </Link>
          <Link href="/event" passHref legacyBehavior>
            <a onClick={hideMenu}>Event</a>
          </Link>
          <Link href="/platser" passHref legacyBehavior>
            <a onClick={hideMenu}>Platser</a>
          </Link>
          <Link href="/om-sidan" passHref legacyBehavior>
            <a onClick={hideMenu}>Om sidan</a>
          </Link>
          <div>
            <span className={styles.lang}>sv</span> /
            <span className={styles.lang}>en</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
