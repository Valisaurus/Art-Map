import Link from "next/link";
import Messages from "./messages";
import styles from "./login.module.css";

export default function Login() {
  return (
    <div className={styles.formWrapper}>
      <form className={styles.form} action="/auth/sign-in" method="post">
        <label htmlFor="email">Email</label>
        <input name="email" placeholder="you@example.com" required />
        <label htmlFor="password">Lösenord</label>
        <input
          type="password"
          name="password"
          placeholder="••••••••"
          required
        />
        <button className={styles.loginButton}>Logga in</button>
        <button className={styles.registerButton} formAction="/auth/sign-up">
          Registrera konto
        </button>
        <Messages />
      </form>
    </div>
  );
}
