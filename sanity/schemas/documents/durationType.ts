import { defineField, defineType } from "sanity";

export const durationType = defineType({
  name: "duration",
  title: "Duration",
  type: "object",
  fields: [
    defineField({
      name: "from",
      type: "string",
    }),
    defineField({
      name: "to",
      type: "string",
    }),
  ],
  // make the fields render next to each other
  options: { columns: 2 },
});
