import { Controller } from "react-hook-form";
import type { Control, FieldErrors } from "react-hook-form";
import type { Venue } from "@/types/venue";
import styles from "../Form.module.css";

interface TypeOfProps {
  control: Control<Venue>;
  errors: FieldErrors<Venue>;
}

export default function TypeOf({ control, errors }: TypeOfProps) {
  return (
    <section className={styles.typeOfSection}>
      <h2>Typ av verksamhet</h2>
      <label hidden>Typ av verksamhet</label>
      <Controller
        name="typeOf"
        control={control}
        rules={{ required: "Ett av alternativen måste kryssas i" }}
        render={({ field }) => (
          <div className={styles.radioList}>
            <label>
              <input
                type="radio"
                name="typeOf"
                value="commersialGallery"
                checked={field.value === "commersialGallery"}
                onChange={() => field.onChange("commersialGallery")}
              />
              <svg />
              Kommersiellt Galleri
            </label>
            <label>
              <input
                type="radio"
                name="typeOf"
                value="artistRun"
                checked={field.value === "artistRun"}
                onChange={() => field.onChange("artistRun")}
              />
              <svg />
              Konstnärsdrivet
            </label>
            <label>
              <input
                type="radio"
                name="typeOf"
                value="museum"
                checked={field.value === "museum"}
                onChange={() => field.onChange("museum")}
              />
              <svg />
              Museum
            </label>
            <label>
              <input
                type="radio"
                name="typeOf"
                value="institution"
                checked={field.value === "institution"}
                onChange={() => field.onChange("institution")}
              />
              <svg />
              Konsthall
            </label>
            <label>
              <input
                type="radio"
                name="typeOf"
                value="popUp"
                checked={field.value === "popUp"}
                onChange={() => field.onChange("popUp")}
              />
              <svg />
              Pop Up/ temporär
            </label>
          </div>
        )}
      />
      {errors.typeOf && (
        <p className={styles.errorMessage}>{errors.typeOf.message}</p>
      )}
    </section>
  );
}
