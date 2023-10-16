// src/pages/api/todo.js

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
      const newTodo = await JSON.parse(req.body);
      //then use the Sanity client to create a new todo doc
      try {
        await client
          .create({
            _type: "form",
            text: newTodo.text,
            isCompleted: false,
            createdAt: new Date().toISOString(),
            dueDate: newTodo.dueDate,
            userEmail: newTodo.user,
          })
          .then((res) => {
            console.log(`Todo was created, document ID is ${res._id}`);
          });
        res
          .status(200)
          .json({ msg: `Todo was created, document ID is ${res._id}` });
      } catch (err) {
        console.error(err);
        res.status(500).json({ msg: "Error, check console" });
      }

      break;
  }
}
