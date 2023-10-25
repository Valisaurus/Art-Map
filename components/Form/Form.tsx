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
    <div className="max-w-4xl mx-auto">
      <div className="my-8">
        <h1 className="text-4xl font-bold tracking-tight">
          Info om utställningsplats
        </h1>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col justify-center items-center">
          <label>Namn på utställningsplats</label>
          <Controller
            name="name"
            control={control}
            rules={{ required: "Detta fält måste fyllas i" }}
            render={({ field }) => (
              <input
                className="w-72 h-12 border p-4 border-blue-100"
                placeholder=""
                {...field}
                value={field.value || ""}
              />
            )}
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}

          <label>Typ av utställningsplats</label>
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

          <h2>Kontaktuppgifter</h2>
          <label>Email</label>
          <Controller
            name="contact.email"
            control={control}
            rules={{ required: "Detta fält måste fyllas i" }}
            render={({ field }) => (
              <input
                type="email"
                className="w-72 h-12 border p-4 border-blue-100"
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
                className="w-72 h-12 border p-4 border-blue-100"
                placeholder=""
                {...field}
                value={field.value || ""}
              />
            )}
          />
          {errors.contact?.phone && (
            <p className="text-red-500">{errors.contact?.phone.message}</p>
          )}

          <h2>Adress</h2>
          <label>Gatunamn</label>
          <Controller
            name="address.streetName"
            control={control}
            rules={{ required: "Detta fält måste fyllas i" }}
            render={({ field }) => (
              <input
                className="w-72 h-12 border p-4 border-blue-100"
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
                className="w-72 h-12 border p-4 border-blue-100"
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
                className="w-72 h-12 border p-4 border-blue-100"
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
                className="w-72 h-12 border p-4 border-blue-100"
                placeholder=""
                {...field}
                value={field.value || ""}
              />
            )}
          />
          {errors.address?.city && (
            <p className="text-red-500">{errors.address?.city.message}</p>
          )}

          <label>Om utställningsplatsen</label>
          <Controller
            name="about"
            control={control}
            rules={{ required: "Detta fält måste fyllas i" }}
            render={({ field }) => (
              <textarea
                className="w-72 h-12 border p-4 border-blue-100"
                placeholder=""
                {...field}
                value={field.value || []}
              />
            )}
          />
          {errors.about && (
            <p className="text-red-500">{errors.about?.message}</p>
          )}

          <button
            type="submit"
            className="focus:outline-none focus:ring focus:border-blue-800
                px-6 py-2 rounded-xl bg-blue-500 text-blue-50 hover:bg-blue-800
                font-semibold"
          >
            Publicera
          </button>
          {error && <p className="text-red-500">{error}</p>}
        </div>
      </form>
    </div>
  );
}
