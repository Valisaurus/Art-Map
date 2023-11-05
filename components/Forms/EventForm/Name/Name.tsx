import { Controller } from "react-hook-form";
import type { Control, FieldErrors } from "react-hook-form";
import type { Venue } from "@/types/venue";
import styles from "../Form.module.css";

interface nameProps {
  control: Control<Venue>;
  errors: FieldErrors<Venue>;
}

export default function Name({ control, errors }: nameProps) {
  return (
    <section className={styles.nameSection}>
      <h2>Namn på utställning</h2>
      <label hidden>Namn på utställning</label>
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

      <h2>Namn på konstnär/kostnätrer</h2>
      <label hidden>Namn på konstnär/kostnätrer</label>
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
    </section>
  );
}
