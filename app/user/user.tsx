"use client";
import styles from "./dashboard.module.css";

export default function ClientSideDashboard() {
  return (
    <>
      <div className={styles.intro}>
        <p>
          Under flikarna Dina uppgifter kan du bla uppdatera dina uppgifter och
          lägga till utställningar. Under inställningar kan du bla byta lösenord
          m.m. Kika gärna runt!
        </p>
      </div>
    </>
  );
}
