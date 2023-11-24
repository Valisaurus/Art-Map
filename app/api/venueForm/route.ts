import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { createClient } from "@sanity/client";
import { getUser } from "@/utils/supabaseFunctions";
import { getVenues } from "@/sanity/sanity.utils";
export const dynamic = "force-dynamic"; 

//FIX: Missing verification on client-side if form is submitted

// DISCLAIMER: Since we couldn't use sanitys fantastic built in funcitons for referencing between documents (venue - exhibition - event), due to sending in data on frontend via forms,  we had to build our own functions for that - hence messy code.

const client = createClient({
  projectId: "z4x2zjsw",
  dataset: "production",
  apiVersion: "2023-10-10",
  token: process.env.NEXT_SANITY_FORM_INSERT2_ACCESS_TOKEN,
  useCdn: false,
});

export async function POST(req: NextRequest): Promise<NextResponse> {
  const user = await getUser();
  if (user) {
    const userId = user.userId;
    const venues = await getVenues();
    // Check if userId matches any of the venue userIds
    const matchingVenue = venues.find((venue) => venue.userId === user.userId);

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
        _id: userId,
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

      // FIX: Patch doesn't work correctly, it erases information in objects that isn't filled out.


      // Check if userId matches any of the venue userIds
      if (matchingVenue) {
        // If a document with the userId exists, patch it with the new venue data
        client
          .patch(matchingVenue._id)
          .set(venueData)
          .commit()
          .then((res) => {
            console.log("res", res);
          });
      } else {
        // If the document with userId doesn't exist, create a new document
        client.create(venueData).then((res) => {
          console.log("res", res);
        });
      }

      return NextResponse.json(
        { message: "Form was submitted" },
        { status: 200 }
      );
    } catch (err) {
      console.error("Error while creating document:", err);
      return NextResponse.json(
        { message: "Failed to create document" },
        { status: 500 }
      );
    }
  } else {
    return NextResponse.json(
      { message: "Could not get user" },
      { status: 401 }
    );
  }
}

// Create a new document in Sanity if none with the userId exists. If it does exist, Replace it with the new venue data.
// client.createOrReplace(venueData).then((res) => {
//   console.log("res", res);
// });

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
