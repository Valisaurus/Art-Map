import { Controller } from "react-hook-form";
import type { Control, FieldErrors } from "react-hook-form";
import styles from "../ApplicationForm.module.css";
import { Application } from "@/types/application";

interface venueNameProps {
  control: Control<Application>;
  errors: FieldErrors<Application>;
}

export default function VenueName({ control, errors }: venueNameProps) {
  return (
    <section className={styles.nameSection}>
      <h3>Namn på verksamhet</h3>
      <label hidden>Namn på verksamhet</label>
      <Controller
        name="venueName"
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
      {errors.venueName && (
        <p className="errorMessageForm">{errors.venueName.message}</p>
      )}
    </section>
  );
}
