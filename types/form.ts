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
    monday?: string;
    tuesday?: string;
    wednesday?: string;
    thursday?: string;
    friday?: string;
    saturday?: string;
    sunday?: string;
  };
  about: string;
};
