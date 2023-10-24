import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { useState } from "react";
import type { Form } from "@/types/form";

export default function Form() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Form>();
  const [error, setError] = useState<string | null>(null);
  const onSubmit: SubmitHandler<Form> = (data) => {
    submitForm(data);
  };

  const submitForm = async (data: Form) => {
    try {
      // Make a POST request to your Next.js API route
      const response = await fetch("/api/form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log("Form data submitted successfully");
      } else {
        console.error("Failed to submit form data");
        setError("Failed to submit form data");
      }
    } catch (err) {
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
                value={field.value || ""}
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
