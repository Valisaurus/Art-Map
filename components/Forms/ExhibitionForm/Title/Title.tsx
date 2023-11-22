import { Controller } from "react-hook-form";
import type { Control, FieldErrors } from "react-hook-form";
import type { Exhibition } from "@/types/exhibition";
import styles from "../ExhibitionForm.module.css";

interface titleProps {
  control: Control<Exhibition>;
  errors: FieldErrors<Exhibition>;
}

export default function Title({ control, errors }: titleProps) {
  return (
    <section className={styles.nameSection}>
      <h2>Utställningstitel</h2>
      <label hidden>Utställningstitel</label>
      <Controller
        name="title"
        control={control}
        rules={{ required: "Detta fält måste fyllas i" }}
        render={({ field }) => (
          <input {...field} value={field.value || ""} />
        )}
      />
      {errors.title && (
        <p className="errorMessageForm">{errors.title.message}</p>
      )}
    </section>
  );
}
