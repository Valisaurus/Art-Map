import Link from "next/link";
import styles from "./Nav.module.css";
const Nav = () => {
  return (
    <nav className={styles.nav}>
      <Link href="/">Art Map</Link>
      <Link href="/utstallningar">Utställningar</Link>
      <Link href="/event">Event</Link>
      <Link href="/platser">Platser</Link>
      <Link href="/omSidan">Om sidan</Link>
    </nav>
  );
};

export default Nav;
