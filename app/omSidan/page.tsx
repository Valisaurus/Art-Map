"use client";
import Link from "next/link";
import styles from "./About.module.css";
export default function About() {
  return (
    <div>
      <div className={styles.div}>
        <p>
          <span>
            <b>GBG ART GUIDE </b>
          </span>
          samlar platser som ställer ut samtida konst i Göteborg. Utställande
          aktörer är indelade efter kategorierna Museum, Institution,
          Kommersiellt Galleri, Konstnärsdrivet Galleri, och Pop-Up/ tillfällig
          utställningsplats. Dessa är markerade med olika färger på startsidans
          karta.
        </p>
        <br />
        <p>
          Har du några synpunkter eller idéer får du gärna höra av dig via vår
          mail!
        </p>
      </div>
      <div className={styles.div}>
        <p>
          Har du ett konto? -{">"}
          <span>
            <b>
              <Link href={"/login"}>LOGGA IN </Link>
            </b>
          </span>
          Vill du ansöka om att skapa ett konto? -{">"}
          <span>
            <b>
              <Link href={"/login"}>ANSÖKAN</Link>
            </b>
          </span>
        </p>
import LogoutButton from "@/components/User/LogoutButton";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function About() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div>
      <p>This is the om sidan site Hej hej</p>
      <div className="">
        {user ? (
          <div className="">
            Hey, {user.email}!
            <LogoutButton />
          </div>
        ) : (
          <Link href="/login" className="">
            Login
          </Link>
        )}
      </div>
    </div>
  );
}
