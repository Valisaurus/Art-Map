import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import type { Venue } from "@/types/venue";
import styles from "./VenueForm.module.css";

import TypeOf from "./TypeOf/TypeOf";
import Contact from "./Contact/Contact";
import OpeningHours from "./OpeningHours/OpeningHours";
import Adress from "./Address/Address";
import About from "./About/About";
import Name from "./Name/Name";
import Url from "./Url/Url";
import { getVenues } from "@/sanity/sanity.utils";

export default function VenueForm() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Venue>();
  const [error, setError] = useState<string | null>(null);
  const onSubmit: SubmitHandler<Venue> = (data) => {
    submitForm(data);
  };

  const submitForm = async (data: Venue) => {
    try {
      // Converts the checkbox value to a boolean
      const openByAppointment = !!data.openingHours?.openByAppointment;

      const formData = {
        ...data,
        // userId: props.userId,
        openingHours: {
          ...data.openingHours,
          openByAppointment,
        },
      };

      const response = await fetch("/api/venueForm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      console.log(formData);
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <Name control={control} errors={errors} />
        <Url control={control} errors={errors} />
        <TypeOf control={control} errors={errors} />
        <Contact control={control} errors={errors} />
        <OpeningHours control={control} errors={errors} />
        <Adress control={control} errors={errors} />
        <About control={control} errors={errors} />
        <button type="submit" className="globalButton">
          Publicera
        </button>
        {error && <p>{error}</p>}
    </form>
 
  );
}
