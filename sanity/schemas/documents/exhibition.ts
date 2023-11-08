export default {
  title: "Exhibitions",
  name: "exhibition",
  type: "document",
  fields: [
    {
      title: "Venue",
      name: "venue",
      type: "reference",
      to: [{type: "venue"}]
    },
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug", // sanity has a built in slug-type.
      options: { source: "name" }, // grabs the information from the name-field.
    },
    {
      title: "Artist Names",
      name: "artistNames",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      title: "Image",
      name: "image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          title: "Alt",
          name: "alt",
          type: "string",
        },
      ],
    },
    {
        title: "Opening date",
        name: "openingDate",
        type: "datetime"
    },
    {
      title: "Dates",
      name: "dates",
      type: "date",
    },
    {
        title: "Exhibition text",
        name: "exhibitionText",
        type: "text"
    }
  ],
};
