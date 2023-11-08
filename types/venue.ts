export type Venue = {
  _id: string;
  venueName: string;
  slug: string;
  websiteUrl: string;
  typeOf: string;
  address: {
    streetName: string;
    streetNo: string;
    zip: string;
    city: string;
  };
  contact: {
    email: string;
    phone: string;
  };
  openingHours: {
    monday?: {
      from: string;
      to: string;
    };
    tuesday?: {
      from: string;
      to: string;
    };
    wednesday?: {
      from: string;
      to: string;
    };
    thursday?: {
      from: string;
      to: string;
    };
    friday?: {
      from: string;
      to: string;
    };
    saturday?: {
      from: string;
      to: string;
    };
    sunday?: {
      from: string;
      to: string;
    };
    openByAppointment?: boolean;
  };
  irregularOpeningHours: string;
  about: string;
  userId: string;
};
