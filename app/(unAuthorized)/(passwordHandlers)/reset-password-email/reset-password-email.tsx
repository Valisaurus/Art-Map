"use client";
import { useSearchParams } from "next/navigation";
import styles from "./resetPasswordEmail.module.css";

const ClientSideResetPasswordEmail = () => {
  const codeFetch = useSearchParams().get("code");
  const code = codeFetch !== null ? codeFetch : "";
  return (
    <form
      action="/auth/reset-pw"
      method="POST"
      className={`${styles.form} ${styles.flex} ${styles.flexCol} ${styles.gap}`}
    >
      <input type="hidden" name="code" value={code} />
      <label htmlFor="password">Skriv in ditt nya lösenord:</label>
      <div className={`${styles.inputContainer}`}>
        <input type="password" name="password" className={`${styles.input}`}/>
      </div>
      <button className={`${styles.button}`}>
        Uppdatera
      </button>
    </form>
  );
};

export default ClientSideResetPasswordEmail;
