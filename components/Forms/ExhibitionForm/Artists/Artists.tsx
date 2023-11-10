import { Controller } from "react-hook-form";
import type { Control, FieldErrors } from "react-hook-form";
import type { Exhibition } from "@/types/exhibition";
import styles from "../VenueForm.module.css";

interface artistsProps {
  control: Control<Exhibition>;
  errors: FieldErrors<Exhibition>;
}

export default function Artists({ control, errors }: artistsProps) {
  return (
    <section className={styles.aboutSection}>
      <h2>Om verksamheten</h2>
      <label hidden>Om verksamheten</label>
      <Controller
        name="about"
        control={control}
        rules={{ required: "Detta fält måste fyllas i" }}
        render={({ field }) => (
          <textarea {...field} value={field.value || ""} />
        )}
      />
      {errors.about && (
        <p className={styles.errorMessage}>{errors.about.message}</p>
      )}
    </section>
  );
}
