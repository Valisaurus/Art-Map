import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { createClient } from "@sanity/client";

// Initialize the Sanity client
const client = createClient({
  projectId: "z4x2zjsw",
  dataset: "production",
  apiVersion: "2023-10-10",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

export async function POST(req: NextRequest) {
  const { venueName, websiteUrl, about, contactPerson } = await req.json(); 

  try {  
    // Create a new document in Sanity
    const response = await client.create({
      _type: "application",
      venueName,
      websiteUrl,
      about,
      contactPerson: {
        name: contactPerson.name,
        email: contactPerson.email,
        phone: contactPerson.phone,
      },
    });
    console.log("res", response);
  } catch (err) {
    console.error("Error while creating document:", err);
    return NextResponse.json(
      { message: "Failed to create document" },
      { status: 500 }
    );
  }

  return NextResponse.json({ message: "Form was submitted" }, { status: 200 });
}
