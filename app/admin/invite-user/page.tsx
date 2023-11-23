"use client";
import InviteForm from "@/components/Forms/InviteForm/InviteForm";
import styles from "../admin.module.css";

export const dynamic = "force-dynamic";

export default function InvitePage() {
  return (
    <div className={styles.inviteContainer}>
      <h1>Bjud in användare</h1>
      <p>Skriv in mailen nedan på en godkänd användare. Sedan skickas ett mail med en länk att skriva in ett lösenord och skapa konto. </p>
      <InviteForm />
    </div>
  );
}
