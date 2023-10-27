export type Event = {
    _type: "event"; // This matches the "type" property in the Sanity schema.
    _id?: string; // Optional, used for document ID.
    title: string;
    slug: {
      _type: "slug";
      current: string;
    };
    artistNames: string[];
    image: {
      _type: "image";
      asset: {
        _type: "reference";
        _ref: string; // Reference to the image asset in Sanity
      };
      alt: string;
    };
    dateTime: string; // Should be in ISO 8601 datetime format
    eventText: string;
  }