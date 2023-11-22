import styles from "../passWordHandlers.module.css";

export default function VerificationPage() {
  return (
    <div className={styles.contentWrapper}>
    <div className={styles.centerContainer}>
    <h1>Kolla din inkorg!</h1>
      <p> Vi har skickat ett mail med en länk som omdirigerar dig till en sida för att återställa ditt lösenord.</p>
    </div>
    </div>
  );
}
