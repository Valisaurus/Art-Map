import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import styles from "./EventForm.module.css";
import { Event } from "@/types/event";

export default function EventForm() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Event>();
  const [error, setError] = useState<string | null>(null);
  const onSubmit: SubmitHandler<Event> = (data) => {
    submitForm(data);
  };

  const submitForm = async (data: Event) => {
    try {
      const response = await fetch("/api/eventForm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // FIX:MESSAGE
        console.log("Form data submitted successfully");
        reset();
      } else {
        // FIX: ERROR MESSAGE
        console.error("Failed to submit form data");
        setError("Failed to submit form data");
      }
    } catch (err) {
      // FIX: ERROR MESSAGE
      console.error("Error while submitting the form:", err);
      setError("Failed to submit form data");
    }
  };

  return (
    <div className={styles.formWrapper}>
      <form onSubmit={handleSubmit(onSubmit)}>


        <button type="submit" className="">
          Skicka Ansökan
        </button>
        {error && <p className="errorMessageForm">{error}</p>}
      </form>
    </div>
  );
}
