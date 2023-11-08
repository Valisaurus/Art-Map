import Link from "next/link";
import styles from "./AdminNav.module.css";
import Form from "@/components/Forms/VenueForm/VenueForm";
import LogoutButton from "@/components/User/LogoutButton";
const AdminNav = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.home}>
        <Link href="/admin">GBG ART GUIDE - ADMIN</Link>
      </div>
      <div className={styles.list}>
        <Link href="/admin/invite-user">Hantera användare</Link>
        <Link href="/admin/sanity-studio/desk">Sanity Studio</Link>
        <Link href="/settings">Inställningar</Link>
        <LogoutButton />
        <span>sv / en</span>
      </div>
    </nav>
  );
};

export default AdminNav;
