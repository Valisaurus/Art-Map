import { Controller } from "react-hook-form";
import type { Control, FieldErrors } from "react-hook-form";
import type { Venue } from "@/types/venue";
import styles from "../VenueForm.module.css";

interface AdressProps {
  control: Control<Venue>;
  errors: FieldErrors<Venue>;
}

export default function Adress({ control, errors }: AdressProps) {
  return (
    <section className={styles.adressSection}>
      <h2>Adress</h2>
      <label>Gatunamn</label>
      <Controller
        name="address.streetName"
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
      {errors.address?.streetName && (
        <p className="errorMessageForm">
          {errors.address?.streetName.message}
        </p>
      )}

      <label>Gatunummer</label>
      <Controller
        name="address.streetNo"
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
      {errors.address?.streetNo && (
        <p className="errorMessageForm">
          {errors.address?.streetNo.message}
        </p>
      )}

      <label>Postkod</label>
      <Controller
        name="address.zip"
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
      {errors.address?.zip && (
        <p className="errorMessageForm">{errors.address?.zip.message}</p>
      )}

      <label>Stad</label>
      <Controller
        name="address.city"
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
      {errors.address?.city && (
        <p className="errorMessageForm">{errors.address?.city.message}</p>
      )}
    </section>
  );
}
