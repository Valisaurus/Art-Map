//import Messages from "./messages";
import styles from "./signUp.module.css";

export default function changePw() {
  return (
    <div className={styles.formWrapper}>
      <form className={styles.form} action="/auth/reset-pw" method="POST">
        <label htmlFor="email">Email</label>
        <input name="email" placeholder="you@example.com" required />
        <label htmlFor="newPassword">Nytt Lösenord</label>
        <input
          type="new password"
          name="new password"
          placeholder="••••••••"
          required
        />
        <button className={styles.loginButton}>Byt lösenord</button>

        {/* <Messages /> */}
      </form>
    </div>
  );
}
