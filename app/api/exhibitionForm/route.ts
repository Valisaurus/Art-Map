import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { createClient } from "@sanity/client";
import { getUser } from "@/utils/supabaseFunctions";
import { getVenues } from "@/sanity/sanity.utils";

// FIX: Missing verification on client-side if form is submitted

// DISCLAIMER: Since we couldn't use sanitys fantastic built in funcitons for referencing between documents (venue - exhibition - event), due to sending in data on frontend via forms,  we had to build our own functions for that - hence messy code.

const client = createClient({
  projectId: "z4x2zjsw",
  dataset: "production",
  apiVersion: "2023-10-10",
  token: process.env.NEXT_SANITY_FORM_INSERT2_ACCESS_TOKEN,
  useCdn: false,
});
export async function POST(req: NextRequest) {
  const user = await getUser();
  if (user) {
    const userId = user.userId;

    // get venues saved in Sanity - match the _id with userId from Supabase
    const venues = await getVenues();
    const matchingExhibition = venues.find((venue) => venue._id === userId);

    // Check if a matching venue is found 
    if (matchingExhibition) {
      const { title, artistNames, image, openingDate, dates, exhibitionText } =
        await req.json();

      try {
        // Extract venue name from the matching venue
        const venueName = matchingExhibition.venueName;

        // Create a new document in Sanity
        await client.create({
          _type: "exhibition",
          title,
          artistNames,
          image,
          openingDate,
          dates,
          exhibitionText,
          userId: userId || "",
          venue: venueName, // Use the extracted venue name
          typeOf: matchingExhibition.typeOf,
          venueSlug: matchingExhibition.slug,
        });

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
    }
  }

  // Default response if conditions are not met
  return NextResponse.json(
    { message: "Invalid request or user not found" },
    { status: 400 }
  );
}
