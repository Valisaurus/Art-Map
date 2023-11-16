export default {
  title: "Exhibitions",
  name: "exhibition",
  type: "document",
  fields: [
    {
      title: "Venue",
      name: "venue",
      type: "reference",
      to: [{type: "venue"}],
      fields: [
        {
          title: "Venue Name",
          name: "venueName",
          type: "string",
        }
      ]
    },
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug", 
      options: { source: "title" }, 
    },
    {
      title: "Artist Names",
      name: "artistNames",
      type: "string", // in a perfect world I want it to be an array
      // of: [{ type: "string" }],
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
      type: "object",
      fields: [
        {
          title: "Opening",
          name: "opening",
          type: "date",
          options: {
            dateFormat: 'DD.MM',
          }
        },
        {
          title: "Closing",
          name: "closing",
          type: "date",
          options: {
            dateFormat: 'DD.MM',
          }
        },
      ]
    },
    {
        title: "Exhibition text",
        name: "exhibitionText",
        type: "text",
    }
  ],
};
