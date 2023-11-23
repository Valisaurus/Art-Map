import { Controller } from "react-hook-form";
import type { Control, FieldErrors } from "react-hook-form";
import type { Exhibition } from "@/types/exhibition";
import styles from "../ExhibitionForm.module.css";

interface dateProps {
  control: Control<Exhibition>;
  errors: FieldErrors<Exhibition>;
}

export default function Dates({ control, errors }: dateProps) {
  return (
    <>
      <div className={styles.headingWrapper}>
        <h2>Datum för utställning</h2>
      </div>
      <div className={styles.day}>
        <h3>Startdatum</h3>
        <label hidden>Start</label>
        <Controller
          name="dates.opening"
          control={control}
          render={({ field }) => (
            <input
              type="date"
              className=""
              {...field}
              value={field.value || ""}
            />
          )}
        />
        {errors.dates?.opening && (
          <p className="errorMessageForm">
            {errors.dates?.opening.message}
          </p>
        )}
        <h3>Slutdatum</h3>
        <label hidden>Slutdatum</label>
        <Controller
          name="dates.closing"
          control={control}
          render={({ field }) => (
            <input
            type= "date"
              className=""
              {...field}
              value={field.value || ""}
            />
          )}
        />
        {errors.dates?.closing && (
          <p className="errorMessageForm">
            {errors.dates?.closing.message}
          </p>
        )}
      </div>
    </>
  );
}
