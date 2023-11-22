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
        <div className={styles.applicationAboutForm}>
          <div className={styles.nameUrlContact}>
            <div>
            <VenueName control={control} errors={errors} />
            <Url control={control} errors={errors} />
            </div>
            <div className={styles.applicationContact}>
              <ContactPerson control={control} errors={errors} />
            </div>
          </div>
          <div >
            <About control={control} errors={errors} />
            </div>
        </div>
        <button type="submit" className="globalButton">
          Skicka Ansökan
        </button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
}
