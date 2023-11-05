import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import styles from "./ApplicationForm.module.css";
import VenueName from "./VenueName/VenueName";
import Url from "./Url/Url";
import About from "./About/About";
import ContactPerson from "./contactPerson/contactPerson";
import { Application } from "@/types/application";

export default function ApplicationForm() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Application>();
  const [error, setError] = useState<string | null>(null);
  const onSubmit: SubmitHandler<Application> = (data) => {
    submitForm(data);
  };

  const submitForm = async (data: Application) => {
    try {
      const response = await fetch("/api/applicationForm", {
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
        <VenueName control={control} errors={errors} />
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
