import Link from "next/link";
import styles from "./AdminNav.module.css";
const AdminNav = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.home}>
        <Link href="/">GBG ART GUIDE</Link>
      </div>
      <div className={styles.list}>
        <Link href="/admin/desk">Sanity</Link>
        <span>sv / en</span>
      </div>
    </nav>
  );
};

export default AdminNav;
