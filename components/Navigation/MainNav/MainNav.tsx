import Link from "next/link";
import styles from "./MainNav.module.css";
const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.home}>
        <Link href="/">GBG ART GUIDE</Link>
      </div>
      <div className={styles.list}>
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
