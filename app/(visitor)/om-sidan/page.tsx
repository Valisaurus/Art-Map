"use client";
import Link from "next/link";
import styles from "./About.module.css";

export default async function About() {
  return (
    <div className={styles.aboutWrapper}>
      <section className={styles.infoSection}>
        <p>
          <span>
            <b>GBG ART GUIDE </b>
          </span>
          samlar platser som ställer ut samtida konst i Göteborg. Utställande
          aktörer är indelade efter kategorierna Museum, Institution,
          Galleri, Konstnärsdrivet Galleri, och Pop-Up/ tillfällig
          utställningsplats. Dessa är markerade med olika färger på startsidans
          karta.
        </p>
        <br />
        <p>
          Har du några synpunkter eller idéer får du gärna höra av dig via vår
          mail!
        </p>
      </section>
      <section className={styles.loginSection}>
        <p>
          Har du ett GBG ART GUIDE-konto? -{">"}
          <span>
            <b>
              <Link href={"/login-user"}>LOGGA IN HÄR</Link>
            </b>
          </span>
        </p>
        <br />
        <p>
          Är du admin? -{">"}
          <span>
            <b>
              <Link href={"/login-admin"}>LOGGA IN HÄR</Link>
            </b>
          </span>
        </p>
      </section>

      <section className={styles.registerSection}>
        <p>
          Vill du ansöka om att skapa ett konto? -{">"}
          <span>
            <b>
              <Link href={"/ansokan"}>ANSÖKAN</Link>
            </b>
          </span>
        </p>
      </section>
    </div>
  );
}
