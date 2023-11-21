"use client";
import styles from "./ansokan.module.css";
import ApplicationForm from "@/components/Forms/ApplicationForm/ApplicationForm";


export default function Application() {
  return (
    <div className={styles.module}>
      <div >
        Hej!
       
        Här fyller du i uppgifter om din verksamhet.
      </div>
      <ApplicationForm />
    </div>
  );
}
