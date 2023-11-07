import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { createClient } from "@sanity/client";
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

// Initialize the Sanity client
const client = createClient({
  projectId: "z4x2zjsw",
  dataset: "production",
  apiVersion: "2023-10-10",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

export async function POST(req: NextRequest) {
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
    console.log("THIS IS USER ID", userId);

    const { venueName, typeOf, contact, openingHours, address, about } =
      await req.json();

    try {
      // Create a new document in Sanity
      const response = await client.create({
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
          irregularOpeningHours: openingHours.irregularOpeningHours,
        },
        address: {
          streetName: address.streetName,
          streetNo: address.streetNo,
          zip: address.zip,
          city: address.city,
        },
        about,
        userId: userId,
      });

      console.log("res", response);
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
