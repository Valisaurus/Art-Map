import { Controller } from "react-hook-form";
import type { Control, FieldErrors } from "react-hook-form";
import type { Venue } from "@/types/venue";
import styles from "../ApplicationForm.module.css";

interface ContactProps {
  control: Control<Venue>;
  errors: FieldErrors<Venue>;
}

export default function ContactPerson({ control, errors }: ContactProps) {
  return (
    <section className={styles.contactSection}>
      <h2>Kontaktperson</h2>

   
      <label>Namn</label>
      <Controller
        name="name"
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
      {errors.name && (
        <p className={styles.errorMessage}>{errors.name.message}</p>
      )}

      <label>Email</label>
      <Controller
        name="contact.email"
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
      {errors.contact?.email && (
        <p className={styles.errorMessage}>{errors.contact?.email.message}</p>
      )}

      <label>Telefon</label>
      <Controller
        name="contact.phone"
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
      {errors.contact?.phone && (
        <p className={styles.errorMessage}>{errors.contact?.phone.message}</p>
      )}
    </section>
  );
}
