import Messages from "@/components/Messages/Messages";
import styles from "./login.module.css";
import Link from "next/link";
export const dynamic = "force-dynamic";

export default async function LoginAdmin() {
  return (
    <div className={styles.formWrapper}>
      <form className={styles.form} action="/auth/sign-in-admin" method="post">
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
        <Link href="/send-reset-password-req-email">
          <button>Glömt lösenord?</button>
        </Link>

        <Messages />
      </form>
    </div>
  );
}
