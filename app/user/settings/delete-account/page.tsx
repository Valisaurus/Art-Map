import styles from "./deleteAccount.module.css";

const DeleteAccount = () => {
  return (
    <div className={styles.contentWrapper}>
      <div className={styles.centerContainer}>
        <h1>Radera konto</h1>
        <p>
          Är du säker på att du vill ta bort ditt konto permanent? All din data
          kommer att försvinna från sidan.
        </p>
        <form action="/auth/delete-account" method="post">
          <label htmlFor="password"></label>
          <input
          className={styles.passwordInput}
            type="password"
            id="password"
            name="password"
            placeholder=" Skriv in ditt lösenord"
          />

          <button className="globalButton">Radera</button>
        </form>
      </div>
    </div>
  );
};

export default DeleteAccount;
