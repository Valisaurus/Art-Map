"use client";
import styles from "./sendResetPasswordReqEmail.module.css";

export default function ResetPasswordWithEmail() {
  return (
    <div className={styles.contentWrapper}>
      <div className={styles.info}></div>
      <h1 className={styles.heading}>Återställ lösenord</h1>
      <p>Om du har glömt eller vill byta ditt lösenord skriver du in din email nedan. Vi skickar då en länk till din mail där du kan skriva in ditt nya lösenord. </p>
      <form
        action="/auth/reset-password-email"
        method="POST"
        className={styles.form}
      >
        <label htmlFor="mail" className={styles.label}>Skriv in din mail</label>
        <input name="email" className={styles.input} required ></input>

        <button className={styles.button}>
          skicka länk
        </button>
      </form>
    </div>
  );
}
