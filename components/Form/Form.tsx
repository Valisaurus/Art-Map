import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { useState } from "react";
import type { Form } from "@/types/form";

export default function Form() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Form>();
  const [error, setError] = useState<string | null>(null);
  const onSubmit: SubmitHandler<Form> = (data) => {
    submitForm(data);
  };

  const submitForm = async (data: Form) => {
    try {
      const response = await fetch("/api/form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // FIXA:MESSAGE
        console.log("Form data submitted successfully");
        reset();
      } else {
        // FIXA: ERROR MESSAGE
        console.error("Failed to submit form data");
        setError("Failed to submit form data");
      }
    } catch (err) {
      // FIXA: ERROR MESSAGE
      console.error("Error while submitting the form:", err);
      setError("Failed to submit form data");
    }
  };

  return (
    <div className="">
      <div className="">
        <h1 className="">
          Fyll i uppgifter om er verksamhet
        </h1>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* _____________ NAME ____________*/}
        <div className="">
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

          {/* _____________ TYPE OF ____________*/}
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
          {errors.typeOf && (
            <p className="text-red-500">{errors.typeOf.message}</p>
          )}
          {/* _____________ CONTACT ____________*/}
          <h2>KONTAKTUPPGIFTER</h2>
          <label>Email</label>
          <Controller
            name="contact.email"
            control={control}
            rules={{ required: "Detta fält måste fyllas i" }}
            render={({ field }) => (
              <input
                type="email"
                className=""
                placeholder=""
                {...field}
                value={field.value || ""}
              />
            )}
          />
          {errors.contact?.email && (
            <p className="text-red-500">{errors.contact?.email.message}</p>
          )}

          <label>Telefon</label>
          <Controller
            name="contact.phone"
            control={control}
            rules={{ required: "Detta fält måste fyllas i" }}
            render={({ field }) => (
              <input
                type="tel"
                className=""
                placeholder=""
                {...field}
                value={field.value || ""}
              />
            )}
          />
          {errors.contact?.phone && (
            <p className="text-red-500">{errors.contact?.phone.message}</p>
          )}
          {/* _____________ OPENING HOURS ____________*/}
          <h2>ÖPPNINGSTIDER</h2>
          <h3>Måndag</h3>
          <label>Från</label>
          <Controller
            name="openingHours.monday.from"
            control={control}
            // rules={{ required: "Detta fält måste fyllas i" }}
            render={({ field }) => (
              <input
                className=""
                placeholder="00:00"
                {...field}
                value={field.value || ""}
              />
            )}
          />
          {errors.openingHours?.monday?.from && (
            <p className="text-red-500">
              {errors.openingHours?.monday?.from.message}
            </p>
          )}
          <label>Till</label>
          <Controller
            name="openingHours.monday.to"
            control={control}
            // rules={{ required: "Detta fält måste fyllas i" }}
            render={({ field }) => (
              <input
                className=""
                placeholder="00:00"
                {...field}
                value={field.value || ""}
              />
            )}
          />
          {errors.openingHours?.monday?.to && (
            <p className="text-red-500">
              {errors.openingHours?.monday?.to.message}
            </p>
          )}
          <h3>Tisdag</h3>
          <label>Från</label>
          <Controller
            name="openingHours.tuesday.from"
            control={control}
            // rules={{ required: "Detta fält måste fyllas i" }}
            render={({ field }) => (
              <input
                className=""
                placeholder="00:00"
                {...field}
                value={field.value || ""}
              />
            )}
          />
          {errors.openingHours?.tuesday?.from && (
            <p className="text-red-500">
              {errors.openingHours?.tuesday?.from.message}
            </p>
          )}
          <label>Till</label>
          <Controller
            name="openingHours.tuesday.to"
            control={control}
            // rules={{ required: "Detta fält måste fyllas i" }}
            render={({ field }) => (
              <input
                className=""
                placeholder="00:00"
                {...field}
                value={field.value || ""}
              />
            )}
          />
          {errors.openingHours?.tuesday?.to && (
            <p className="text-red-500">
              {errors.openingHours?.tuesday?.to.message}
            </p>
          )}
          <h3>Onsdag</h3>
          <label>Från</label>
          <Controller
            name="openingHours.wednesday.from"
            control={control}
            // rules={{ required: "Detta fält måste fyllas i" }}
            render={({ field }) => (
              <input
                className=""
                placeholder="00:00"
                {...field}
                value={field.value || ""}
              />
            )}
          />
          {errors.openingHours?.wednesday?.from && (
            <p className="text-red-500">
              {errors.openingHours?.wednesday?.from.message}
            </p>
          )}
          <label>Till</label>
          <Controller
            name="openingHours.tuesday.to"
            control={control}
            // rules={{ required: "Detta fält måste fyllas i" }}
            render={({ field }) => (
              <input
                className=""
                placeholder="00:00"
                {...field}
                value={field.value || ""}
              />
            )}
          />
          {errors.openingHours?.wednesday?.to && (
            <p className="text-red-500">
              {errors.openingHours?.wednesday?.to.message}
            </p>
          )}
          <h3>Torsdag</h3>
          <label>Från</label>
          <Controller
            name="openingHours.thursday.from"
            control={control}
            // rules={{ required: "Detta fält måste fyllas i" }}
            render={({ field }) => (
              <input
                className=""
                placeholder="00:00"
                {...field}
                value={field.value || ""}
              />
            )}
          />
          {errors.openingHours?.thursday?.from && (
            <p className="text-red-500">
              {errors.openingHours?.thursday?.from.message}
            </p>
          )}
          <label>Till</label>
          <Controller
            name="openingHours.thursday.to"
            control={control}
            // rules={{ required: "Detta fält måste fyllas i" }}
            render={({ field }) => (
              <input
                className=""
                placeholder="00:00"
                {...field}
                value={field.value || ""}
              />
            )}
          />
          {errors.openingHours?.thursday?.to && (
            <p className="text-red-500">
              {errors.openingHours?.thursday?.to.message}
            </p>
          )}
          <h3>Fredag</h3>
          <label>Från</label>
          <Controller
            name="openingHours.friday.from"
            control={control}
            // rules={{ required: "Detta fält måste fyllas i" }}
            render={({ field }) => (
              <input
                className=""
                placeholder="00:00"
                {...field}
                value={field.value || ""}
              />
            )}
          />
          {errors.openingHours?.friday?.from && (
            <p className="text-red-500">
              {errors.openingHours?.friday?.from.message}
            </p>
          )}
          <label>Till</label>
          <Controller
            name="openingHours.friday.to"
            control={control}
            // rules={{ required: "Detta fält måste fyllas i" }}
            render={({ field }) => (
              <input
                className=""
                placeholder="00:00"
                {...field}
                value={field.value || ""}
              />
            )}
          />
          {errors.openingHours?.friday?.to && (
            <p className="text-red-500">
              {errors.openingHours?.friday?.to.message}
            </p>
          )}
          <h3>Lördag</h3>
          <label>Från</label>
          <Controller
            name="openingHours.saturday.from"
            control={control}
            // rules={{ required: "Detta fält måste fyllas i" }}
            render={({ field }) => (
              <input
                className=""
                placeholder="00:00"
                {...field}
                value={field.value || ""}
              />
            )}
          />
          {errors.openingHours?.saturday?.from && (
            <p className="text-red-500">
              {errors.openingHours?.saturday?.from.message}
            </p>
          )}
          <label>Till</label>
          <Controller
            name="openingHours.saturday.to"
            control={control}
            // rules={{ required: "Detta fält måste fyllas i" }}
            render={({ field }) => (
              <input
                className=""
                placeholder="00:00"
                {...field}
                value={field.value || ""}
              />
            )}
          />
          {errors.openingHours?.saturday?.to && (
            <p className="text-red-500">
              {errors.openingHours?.saturday?.to.message}
            </p>
          )}
          <h3>Söndag</h3>
          <label>Från</label>
          <Controller
            name="openingHours.sunday.from"
            control={control}
            // rules={{ required: "Detta fält måste fyllas i" }}
            render={({ field }) => (
              <input
                className=""
                placeholder="00:00"
                {...field}
                value={field.value || ""}
              />
            )}
          />
          {errors.openingHours?.sunday?.from && (
            <p className="text-red-500">
              {errors.openingHours?.sunday?.from.message}
            </p>
          )}
          <label>Till</label>
          <Controller
            name="openingHours.friday.to"
            control={control}
            // rules={{ required: "Detta fält måste fyllas i" }}
            render={({ field }) => (
              <input
                className=""
                placeholder="00:00"
                {...field}
                value={field.value || ""}
              />
            )}
          />
          {errors.openingHours?.friday?.to && (
            <p className="text-red-500">
              {errors.openingHours?.friday?.to.message}
            </p>
          )}
          {/* _____________ ADDRESS ____________*/}
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
          <p>Skriv utan mellanrum, t.ex 12345 inte 123 45</p>
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
          {/* _____________ ABOUT ____________*/}
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
          {errors.about && (
            <p className="text-red-500">{errors.about?.message}</p>
          )}
          {/* _____________ SUBMIT FORM ____________*/}
          <button
            type="submit"
            className=""
          >
            Publicera
          </button>
          {error && <p className="text-red-500">{error}</p>}
        </div>
      </form>
    </div>
  );
}
