"use client";

import Link from "next/link";
import styles from "./about.module.css";

export default function VenueAbout() {
  return (
    <>
      <div className={styles.aboutContainer}>
        <h1>Dina uppgifter</h1>
        <div className={styles.links}>
          <ul>
            <li className="globalButton">
              <Link href="/user/about/create-venue">Lägg till info om din organisation</Link>
            </li>
            <li className="globalButton">
              <Link href="/user/about/update-venue">Uppdatera info</Link>
            </li>
            <li className="globalButton">
              <Link href="/user/about/exhibitions">Dina utställningar</Link>
            </li>
            <li className="globalButton">
              <Link href="/user/about/event">Dina event</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
