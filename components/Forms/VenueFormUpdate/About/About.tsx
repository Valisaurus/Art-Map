import { Controller } from "react-hook-form";
import type { Control, FieldErrors } from "react-hook-form";
import type { Venue } from "@/types/venue";
import styles from "../VenueFormUpdate.module.css";

interface aboutProps {
  control: Control<Venue>;
  errors: FieldErrors<Venue>;
}

export default function About({ control, errors }: aboutProps) {
  return (
    <section className={styles.aboutSection}>
      <h2>Om verksamheten</h2>
      <label hidden>Om verksamheten</label>
      <Controller
        name="about"
        control={control}
        // rules={{ required: "Detta fält måste fyllas i" }}
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
