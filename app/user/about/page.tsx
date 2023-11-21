"use client";

import Link from "next/link";
import styles from "./about.module.css";
// import VenueForm from "@/components/Forms/VenueForm/VenueForm";
// import VenueFormUpdate from "@/components/Forms/VenueFormUpdate/VenueFormUpdate";

export default function VenueAbout() {
  return (
    <>
      <div className={styles.container}>
        Hej!
        <br />
        Här fyller du i uppgifter om din verksamhet.
        <div className={styles.links}>
          <Link href="/user/about/create-venue">Lägg till Galleri</Link>
          <Link href="/user/about/update-venue">Uppdatera Galleri </Link>
          <Link href="/user/about/exhibitions">Dina Utställningar</Link>
          <Link href="/user/about/event">Dina Event</Link>
        </div>
      </div>
    </>
  );
}

// import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
// import { cookies } from "next/headers";
// import VenueAbout from "./about";
// import { redirect } from "next/navigation";

// export default async function AboutPage() {
//   const supabase = createServerComponentClient({
//     cookies,
//   });

//   const {
//     data: { session },
//   } = await supabase.auth.getSession();

//   if (session) {
//     const {
//       data: { user },
//     } = await supabase.auth.getUser();
//     const userId = user?.id;

//   } else {
//     return "could not get user";
//   }
//   if (!session) {
//     redirect("/");
//   }

//   return <VenueAbout/>;
// }
