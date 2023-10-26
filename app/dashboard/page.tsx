"use client";
import styles from "./dashboard.module.css";
import Form from "@/components/Form/Form";

export default function Dashboard() {
  return (
    <>
      <div className={styles.intro}>
        Hej!
        <br />
        Här fyller du i uppgifter om din verksamhet.
      </div>
      <Form />
    </>
  );
}
