import { Controller } from "react-hook-form";
import type { Control, FieldErrors } from "react-hook-form";
import type { Form } from "@/types/form";

interface AdressProps {
  control: Control<Form>;
  errors: FieldErrors<Form>;
}

export default function Adress({ control, errors }: AdressProps) {
  return (
    <section className="adressSection">
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
        <p className="text-red-500">{errors.address?.streetName.message}</p>
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
        <p className="text-red-500">{errors.address?.streetNo.message}</p>
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
        <p className="text-red-500">{errors.address?.zip.message}</p>
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
        <p className="text-red-500">{errors.address?.city.message}</p>
      )}
    </section>
  );
}
