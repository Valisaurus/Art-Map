import styles from "./LogoutButton.module.css"

export default function LogoutButton() {
  return (
    <form action="/auth/sign-out" method="post">
      <button className={styles.logoutButton}>
        Logga ut
      </button>
    </form>
  )
}
