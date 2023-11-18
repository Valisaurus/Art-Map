"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./MainNav.module.css";

const Nav = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <nav
      className={`${styles.nav} ${isActive ? styles.active : ""}`} >
      <div className={styles.home}>
        <Link href="/">GBG ART GUIDE</Link>
      </div>
      <div className={`${styles.hamburger} ${isActive ? styles.active : ""}`} onClick={toggleMenu}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>
      <div className={`${styles.list} ${isActive ? styles.active : ""}`}>
        <Link href="/utstallningar">Utställningar</Link>
        <Link href="/event">Event</Link>
        <Link href="/platser">Platser</Link>
        <Link href="/om-sidan">Om sidan</Link>
        <span>sv / en</span>
      </div>
    </nav>
  );
};

export default Nav;
