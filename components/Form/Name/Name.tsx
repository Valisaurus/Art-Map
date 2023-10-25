import { Controller } from "react-hook-form";
import type { Control, FieldErrors } from "react-hook-form";
import type { Form } from "@/types/form";

interface nameProps {
  control: Control<Form>;
  errors: FieldErrors<Form>;
}

export default function Name({ control, errors }: nameProps) {
  return (
    <section className="nameSection">
          <label>NAMN PÅ UTSTÄLLNINGSPLATS</label>
          <Controller
            name="name"
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
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
    </section>
  );
}
