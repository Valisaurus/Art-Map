// import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
// import { cookies } from "next/headers";
// import { redirect } from 'next/navigation';
import Messages from "./messages";
import styles from "./login.module.css";

export const dynamic = "force-dynamic";

export default async function LoginAdmin() {
  // const supabase = createServerComponentClient({ cookies });
  // const {
  //   data: { session },
  // } = await supabase.auth.getSession();

  // if (session) {
  //   // this is a protected route - only users who are signed in can view this route
  //   redirect('/startpage');
  // }

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

        <Messages />
      </form>
    </div>
  );
}
