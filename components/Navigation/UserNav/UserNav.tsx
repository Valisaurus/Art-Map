import Link from "next/link";
import styles from "./UserNav.module.css";
const AdminNav = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.home}>
        <Link href="/dashboard">GBG ART GUIDE - INLOGGAD</Link>
      </div>
      <div className={styles.list}>
        <Link href="/dashboard/about">Dina uppgifter</Link>
        <Link href="/dashboard/exhibitions">Utställningar</Link>
        <Link href="/dashboard/event">Event</Link>
        <Link href="/auth/sign-out">Logga ut</Link>
        <span>sv / en</span>
      </div>
    </nav>
  );
};

export default AdminNav;
