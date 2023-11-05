"use client";
import styles from "./dashboard.module.css";
import VenueForm from "@/components/VenueForm/VenueForm";

export default function ClientSideDashboard() {
  return (
    <>
      <div className={styles.intro}>
        Hej!
        <br />
        Här fyller du i uppgifter om din verksamhet.
      </div>
      <VenueForm />
    </>
  );
}
