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
      name: "address",
      title: "Address",
      type: "object",
      fields: [
        { name: "streetName", type: "string", title: "Street name" },
        { name: "streetNo", type: "string", title: "Street number" },
        { name: "city", type: "string", title: "City" },
      ],
    },
    {
      name: "about",
      title: "About",
      type: "text",
    },
  ],
};
