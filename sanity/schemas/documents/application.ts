export default {
  title: "Application",
  name: "application",
  type: "document",
  fields: [
    {
      title: "Venue name",
      name: "venueName",
      type: "string",
    },
    {
      title: "Website URL",
      name: "websiteUrl",
      type: "url",
    },
    {
      title: "About",
      name: "about",
      type: "text",
    },
    {
      title: "Contact person",
      name: "contactPerson",
      type: "object",
      fields: [
        { title: "Name", name: "name", type: "string" },
        { title: "Email", name: "email", type: "string" },
        { title: "Phone number", name: "phone", type: "string" },
      ],
    },
    {
      title: "Status",
      name: "status",
      type: "boolean",
    },
  ],
};
