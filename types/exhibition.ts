export type Exhibition = {
  imageUrl: string;
  _id: string;
  _type: string;
  venue: string;
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
      openingDate: string;
      dates: {
        opening: string;
        closing: string;
      };
      exhibitionText: string;
      userId: string;
      typeOf: string;
      venueSlug: string;
};
