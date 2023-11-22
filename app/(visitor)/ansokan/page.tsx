"use client";
import styles from "./ansokan.module.css";
import ApplicationForm from "@/components/Forms/ApplicationForm/ApplicationForm";

export default function Application() {
  return (
    <div className={styles.module}>
      <section className={styles.infoSection}>
        <h1>Ansök om att skapa konto</h1>
        <p>
          Vad kul att du vill vara med och fylla kartan med platser för samtida
          konst!
        </p>
        <p>
          För att skapa ett konto och publicera innehåll på sidan skickar du in
          information om din organisation nedan. Vi går sedan igenom ansökan och
          skickar ett bekräftande mail med länk för att skapa konto eller ber
          dig återkomma med fler uppgifter.
        </p>
      </section>
      <section className={styles.formSection}>
      <ApplicationForm />
      </section>
    </div>
  );
}
