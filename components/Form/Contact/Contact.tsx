import { Controller } from "react-hook-form";
import type { Control, FieldErrors } from "react-hook-form";
import type { Form } from "@/types/form";
import styles from "../Form.module.css";

interface ContactProps {
  control: Control<Form>;
  errors: FieldErrors<Form>;
}

export default function Contact({ control, errors }: ContactProps) {
  return (
    <section className={styles.contactSection}>
      <h2>KONTAKTUPPGIFTER</h2>
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
        <p className="text-red-500">{errors.contact?.email.message}</p>
      )}

      <label>Telefon</label>
      <Controller
        name="contact.phone"
        control={control}
        rules={{ required: "Detta fält måste fyllas i" }}
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
        <p className="text-red-500">{errors.contact?.phone.message}</p>
      )}
    </section>
  );
}
