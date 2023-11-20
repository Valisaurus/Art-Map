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
    // Navigate to the home ("/") route
    router.push("/");
    // Reload the page after a short delay

   
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
          <span>sv / en</span>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
