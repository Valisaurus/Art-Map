import { Controller } from "react-hook-form";
import type { Control, FieldErrors } from "react-hook-form";
import type { Venue } from "@/types/venue";
import styles from "../VenueFormUpdate.module.css";

interface nameProps {
  control: Control<Venue>;
  errors: FieldErrors<Venue>;
}

export default function Name({ control, errors }: nameProps) {
  return (
    <section className={styles.nameSection}>
      <h2>Namn på verksamhet</h2>
      <label hidden>Namn på verksamhet</label>
      <Controller
        name="venueName"
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
      {errors.venueName && (
        <p className={styles.errorMessage}>{errors.venueName.message}</p>
      )}
    </section>
  );
}
