"use client";

import Link from "next/link";
import styles from "./settings.module.css";

export default function ClientSideSettings() {
  return (
    <div className={styles.container}>
      Hej!
      <br />
      Här fyller du i uppgifter om din verksamhet.
      <div className={styles.links}>
        <Link href="/user/settings/change-password">Byt lösenord</Link>
        <Link href="/user/settings/delete-account">Radera konto</Link>
      </div>
    </div>
  );
}
