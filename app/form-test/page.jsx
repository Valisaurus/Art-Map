"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Form({ _id }) {
  const [formData, setFormData] = useState();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async data => {
    setIsSubmitting(true);
    setFormData(data);
   
    try {
      await fetch("/api/form", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      setIsSubmitting(false);
      setHasSubmitted(true);
    } catch (err) {
      setFormData(err);
    }
  };

  if (isSubmitting) {
    return <h3>Submitting form...</h3>;
  }
  if (hasSubmitted) {
    return (
      <>
        <h3>form submitted</h3>
        <ul>
          <li>
            Name: {formData.name} <br />
            Address: {formData.address} <br />
            About: {formData.about} <br />
          </li>
        </ul>
      </>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("_id")} type="hidden" name="_id" value={_id} />
      <div>
        <label className="text-xl block">Name</label>
        <input
          className={`mb-3 px-3 py-2 w-full border-2 border-gray-300 rounded shadow-sm ${
            errors.name ? "ring-2 ring-red-500" : ""
          }`}
          type="text"
          name="name"
          {...register("name", { required: true })}
        />
        <span className="text-red-400 text-sm py-2">
          {errors?.name?.message}
        </span>
      </div>
      <div>
        <label className="text-xl block">Street Name</label>
        <input
          className={`mb-3 px-3 py-2 w-full border-2 border-gray-300 rounded shadow-sm ${
            errors.street ? "ring-2 ring-red-500" : ""
          }`}
          type="text"
          name="StreetName"
          {...register("streetName", { required: true })}
        />
        <span className="text-red-400 text-sm py-2">
          {errors?.street?.message}
        </span>
      </div>
      <div>
        <label className="text-xl block">Street Number</label>
        <input
          className={`mb-3 px-3 py-2 w-full border-2 border-gray-300 rounded shadow-sm ${
            errors.streetNo ? "ring-2 ring-red-500" : ""
          }`}
          type="text"
          name="StreetNo"
          {...register("streetNo", { required: true })}
        />
        <span className="text-red-400 text-sm py-2">
          {errors?.streetNo?.message}
        </span>
      </div>
      <div>
        <label className="text-xl block">City</label>
        <input
          className={`mb-3 px-3 py-2 w-full border-2 border-gray-300 rounded shadow-sm ${
            errors.city ? "ring-2 ring-red-500" : ""
          }`}
          type="text"
          name="city"
          {...register("city", { required: true })}
        />
        <span className="text-red-400 text-sm py-2">
          {errors?.city?.message}
        </span>
      </div>

      <div>
        <label className="text-xl block">About</label>
        <textarea
          className={`mb-3 px-3 py-2 w-full border-2 border-gray-300 rounded shadow-sm ${
            errors.about ? "ring-2 ring-red-500" : ""
          }`}
          type="text"
          name="about"
          {...register("about", { required: true })}
        />
        <span className="text-red-400 text-sm py-2">
          {errors?.about?.message}
        </span>
      </div>

      <div>
        <input type="submit" className="mt-3 btn1" />
      </div>
    </form>
  );
}
