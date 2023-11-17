// all the functions / types that we use to fetch data from Sanity

import { Venue } from "@/types/venue";
import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";
import { Exhibition } from "@/types/exhibition";

export async function getVenueData(): Promise<Venue[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "venue"]{
      _id,
      venueName,
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
      
  );
}

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

// Function that returns all exhibitions in array
export async function getExhibitions(): Promise<Exhibition[]> {

  const currentDate = new Date().toISOString().split('T')[0]; // Get the current date in 'YYYY-MM-DD' format

  return createClient(clientConfig).fetch(
    groq`*[_type == "exhibition" && dates.closing >= $currentDate] | order(dates.opening asc){
             _id,
            "venue": {
              "venueName": venue->venueName
            },
            "typeOf": {
              "typeOf": venue->typeOf
            },
            title,
            "slug": slug.current,
            artistNames,
            image,
            "imageUrl": image.asset->url,
            openingDate,
            "dates": {
              "opening": dates.opening,
              "closing": dates.closing,
            },
            exhibitionText,        
    }`,
    { currentDate }
  );
}

export async function getExhibition(slug: string): Promise<Exhibition> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "exhibition" && slug.current == $slug][0]{
             _id,
            "venue": {
              "venueName": venue->venueName
            },
            title,
            "slug": slug.current,
            artistNames,
            image,
            "imageUrl": image.asset->url,
            openingDate,
            "dates": {
              "opening": dates.opening,
              "closing": dates.closing,
            },
            exhibitionText,         
    }`,
    { slug }
  );
}
