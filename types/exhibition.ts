export type Exhibition = {
  imageUrl: string;
  _id: string; 
  _type: string;
  venue: {
    venueName: string;
  };
  typeOf: {
    typeOf: string;
  }
  title: string;
  slug: string;
  artistNames: string;
  // image: {
  //   _type: "image";
  //   asset: {
  //     _type: "reference";
  //     _ref: string; // Reference to the image asset in Sanity
  //   };
  //   alt: string;
  // };
  openingDate: string; // Should be in ISO 8601 datetime format
  dates: {
    opening: string; // Should be in ISO 8601 date format
    closing: string; // Should be in ISO 8601 date format
  };
  exhibitionText: string;
};
