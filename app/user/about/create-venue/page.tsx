"use client";
import VenueForm from "@/components/Forms/VenueForm/VenueForm";
import styles from "./createVenue.module.css";

// FIX: verfification and error messages on client side 

export default async function CreateVenue() {
  return (
    <div className={styles.contentWrapper}>
      <h1>Lägg till information om din verksamhet</h1>
      <div className={styles.formWrapper}>
      <VenueForm />
      </div>
    </div>
  );
}
