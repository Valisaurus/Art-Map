import { Controller } from "react-hook-form";
import type { Control, FieldErrors } from "react-hook-form";
import type { Venue } from "@/types/venue";
import styles from "../VenueFormUpdate.module.css";

interface urlProps {
  control: Control<Venue>;
  errors: FieldErrors<Venue>;
}

export default function Url({ control, errors }: urlProps) {
  return (
    <section className={styles.urlSection}>
      <h2>Hemsida</h2>
      <label hidden>Hemsida</label>
      <Controller
        name="websiteUrl"
        control={control}
        // rules={{ required: "Detta fält måste fyllas i" }}
        render={({ field }) => (
          <input
            className=""
            placeholder=""
            {...field}
            value={field.value || ""}
          />
        )}
      />
      {errors.websiteUrl && (
        <p className={styles.errorMessage}>{errors.websiteUrl.message}</p>
      )}
    </section>
  );
}
