export type Form = {
  name: string;
  typeOf: string;
  address: {
    streetName: string;
    streetNo: string;
    zip: number;
    city: string;
  };
  contact: {
    email: string;
    phone: number;
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
  };
  about: {
    from: string;
    to: string;
  };
};
