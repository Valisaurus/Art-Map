import { Controller } from "react-hook-form";
import type { Control, FieldErrors } from "react-hook-form";
import styles from "../ApplicationForm.module.css";
import { Application } from "@/types/application";

interface ContactProps {
  control: Control<Application>;
  errors: FieldErrors<Application>;
}

export default function ContactPerson({ control, errors }: ContactProps) {
  return (
    <section className={styles.contactSection}>
      <h2>Kontaktperson</h2>

   
      <label>Namn</label>
      <Controller
        name="contactPerson.name"
        control={control}
        rules={{ required: "Detta fält måste fyllas i" }}
        render={({ field }) => (
          <input
            className=""
            placeholder=""
            {...field}
            value={field.value || ""}
          />
        )}
      />
      {errors.contactPerson?.name && (
        <p className={styles.errorMessage}>{errors.contactPerson.name.message}</p>
      )}

      <label>Email</label>
      <Controller
        name="contactPerson.email"
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
      {errors.contactPerson?.email && (
        <p className={styles.errorMessage}>{errors.contactPerson?.email.message}</p>
      )}

      <label>Telefon</label>
      <Controller
        name="contactPerson.phone"
        control={control}
        // rules={{ required: "Detta fält måste fyllas i" }}
        render={({ field }) => (
          <input
            type="tel"
            className=""
            placeholder=""
            {...field}
            value={field.value || ""}
          />
        )}
      />
      {errors.contactPerson?.phone && (
        <p className={styles.errorMessage}>{errors.contactPerson?.phone.message}</p>
      )}
    </section>
  );
}
