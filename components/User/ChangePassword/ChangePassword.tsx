import styles from "./changePassword.module.css";

export default function ChangePassword() {
  return (
    <div>
      <h1>Byt lösenord</h1>
      <form
        className={styles.container}
        action="/auth/change-password"
        method="POST"
      >
        <label htmlFor="old password">Gammalt lösenord</label>
        <input name="oldPassword" type="password" required></input>
        <label htmlFor="new password">Nytt lösenord</label>
        <input name="newPassword" type="password" required></input>
        <button className={styles.button}>Byt lösenord </button>
      </form>
    </div>
  );
}
