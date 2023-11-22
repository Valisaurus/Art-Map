import { Controller } from "react-hook-form";
import type { Control, FieldErrors } from "react-hook-form";
import type { Exhibition } from "@/types/exhibition";
import styles from "../ExhibitionForm.module.css";

interface exhibitionTextProps {
  control: Control<Exhibition>;
  errors: FieldErrors<Exhibition>;
}

export default function ExhibitionText({ control, errors }: exhibitionTextProps) {
  return (
    <section className={styles.nameSection}>
      <h2>Utställningstext</h2>
      <label hidden>Utställningstext</label>
      <Controller
        name="exhibitionText"
        control={control}
        rules={{ required: "Detta fält måste fyllas i" }}
        render={({ field }) => (
          <textarea {...field} value={field.value || ""} />
        )}
      />
      {errors.exhibitionText && (
        <p className="errorMessageForm">{errors.exhibitionText.message}</p>
      )}
    </section>
  );
}
