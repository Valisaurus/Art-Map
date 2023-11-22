"use client";
import styles from "./dashboard.module.css";

interface ClientSideDashboardProps {
  welcomeMessage: string;
}

export default function ClientSideDashboard({ welcomeMessage}: ClientSideDashboardProps) {
  return (

      <div className={styles.introContainer}>
      <h1>{welcomeMessage}</h1>
        <p>
          Under flikarna Dina uppgifter kan du bla uppdatera dina uppgifter och
          lägga till utställningar. Under inställningar kan du bla byta lösenord
          m.m. Kika gärna runt!
       </p>
      </div>

  );
}
