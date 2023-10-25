import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import type { Form } from "@/types/form";
import styles from "./Form.module.css";

import TypeOf from "./TypeOf/TypeOf";
import Contact from "./Contact/Contact";
import OpeningHours from "./OpeningHours/OpeningHours";
import Adress from "./Address/Address";
import About from "./About/About";

export default function Form() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Form>();
  const [error, setError] = useState<string | null>(null);
  const onSubmit: SubmitHandler<Form> = (data) => {
    submitForm(data);
  };

  const submitForm = async (data: Form) => {
    try {
      const response = await fetch("/api/form", {
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
      <h1 className={styles.formHeading}>Fyll i uppgifter om er verksamhet</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* _____________ NAME ____________*/}

        {/* _____________ TYPE OF ____________*/}
        <TypeOf control={control} errors={errors} />

        {/* _____________ CONTACT ____________*/}
        <Contact control={control} errors={errors} />

        {/* _____________ OPENING HOURS ____________*/}
        <OpeningHours control={control} errors={errors} />

        {/* _____________ ADDRESS ____________*/}
        <Adress control={control} errors={errors} />

        {/* _____________ ABOUT ____________*/}
        <About control={control} errors={errors} />

        {/* _____________ SUBMIT FORM ____________*/}
        <button type="submit" className="">
          Publicera
        </button>
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </div>
  );
}
