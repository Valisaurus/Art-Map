"use client";
import { SetStateAction, useState } from "react";

export default function Form() {
  //create a state to store new  for todos
  const [form, setForm] = useState([]);

  //create a state for the text in the todo input form
  const [name, setName] = useState("");
  const [streetName, setStreetName] = useState("");
  const [streetNumber, setStreetNumber] = useState("");
  const [city, setCity] = useState("");
  const [about, setAbout] = useState("");

  //set an error message if either input is missing
  const [errMessage, setErrMessage] = useState("");
  // src/pages/todos.js

  //Handle Name input:
  const handleNameChange = (e: {
    preventDefault: () => void;
    target: { value: SetStateAction<string> };
  }) => {
    e.preventDefault();
    setName(e.target.value);
  };

  //Handle Adress input:
  const handleStreetNameChange = (e: {
    preventDefault: () => void;
    target: { value: SetStateAction<string> };
  }) => {
    e.preventDefault();
    setStreetName(e.target.value);
  };
  const handleStreetNumberChange = (e: {
    preventDefault: () => void;
    target: { value: SetStateAction<string> };
  }) => {
    e.preventDefault();
    setStreetNumber(e.target.value);
  };
  const handleCityChange = (e: {
    preventDefault: () => void;
    target: { value: SetStateAction<string> };
  }) => {
    e.preventDefault();
    setCity(e.target.value);
  };

  //Handle About input:
  const handleAboutChange = (e: {
    preventDefault: () => void;
    target: { value: SetStateAction<string> };
  }) => {
    e.preventDefault();
    setAbout(e.target.value);
  };

  //FOR THE SUBMIT BUTTON:
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    //if either part of the form isn't filled out
    //set an error message and exit
    if (name.length == 0) {
      setErrMessage("Name must be filled out");
    } else {
      //otherwise send the todo to our api
      // (we'll make this next!)
      await fetch("./api", {
        method: "POST",
        body: JSON.stringify({
          name: name,
          adress: {
            street: streetName,
            streetNo: streetNumber,
            city: city,
          },
          about: about,
        }),
      });
    }
  };
  return (
    <div className="max-w-4xl mx-auto ">
      <main className="text-center">
        <div className="my-8">
          <h1 className="text-4xl font-bold tracking-tight ">Form</h1>
        </div>

        <form>
          <div className="flex flex-col justify-center items-center">
            <label htmlFor="name">Name</label>
            <input
              className="w-72 h-12 border p-4 border-blue-100"
              type="text"
              //our state
              value={name}
              placeholder="Name"
              //our function
              onChange={handleNameChange}
            />

            <label htmlFor="street-name">Street Name</label>
            <input
              className="w-72 h-12 border p-4 border-blue-100"
              type="text"
              //our state
              value={streetName}
              placeholder="street name"
              //our function
              onChange={handleStreetNameChange}
            />

            <label htmlFor="street-no">Street Number</label>
            <input
              className="w-72 h-12 border p-4 border-blue-100"
              type="text"
              //our state
              value={streetNumber}
              placeholder="street no"
              //our function
              onChange={handleStreetNumberChange}
            />

            <label htmlFor="city">City</label>
            <input
              className="w-72 h-12 border p-4 border-blue-100"
              type="text"
              //our state
              value={city}
              placeholder="city"
              //our function
              onChange={handleCityChange}
            />
          </div>
          <button
            className="focus:outline-none focus:ring focus:border-blue-800
        px-6 py-2 rounded-xl bg-blue-500 text-blue-50 hover:bg-blue-800 
        font-semibold"
            //our function
            onClick={handleSubmit}
          >
            Submit
          </button>
          {/*error set in handleSubmit*/}
          <p>{errMessage}</p>
        </form>
      </main>
    </div>
  );
}
