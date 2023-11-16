import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import styles from "./ExhibitionForm.module.css";
import { Exhibition } from "@/types/exhibition";
// import Title from "./Title/Title";
import Artists from "./Artists/Artists";
import Dates from "./Dates/Dates";
import ExhibitionText from "./ExhibitionText/ExhibitionText";
import Title from "./Title/Title";
//import Image from "./Image/Image";

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
        <Title control={control} errors={errors} />
        <Artists control={control} errors={errors} />
        <Dates control={control} errors={errors} />
        <ExhibitionText control={control} errors={errors} />
        {/* <Image control={control} errors={errors} /> */}

        <button type="submit" className="">
          Publicera utställning
        </button>
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </div>
  );
}
