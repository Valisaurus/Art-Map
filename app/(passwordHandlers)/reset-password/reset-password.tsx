"use client";
import styles from "./resetPassword.module.css"; 
import { useSearchParams } from "next/navigation";

const ClientSideResetPassword = () => {
  const codeFetch = useSearchParams().get("code");
  const code = codeFetch !== null ? codeFetch : "";
  return (
    <div>
      <div className={`${styles.container} ${styles.flex} ${styles.justifyCenter} ${styles.itemsCenter} ${styles.fullHeight}`}>
        <div className={`${styles.flex} ${styles.justifyCenter} ${styles.itemsCenter} ${styles.border} ${styles.borderSolid} ${styles.borderColor} ${styles.textColors} ${styles.width} ${styles.height} ${styles.padding}`}>
          <form
            action="/auth/reset-pw"
            method="POST"
            className={`${styles.flex} ${styles.flexCol} ${styles.gap}`}
          >
            <input type="hidden" name="code" value={code} />
            <label htmlFor="password">Skriv in ditt nya lösenord:</label>
            <div className={`${styles.inputContainer}`}>
              <input type="password" name="password" className={`${styles.input}`}/>
            </div>
            <button className={`${styles.button}`}>
              Uppdatera
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ClientSideResetPassword;
