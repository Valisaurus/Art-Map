"use client";

import Link from "next/link";
import styles from "./settings.module.css";

export default function ClientSideSettings() {
  return (
    <div className={styles.settingsContainer}>
      <h1>Kontoinställningar</h1>
      <div className={styles.list}>
        <ul>
          <li className="globalButton">
            <Link href="/user/settings/change-password">Byt lösenord</Link>
          </li>
          <li className="globalButton">
            <Link href="/user/settings/delete-account">Radera konto</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
