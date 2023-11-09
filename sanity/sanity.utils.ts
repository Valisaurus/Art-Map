// all the functions / types that we use to fetch data from Sanity

import { Venue } from "@/types/venue";
import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";

// Function that returns all venues in array
export async function getVenues(): Promise<Venue[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "venue"]{
             _id,
            venueName,
            "slug": slug.current,
            typeOf,
            userId,
    }`
  );
}

// Function that returns one venue based on slug
export async function getVenue(slug: string): Promise<Venue> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "venue" && slug.current == $slug][0]{
      _id,
      venueName,
      "slug": slug.current,
      websiteUrl,
      typeOf,
      "address": {
      "streetName": address.streetName,
      "streetNo": address.streetNo,
      "zip": address.zip,
      "city": address.city,
      },

      "contact": {
        "email": contact.email,
        "phone": contact.phone,
      },
      "openingHours": {
        "monday": {
          "from": openingHours.monday.from,
          "to": openingHours.monday.to,
        },
         "tuesday": {
          "from": openingHours.tuesday.from,
          "to": openingHours.tuesday.to,
        },
         "wednesday": {
          "from": openingHours.wednesday.from,
          "to": openingHours.wednesday.to,
        },
         "thursday": {
          "from": openingHours.thursday.from,
          "to": openingHours.thursday.to,
        },
         "friday": {
          "from": openingHours.friday.from,
          "to": openingHours.friday.to,
        },
         "saturday": {
          "from": openingHours.saturday.from,
          "to": openingHours.saturday.to,
        },
         "sunday": {
          "from": openingHours.sunday.from,
          "to": openingHours.sunday.to,
        },
        "openByAppointment": openingHours.openByAppointment,
      },
      irregularOpeningHours,
      about,
      }`,
    { slug }
  );
}
