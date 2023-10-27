import { defineField, defineType } from "sanity";

export default {
  title: "Form",
  name: "form",
  type: "document",
  fields: [
    {
      title: "Name",
      name: "name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug", // sanity has a built in slug-type.
      options: { source: "name" } // grabs the information from the name-field.
  },
    {
      title: "Type of exhibition space",
      name: "typeOf",
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
      title: "Address",
      name: "address",
      type: "object",
      fields: [
        { title: "Street name", name: "streetName", type: "string" },
        { title: "Street number", name: "streetNo", type: "string" },
        { title: "Zip", name: "zip", type: "string" },
        { title: "City", name: "city", type: "string" },
      ],
    },
    {
      title: "Contact",
      name: "contact",
      type: "object",
      fields: [
        { title: "Email", name: "email", type: "string"},
        { title: "Phone number", name: "phone", type: "string" },
      ],
    },
    {
      title: "Opening Hours",
      name: "openingHours",
      type: "object",
      fields: [
        {
          title: "Monday",
          name: "monday",
          type: "object",
          fields: [
            { title: "From", name: "from", type: "string" },
            { title: "To", name: "to", type: "string" },
          ]
        },
        {
          title: "Tuesday",
          name: "tuesday",
          type: "object",
          fields: [
            { title: "From", name: "from", type: "string" },
            { title: "To", name: "to", type: "string" },
          ]
        },
        {
          title: "Wednesday",
          name: "wednesday",
          type: "object",
          fields: [
            { title: "From", name: "from", type: "string" },
            { title: "To", name: "to", type: "string" },
          ]
        },
        {
          title: "Thursday",
          name: "thursday",
          type: "object",
          fields: [
            { title: "From", name: "from", type: "string" },
            { title: "To", name: "to", type: "string" },
          ]
        },
        {
          title: "Friday",
          name: "friday",
          type: "object",
          fields: [
            { title: "From", name: "from", type: "string" },
            { title: "To", name: "to", type: "string" },
          ]
        },
        {
          title: "Saturday",
          name: "saturday",
          type: "object",
          fields: [
            { title: "From", name: "from", type: "string" },
            { title: "To", name: "to", type: "string" },
          ]
        },
        {
          title: "Sunday",
          name: "sunday",
          type: "object",
          fields: [
            { title: "From", name: "from", type: "string" },
            { title: "To", name: "to", type: "string" },
          ]
        },

      ],
    },
    {
      title: "About",
      name: "about",
      type: "text",
    },
  ],
};
