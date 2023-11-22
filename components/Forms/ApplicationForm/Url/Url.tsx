import { Controller } from "react-hook-form";
import type { Control, FieldErrors } from "react-hook-form";
import styles from "../ApplicationForm.module.css";
import { Application } from "@/types/application";

interface urlProps {
  control: Control<Application>;
  errors: FieldErrors<Application>;
}

export default function Url({ control, errors }: urlProps) {
  return (
    <section className={styles.urlSection}>
      <h3>Hemsida</h3>
      <label hidden>Hemsida</label>
      <Controller
        name="websiteUrl"
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
      {errors.websiteUrl && (
        <p className="errorMessageForm">{errors.websiteUrl.message}</p>
      )}
    </section>
  );
}
