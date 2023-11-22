import Link from "next/link";
import styles from "./About.module.css";

export default async function About() {
  return (
    <div className={styles.module}>
      <div className={styles.aboutWrapper}>
        <div className={styles.infoAndContact}>
          <section className={styles.infoSection}>
            <h1 className={styles.heading}>GBG ART GUIDE </h1>
            <p className={styles.paragraphOne}>
              samlar platser som ställer ut samtida konst i Göteborg.
              Utställande aktörer är indelade efter kategorierna Museum,
              Institution, Galleri, Konstnärsdrivet Galleri, och Pop-Up/
              tillfällig utställningsplats. Dessa är markerade med olika färger
              på startsidans karta.
            </p>
            <p className={styles.paragraphTwo}>
              Har du några synpunkter eller idéer får du gärna höra av dig via
              vår mail!
            </p>
          </section>
          <section className={styles.contact}>
            <h2>kontaktuppgifter</h2>
            <h3>telefon</h3>
            <span>0702 56 84 71</span>
            <h3>email</h3>
            <span>gbg-art-guide@info.se</span>
          </section>
        </div>
        <section className={styles.loginSection}>
          <p>
            Har du ett GBG ART GUIDE-konto? -{">"}
            <span className={styles.link}>
              <Link className="globalButton" href={"/login-user"}>
                LOGGA IN HÄR
              </Link>
            </span>
          </p>
          <br />
          <p>
            Är du admin? -{">"}
            <span className={styles.link}>
              <Link className="globalButton" href={"/login-admin"}>
                LOGGA IN HÄR
              </Link>
            </span>
          </p>
        </section>

        <section className={styles.registerSection}>
          <p>
            Vill du ansöka om att skapa ett konto? -{">"}
            <span className={styles.link}>
              <Link className="globalButton" href={"/ansokan"}>
                ANSÖKAN
              </Link>
            </span>
          </p>
        </section>
      </div>
    </div>
  );
}
