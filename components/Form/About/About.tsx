import { Controller } from "react-hook-form";
import type { Control, FieldErrors } from "react-hook-form";
import type { Form } from "@/types/form";

interface aboutProps {
  control: Control<Form>;
  errors: FieldErrors<Form>;
}

export default function TypeOf({ control, errors }: aboutProps) {
  return (
    <section className="aboutSection">
      <label>Om utställningsplatsen</label>
      <Controller
        name="about"
        control={control}
        rules={{ required: "Detta fält måste fyllas i" }}
        render={({ field }) => (
          <textarea
            className=""
            placeholder=""
            {...field}
            value={field.value || []}
          />
        )}
      />
      {errors.about && <p className="text-red-500">{errors.about?.message}</p>}
    </section>
  );
}
