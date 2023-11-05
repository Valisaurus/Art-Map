import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import styles from "./ExhibitionForm.module.css";
import { Application } from "@/types/application";
import { Exhibition } from "@/types/exhibition";

export default function ExhibitionForm() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Exhibition>();
  const [error, setError] = useState<string | null>(null);
  const onSubmit: SubmitHandler<Exhibition> = (data) => {
    submitForm(data);
  };

  const submitForm = async (data: Exhibition) => {
    try {
      const response = await fetch("/api/exhibitionForm", {
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
  



        <button type="submit" className="">
          Publicera utställning
        </button>
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </div>
  );
}
