import styles from "./changePassword.module.css";

export default function ChangePassword() {
  return (
    <div className={styles.contentWrapper}>
      <div className={styles.centerContainer}>
        <h1>Byt lösenord</h1>
        <form
          className={styles.container}
          action="/auth/change-password"
          method="POST"
        >
          <label htmlFor="oldPassword">Gammalt lösenord</label>
          <input
            className={styles.passwordInput}
            name="oldPassword"
            id="oldPassword"
            type="password"
            required
          ></input>
          <label htmlFor="newPassword">Nytt lösenord</label>
          <input
            className={styles.passwordInput}
            name="newPassword"
            id="newPassword"
            type="password"
            required
          ></input>
          <button className="globalButton">Byt lösenord </button>
        </form>
      </div>
    </div>
  );
}
