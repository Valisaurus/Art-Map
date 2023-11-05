export type Exhibition = {
    _type: "exhibition"; 
    _id?: string; // Optional, used for document ID.
    venue: string;
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
    openingDate: string; // Should be in ISO 8601 datetime format
    dates: string; // Should be in ISO 8601 date format
    exhibitionText: string;
  };
  
