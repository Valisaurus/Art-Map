import { Controller } from "react-hook-form";
import type { Control, FieldErrors } from "react-hook-form";
import type { Form } from "@/types/form";
import styles from "../Form.module.css"

interface aboutProps {
  control: Control<Form>;
  errors: FieldErrors<Form>;
}

export default function TypeOf({ control, errors }: aboutProps) {
  return (
    <section className={styles.aboutSection}>
      <h2>Om verksamheten</h2>
      <label hidden>Om verksamheten</label>
      <Controller
        name="about"
        control={control}
        rules={{ required: "Detta fält måste fyllas i" }}
        render={({ field }) => (
          <textarea
            {...field}
            value={field.value || []}
          />
        )}
      />
      {errors.about && <p className="text-red-500">{errors.about?.message}</p>}
    </section>
  );
}
