"use client";
import { SetStateAction, useState } from "react";

export default function Form() {
  //create a state to store new  for todos
  const [form, setForm] = useState([]);
  //create a state for the text in the todo input form
  const [userInput, setUserInput] = useState("");

  //set an error message if either input is missing
  const [errMessage, setErrMessage] = useState("");
  // src/pages/todos.js

  //FOR THE INPUT FORM:
  const handleChange = (e: {
    preventDefault: () => void;
    target: { value: SetStateAction<string> };
  }) => {
    e.preventDefault();
    setUserInput(e.target.value);
  };

  //FOR THE SUBMIT BUTTON:
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    //if either part of the form isn't filled out
    //set an error message and exit
    if (userInput.length == 0) {
      setErrMessage("Form text must be filled out.");
    } else {
      //otherwise send the todo to our api
      // (we'll make this next!)
      await fetch("./api", {
        method: "POST",
        body: JSON.stringify({
          text: userInput,
        }),
      });
      // await fetchForm(); //(we'll add this later)
      // Clear all inputs after the todo is sent to Sanity
      setUserInput("");
      setErrMessage("");
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
              value={userInput}
              placeholder="Name"
              //our function
              onChange={handleChange}
            />

            <label htmlFor="street-name">Street Name</label>
            <input
              className="w-72 h-12 border p-4 border-blue-100"
              type="text"
              //our state
              value={userInput}
              placeholder="street name"
              //our function
              onChange={handleChange}
            />

            <label htmlFor="street-no">Street Number</label>
            <input
              className="w-72 h-12 border p-4 border-blue-100"
              type="text"
              //our state
              value={userInput}
              placeholder="street no"
              //our function
              onChange={handleChange}
            />

            <label htmlFor="city">City</label>
            <input
              className="w-72 h-12 border p-4 border-blue-100"
              type="text"
              //our state
              value={userInput}
              placeholder="city"
              //our function
              onChange={handleChange}
            />
          </div>{" "}
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
        {/*...*/}
      </main>
    </div>
  );
}
