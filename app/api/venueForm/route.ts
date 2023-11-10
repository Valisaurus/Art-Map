import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { createClient } from "@sanity/client";
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

import { Venue } from "@/types/venue";
import { getVenues } from "@/sanity/sanity.utils";

// Initialize the Sanity client
const client = createClient({
  projectId: "z4x2zjsw",
  dataset: "production",
  apiVersion: "2023-10-10",
  token: process.env.NEXT_SANITY_FORM_INSERT2_ACCESS_TOKEN,
  useCdn: false,
});

export async function POST(req: NextRequest) {
  // Supabase logic
  const supabase = createServerComponentClient({
    cookies,
  });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session) {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    const userId = user?.id;

    //Sanity logic
    const venues = await getVenues();

    const venueIds = venues.map((venue) => venue._id === venue._id);

    // Check if userId matches any of the venue userIds
    const matchingVenue = venues.find((venue) => venue.userId === userId);

    // const matchingVenueID = venues.find((venue) => venue._id === venuesIds);
    //console.log("THIS IS VENUEID", matchingVenueID);

    const {    
      venueName,
      typeOf,
      contact,
      openingHours,
      address,
      about,
      irregularOpeningHours,
      websiteUrl,
    } = await req.json();

    try {
      const venueData = {
        _id: userId || "",
        _type: "venue",
        venueName,
        typeOf,
        contact: {
          email: contact.email,
          phone: contact.phone,
        },
        openingHours: {
          monday: openingHours.monday,
          tuesday: openingHours.tuesday,
          wednesday: openingHours.wednesday,
          thursday: openingHours.thursday,
          friday: openingHours.friday,
          saturday: openingHours.saturday,
          sunday: openingHours.sunday,
          openByAppointment: openingHours.openByAppointment,
        },
        irregularOpeningHours,
        address: {
          streetName: address.streetName,
          streetNo: address.streetNo,
          zip: address.zip,
          city: address.city,
        },
        about,
        userId: userId || "",
        websiteUrl,
      };

      // Create a new document in Sanity if none with the userId exists. If it does exist, Replace it with the new venue data.
      client.createOrReplace(venueData).then((res) => {
        console.log("res", res);
      });

      // const response = await client.createOrReplace(venueData);

      // const response = await client.create({
      //   _type: "venue",
      //   venueName,
      //   typeOf,
      //   contact: {
      //     email: contact.email,
      //     phone: contact.phone,
      //   },
      //   openingHours: {
      //     monday: openingHours.monday,
      //     tuesday: openingHours.tuesday,
      //     wednesday: openingHours.wednesday,
      //     thursday: openingHours.thursday,
      //     friday: openingHours.friday,
      //     saturday: openingHours.saturday,
      //     sunday: openingHours.sunday,
      //     openByAppointment: openingHours.openByAppointment,
      //     irregularOpeningHours: openingHours.irregularOpeningHours,
      //   },
      //   address: {
      //     streetName: address.streetName,
      //     streetNo: address.streetNo,
      //     zip: address.zip,
      //     city: address.city,
      //   },
      //   about,
      //   userId: userId,
      // });
    } catch (err) {
      console.error("Error while creating document:", err);
      return NextResponse.json(
        { message: "Failed to create document" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Form was submitted" },
      { status: 200 }
    );
  } else {
    return "could not get user";
  }
}
