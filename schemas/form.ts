const form = {
  name: "form",
  type: "document",
  title: "Form",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
    },
    {
      title: "Address",
      name: "address",
      type: "object",
      fields: [
        { name: "street", type: "string", title: "Street name" },
        { name: "streetNo", type: "string", title: "Street number" },
        { name: "city", type: "string", title: "City" },
      ],
    },
    {
      name: "about",
      type: "text",
      title: "About",
    },
  ],
};
export default form;
