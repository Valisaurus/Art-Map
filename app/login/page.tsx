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

        <Messages />
      </form>
    </div>
  );
}
