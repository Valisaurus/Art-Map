import { defineField, defineType } from "sanity";

export const durationType = defineType({
  name: "duration",
  title: "Duration",
  type: "object",
  fields: [
    defineField({
      name: "from",
      type: "timeValue",
    }),
    defineField({
      name: "to",
      type: "timeValue",
    }),
  ],
  // make the fields render next to each other
  options: { columns: 2 },
});
