import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { createClient } from "@sanity/client";
import { getUser } from "@/utils/supabaseFunctions";
import { getExhibitions } from "@/sanity/sanity.utils";
import venue from "@/sanity/schemas/documents/venue";
import { getVenues } from "@/sanity/sanity.utils";

export const dynamic = "force-dynamic";

// Initialize the Sanity client
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

    // SANITY LOGIC
    const exhibitions = await getExhibitions();
    const venues = await getVenues();
    exhibitions.find(
      (venue) => venue._id === userId
    );

    // Find VenueName on venue
    const venueNameObject = venues.find((venue) => venue.venueName);
    const venueNameFindOnId = venues.find((venue) => venue._id === userId);
    const venueName = venueNameObject?.venueName;

    // Find TypeOf on venue
    const typeOfObject = venues.find((venue) => venue.typeOf);
    const typeOf = typeOfObject?.typeOf

    if (venueNameFindOnId) {
      const { title, artistNames, image, openingDate, dates, exhibitionText } =
        await req.json();

      try {
        // Create a new document in Sanity
        const exhibitionData = await client.create({
          _type: "exhibition",
          title,
          artistNames,
          image,
          openingDate,
          dates,
          exhibitionText,
          userId: userId || "",
          venue: venueName,
          typeOf: typeOf, 
        });

        console.log("res", exhibitionData);
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
    }
  }
}
