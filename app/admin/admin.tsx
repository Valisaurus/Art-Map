"use client";
import styles from "./admin.module.css";
import Link from "next/link";

// FIX: Missing function to delete user

export default function ClientSideAdmin() {
  return (
    <div className={styles.adminContainer}>
      <h1>Hantera användare</h1>
      <div className={styles.list}>
        <ul>
          <li className={styles.listItem}>
            <Link className="globalButton" href="/admin/invite-user">
              Bjud in användare
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link className="globalButton" href="/admin/invite-user">
              Radera Användare
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
