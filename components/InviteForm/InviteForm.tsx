"use client";
import { useForm, SubmitHandler, Control, FieldErrors, Controller } from "react-hook-form";
import { useState } from "react";
import styles from "./InviteForm.module.css";
import { Invite } from "@/types/invite";

export default function InviteForm() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Invite>();
  const [error, setError] = useState<string | null>(null);
  const onSubmit: SubmitHandler<Invite> = (data) => {
    submitForm(data);
  };

  const submitForm = async (data: Invite) => {
    try {
      const response = await fetch("/auth/invite", {
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
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Email</label>
        <Controller
          name="email"
          control={control}
          rules={{ required: "Detta fält måste fyllas i" }}
          render={({ field }) => (
            <input
              type="email"
              className=""
              placeholder=""
              {...field}
              value={field.value || ""}
            />
          )}
        />
        {errors.email && (
          <p className={styles.errorMessage}>{errors.email.message}</p>
        )}
        <button>Skicka länk att skapa konto</button>
      </form>
    </div>
  );
}
