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
      <h3>Kontaktperson</h3>
      <div className={styles.labelInput}>
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
          <p className="errorMessageForm">
            {errors.contactPerson.name.message}
          </p>
        )}
      </div>
      <div className={styles.labelInput}>
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
          <p className="errorMessageForm">
            {errors.contactPerson?.email.message}
          </p>
        )}
      </div>
      <div className={styles.labelInput}>
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
          <p className="errorMessageForm">
            {errors.contactPerson?.phone.message}
          </p>
        )}
      </div>
    </section>
  );
}
