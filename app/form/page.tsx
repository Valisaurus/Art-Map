"use client";
import { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [streetName, setStreetName] = useState("");
  const [streetNumber, setStreetNumber] = useState("");
  const [city, setCity] = useState("");
  const [about, setAbout] = useState("");

  //set an error message if either input is missing

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    // Make a POST request to your API route
    const response = await fetch("/api/form", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        address: {
          street: streetName,
          streetNo: streetNumber,
          city: city,
        },
        about: about,
      }),
    });

    if (response.ok) {
      console.log("Form data submitted successfully");
      // Reset the form fields
      setName("");
      setStreetName("");
      setStreetNumber("");
      setCity("");
      setAbout("");
    } else {
      console.error("Failed to submit form data");
      // Handle errors (e.g., show an error message)
    }
  };

  return (
    <div className="max-w-4xl mx-auto ">
      <main className="text-center">
        <div className="my-8">
          <h1 className="text-4xl font-bold tracking-tight ">Form</h1>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="flex flex-col justify-center items-center">
            <label htmlFor="name">Name</label>
            <input
              className="w-72 h-12 border p-4 border-blue-100"
              type="text"
              //our state
              value={name}
              id="name"
              placeholder="Name"
              //our function
              onChange={(e) => setName(e.target.value)}
            />

            <label htmlFor="street-name">Street Name</label>
            <input
              className="w-72 h-12 border p-4 border-blue-100"
              type="text"
              id="streetName"
              //our state
              value={streetName}
              placeholder="street name"
              //our function
              onChange={(e) => setStreetName(e.target.value)}
            />

            <label htmlFor="street-no">Street Number</label>
            <input
              className="w-72 h-12 border p-4 border-blue-100"
              type="text"
              id="streetNumber"
              //our state
              value={streetNumber}
              placeholder="street no"
              //our function
              onChange={(e) => setStreetNumber(e.target.value)}
            />

            <label htmlFor="city">City</label>
            <input
              className="w-72 h-12 border p-4 border-blue-100"
              type="text"
              id="city"
              //our state
              value={city}
              placeholder="city"
              //our function
              onChange={(e) => setCity(e.target.value)}
            />

            <label htmlFor="city">About</label>
            <textarea
              className="w-72 h-32 border p-4 border-blue-100"
              id="about"
              value={about}
              placeholder="About"
              onChange={(e) => setAbout(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="focus:outline-none focus:ring focus:border-blue-800
        px-6 py-2 rounded-xl bg-blue-500 text-blue-50 hover:bg-blue-800 
        font-semibold"
            //our function
          >
            Submit
          </button>
          {/*error set in handleSubmit*/}
          <p></p>
        </form>
      </main>
    </div>
  );
}
