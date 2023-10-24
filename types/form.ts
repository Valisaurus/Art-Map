export type Form = {
  name: string;
  address: {
    streetName: string;
    streetNo: string;
    zip: number;
    city: string;
  };
  about: string;
};
