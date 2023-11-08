export default {
  title: "Venues",
  name: "venue",
  type: "document",
  fields: [
    {
      title: "Venue Name",
      name: "venueName",
      type: "string",
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: { source: "venueName" },
    },
    {
      title: "Website URL",
      name: "websiteUrl",
      type: "url",
    },
    {
      title: "Type of exhibition space",
      name: "typeOf",
      type: "string",
      options: {
        list: [
          { title: "Gallery", value: "gallery" },
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
        { title: "Email", name: "email", type: "string" },
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
          ],
        },
        {
          title: "Tuesday",
          name: "tuesday",
          type: "object",
          fields: [
            { title: "From", name: "from", type: "string" },
            { title: "To", name: "to", type: "string" },
          ],
        },
        {
          title: "Wednesday",
          name: "wednesday",
          type: "object",
          fields: [
            { title: "From", name: "from", type: "string" },
            { title: "To", name: "to", type: "string" },
          ],
        },
        {
          title: "Thursday",
          name: "thursday",
          type: "object",
          fields: [
            { title: "From", name: "from", type: "string" },
            { title: "To", name: "to", type: "string" },
          ],
        },
        {
          title: "Friday",
          name: "friday",
          type: "object",
          fields: [
            { title: "From", name: "from", type: "string" },
            { title: "To", name: "to", type: "string" },
          ],
        },
        {
          title: "Saturday",
          name: "saturday",
          type: "object",
          fields: [
            { title: "From", name: "from", type: "string" },
            { title: "To", name: "to", type: "string" },
          ],
        },
        {
          title: "Sunday",
          name: "sunday",
          type: "object",
          fields: [
            { title: "From", name: "from", type: "string" },
            { title: "To", name: "to", type: "string" },
          ],
        },
        {
          title: "Open by appointment only",
          name: "openByAppointment",
          type: "boolean",
        },
      ],
    },
    {
      title: "Irregular Opening Hours",
      name: "irregularOpeningHours",
      type: "text",
    },
    {
      title: "About",
      name: "about",
      type: "text",
    },
    {
      title: "User Id",
      name: "userId",
      type: "string",
    },
  ],
};
