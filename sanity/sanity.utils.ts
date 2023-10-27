// all the functions / types that we use to grab data

import { Venue } from "@/types/venue";
import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";

// Functions that returns all projects in array
export async function getVenues(): Promise<Venue[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "form"]{
            name,
            "slug": slug.current,
        }`
  );
}

// Functions that returns one project based on slug
export async function getVenue(slug: string): Promise<Venue> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "form" && slug.current == $slug][0]{ //get the first project from the array
            name,
            "slug": slug.current,
        }`,
    { slug: slug } // can be shorthanded to slug
  );
}
