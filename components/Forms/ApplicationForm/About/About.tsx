import { Controller } from "react-hook-form";
import type { Control, FieldErrors } from "react-hook-form";
import styles from "../ApplicationForm.module.css";
import { Application } from "@/types/application";

interface aboutProps {
  control: Control<Application>;
  errors: FieldErrors<Application>;
}

export default function About({ control, errors }: aboutProps) {
  return (
    <section className={styles.aboutSection}>
      <h3>Om verksamheten</h3>
      <label hidden>Om verksamheten</label>
      <Controller
        name="about"
        control={control}
        rules={{ required: "Detta fält måste fyllas i" }}
        render={({ field }) => (
          <textarea {...field} value={field.value || ""}  />
        )}
      />
      {errors.about && (
        <p className="errorMessageForm">{errors.about.message}</p>
      )}
    </section>
  );
}
