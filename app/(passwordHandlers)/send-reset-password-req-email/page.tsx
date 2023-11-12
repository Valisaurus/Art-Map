"use client";
import styles from "./sendResetPasswordReqEmail.module.css";

export default function ResetPasswordWithEmail() {
  return (
    <div>
      <form
        action="/auth/reset-password-email"
        method="POST"
        className={`${styles.form} ${styles.flex} ${styles.flexCol} ${styles.gap}`}
      >
        <label htmlFor="mail">Skriv in din mail</label>
        <input name="email" className={styles.input} required ></input>

        <button className={`${styles.button}`}>
          Återställ lösenord
        </button>
      </form>
    </div>
  );
}
