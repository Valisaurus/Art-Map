export type Application = {
  _id: string;
  venueName: string;
  websiteUrl: string;
  about: string;
  contactPerson: {
    name: string;
    email: string;
    phone: string;
  };
  status: boolean;
};
