import Link from "next/link";
import styles from "./UserNav.module.css";
import LogoutButton from "@/components/User/LogoutButton/LogoutButton";
const AdminNav = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.home}>
        <Link href="/user/dashboard">GBG ART GUIDE - INLOGGAD</Link>
      </div>
      <div className={styles.list}>
        <Link href="/user/dashboard/about">Dina uppgifter</Link>
        <Link href="/user/dashboard/exhibitions">Utställningar</Link>
        <Link href="/user/dashboard/event">Event</Link>
        <Link href="/user/settings">Inställningar</Link>
        <LogoutButton />
        <span>sv / en</span>
      </div>
    </nav>
  );
};

export default AdminNav;
