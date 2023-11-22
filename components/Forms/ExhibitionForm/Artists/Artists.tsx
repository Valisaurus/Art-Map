import { Controller } from "react-hook-form";
import type { Control, FieldErrors } from "react-hook-form";
import type { Exhibition } from "@/types/exhibition";
import styles from "../ExhibitionForm.module.css";

interface artistsProps {
  control: Control<Exhibition>;
  errors: FieldErrors<Exhibition>;
}

export default function Artists({ control, errors }: artistsProps) {
  return (
    <section className={styles.nameSection}>
      <h2>Konstnär / konstnärer</h2>
      <small>Separera med komma, avsluta med & </small>
      <label hidden>Konstnär / konstnärer</label>
      <Controller
        name="artistNames"
        control={control}
        rules={{ required: "Detta fält måste fyllas i" }}
        render={({ field }) => (
          <input {...field} value={field.value || ""} />
        )}
      />
      {errors.artistNames && (
        <p className="errorMessageForm">{errors.artistNames.message}</p>
      )}
    </section>
  );
}
