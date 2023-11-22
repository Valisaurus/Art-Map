"use client";
import { useSearchParams } from "next/navigation";
import styles from "../passWordHandlers.module.css";

const ClientSideResetPasswordEmail = () => {
  const codeFetch = useSearchParams().get("code");
  const code = codeFetch !== null ? codeFetch : "";
  return (
    <div className={styles.contentWrapper}>
      <div className={styles.centerContainer}>
        <h1>NYTT LÖSENORD</h1>
        <p>
          Skriv in ditt nya lösenord så omdirigeras du till sidan för att logga
          in på nytt.
        </p>
        <form action="/auth/reset-pw" method="POST" className={styles.form}>
          <input type="hidden" name="code" value={code} />
          <label htmlFor="password">Skriv in ditt nya lösenord:</label>

          <input type="password" name="password" />

          <button className="globalButton">Uppdatera</button>
        </form>
      </div>
    </div>
  );
};

export default ClientSideResetPasswordEmail;
