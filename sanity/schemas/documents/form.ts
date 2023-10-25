import { defineField, defineType } from "sanity";

export default {
  name: "form",
  title: "Form",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "typeOf",
      title: "Type of exhibition space",
      type: "string",
      options: {
        list: [
          { title: "Commersial Gallery", value: "commersialGallery" },
          { title: "Artist Run", value: "artistRun" },
          { title: "Museum", value: "museum" },
          { title: "Institution", value: "institution" },
          { title: "Pop Up", value: "popUp" },
        ],
        layout: "radio",
        direction: "horizontal",
      },
    },
    {
      name: "address",
      title: "Address",
      type: "object",
      fields: [
        { name: "streetName", type: "string", title: "Street name" },
        { name: "streetNo", type: "string", title: "Street number" },
        { name: "zip", type: "number", title: "Zip" },
        { name: "city", type: "string", title: "City" },
      ],
    },
    {
      name: "contact",
      title: "Contact",
      type: "object",
      fields: [
        { name: "email", type: "string", title: "Email" },
        { name: "phone", type: "number", title: "Phone number" },
      ],
    },
    defineType({
      name: "openingHours",
      title: "Opening Hours",
      type: "object",
      fields: [
        defineField({
          name: "monday",
          type: "duration",
        }),
        defineField({
          name: "tuesday",
          type: "duration",
        }),
        defineField({
          name: "wednesday",
          type: "duration",
        }),
        defineField({
          name: "thursday",
          type: "duration",
        }),
        defineField({
          name: "friday",
          type: "duration",
        }),
        defineField({
          name: "saturday",
          type: "duration",
        }),
        defineField({
          name: "sunday",
          type: "duration",
        }),
      ],
    }),
    {
      name: "about",
      title: "About",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};
