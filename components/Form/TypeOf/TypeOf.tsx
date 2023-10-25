import { Controller } from "react-hook-form";
import type { Control, FieldErrors } from "react-hook-form";
import type { Form } from "@/types/form";

interface TypeOfProps {
  control: Control<Form>;
  errors: FieldErrors<Form>;
}

export default function TypeOf({ control, errors }: TypeOfProps) {

  return (
    <section className="typeOfSection">
      <label>TYP AV UTSTÄLLNINGSPLATS</label>
      <Controller
        name="typeOf"
        control={control}
        rules={{ required: "Välj endast ett alternativ" }}
        render={({ field }) => (
          <div>
            <label>
              <input
                type="radio"
                name="typeOf"
                value="commersialGallery"
                checked={field.value === "commersialGallery"}
                onChange={() => field.onChange("commersialGallery")}
              />
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
              Pop Up/ temporär
            </label>
          </div>
        )}
      />
      {errors.typeOf && <p className="text-red-500">{errors.typeOf.message}</p>}
    </section>
  );
}
