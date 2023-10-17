
"use client";

import { client } from "@/sanity.config";

export default async function handler(
  req: { method: any; body: string },
  res: {
    status: (arg0: number) => {
      (): any;
      new (): any;
      json: { (arg0: { msg: string }): void; new (): any };
    };
    _id: any;
  }
) {
  switch (req.method) {
    case "POST":
      //this JSON arrives as a string,
      //so we turn it into a JS object with JSON.parse()
      const newForm = await JSON.parse(req.body);
      //then use the Sanity client to create a new todo doc
      try {
        await client
          .create({
            _type: "form",
            name: newForm.name,
            adress: newForm.adress,
            about: newForm.about
          })
          .then((res) => {
            console.log(`Form was created, document ID is ${res._id}`);
          });
        res
          .status(200)
          .json({ msg: `Form was created, document ID is ${res._id}` });
      } catch (err) {
        console.error(err);
        res.status(500).json({ msg: "Error, check console" });
      }

      break;
  }
}
