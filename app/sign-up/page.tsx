import Link from "next/link";
//import Messages from "./messages";
import styles from "./signUp.module.css";

export default function SignUp() {
  return (
    <div className={styles.formWrapper}>
      <form className={styles.form} action="/auth/sign-up" method="post">
        <label htmlFor="email">Email</label>
        <input name="email" placeholder="you@example.com" required />
        <label htmlFor="password">Lösenord</label>
        <input
          type="password"
          name="password"
          placeholder="••••••••"
          required
        />
        <button className={styles.loginButton}>Registera konto</button>

        {/* <Messages /> */}
      </form>
    </div>
  );
}
