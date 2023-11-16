import Link from "next/link";
import styles from "./UserNav.module.css";
import LogoutButton from "@/components/User/LogoutButton/LogoutButton";
const AdminNav = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.home}>
        <Link href="/user">GBG ART GUIDE <span className={styles.inloggad}>Inloggad</span></Link>
      </div>
      <div className={styles.list}>
        <Link href="/user/about">Dina uppgifter</Link>
       
      
        <Link href="/user/settings">Inställningar</Link>
        <LogoutButton />
        <span>sv / en</span>
      </div>
    </nav>
  );
};

export default AdminNav;
