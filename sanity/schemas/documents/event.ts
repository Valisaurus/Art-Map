export default {
    title: "Event",
    name: "event",
    type: "document",
    fields: [
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
        title: "Date and time",
        name: "dateTime",
        type: "datetime",
      },
      {
          title: "Event text",
          name: "eventText",
          type: "text"
      }
    ],
  };
  