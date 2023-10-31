import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import type { Venue } from "@/types/venue";
import styles from "./ApplicationForm.module.css";

import Name from "../VenueForm/Name/Name";
import Url from "../VenueForm/Url/Url";
import About from "../VenueForm/About/About";
import ContactPerson from "./contactPerson/contactPerson";

export default function ApplicationForm() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Venue>();
  const [error, setError] = useState<string | null>(null);
  const onSubmit: SubmitHandler<Venue> = (data) => {
    submitForm(data);
  };

  const submitForm = async (data: Venue) => {
    try {
      const response = await fetch("/api/applicationform", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // FIXA:MESSAGE
        console.log("Form data submitted successfully");
        reset();
      } else {
        // FIXA: ERROR MESSAGE
        console.error("Failed to submit form data");
        setError("Failed to submit form data");
      }
    } catch (err) {
      // FIXA: ERROR MESSAGE
      console.error("Error while submitting the form:", err);
      setError("Failed to submit form data");
    }
  };

  return (
    <div className={styles.formWrapper}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* _____________ NAME ____________*/}
        <Name control={control} errors={errors} />
        {/* _____________ WEBSITE ____________*/}
        <Url control={control} errors={errors} />
        {/* _____________ ABOUT ____________*/}
        <About control={control} errors={errors} />
        {/* _____________ CONTACT ____________*/}
        <ContactPerson control={control} errors={errors} />

        <button type="submit" className="">
          Skicka Ansökan
        </button>
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </div>
  );
}
