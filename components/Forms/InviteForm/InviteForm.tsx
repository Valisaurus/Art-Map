import Messages from "./messages";
import styles from "./inviteForm.module.css";
// moved form
export default function InviteForm() {
  return (
    <div className={styles.formWrapper}>
      <form className={styles.form} action="/auth/invite" method="POST">
        <input type="email" name="email" placeholder=" Skriv in email"/>
        <button className="globalButton">Skicka länk</button>
      </form>
      <Messages />
    </div>
  );
}
