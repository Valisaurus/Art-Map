import { Controller } from "react-hook-form";
import type { Control, FieldErrors } from "react-hook-form";
import type { Exhibition } from "@/types/exhibition";
import styles from "../ExhibitionForm.module.css";

interface imageProps {
  control: Control<Exhibition>;
  errors: FieldErrors<Exhibition>;
}

export default function Image({ control, errors }: imageProps) {
  return (
    <section className={styles.nameSection}>
      <h2>Utställningsbild</h2>
      <label hidden>Utställningsbild</label>
      <Controller
        name="image"
        control={control}
        rules={{ required: "Detta fält måste fyllas i" }}
        render={({ field }) => (
          <input
            type="file"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) {
                field.onChange(file);
              }
            }}
          />
        )}
      />
      {errors.image && (
        <p className={styles.errorMessage}>{errors.image.message}</p>
      )}
    </section>
  );
}
