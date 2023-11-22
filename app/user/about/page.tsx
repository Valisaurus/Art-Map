"use client";

import Link from "next/link";
import styles from "./about.module.css";


export default function VenueAbout() {
  return (
    <>
      <div className={styles.aboutContainer}>
        Hej!
        <br />
        Här fyller du i uppgifter om din verksamhet.
        <div className={styles.links}>
          <Link href="/user/about/create-venue">Lägg till verksamhet</Link>
          <Link href="/user/about/update-venue">Uppdatera verksamhet</Link>
          <Link href="/user/about/exhibitions">Dina utställningar</Link>
          <Link href="/user/about/event">Dina event</Link>
        </div>
      </div>
    </>
  );
}
