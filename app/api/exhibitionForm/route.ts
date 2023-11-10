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
  const { title, artistNames, image, openingDate, dates, exhibitionText } = await req.json(); 

  try {  
    // Create a new document in Sanity
    const response = await client.create({
      _type: "exhibition",
      title,
      artistNames,
      openingDate,
      dates,
      exhibitionText,
    });

    exports.handler = async function (event : any) {
      const { image } = event.body;
      const base64Image = image.replace(/^data:image/\w+;,/, '');
      const buffer = Buffer.from(base64Image, 'base64');
    
      // Upload image to Sanity
      const result = await client.assets.upload('image', buffer, { filename: 'myImage.jpg' });
    
      return {
        statusCode: 200,
        body: JSON.stringify({ imageUrl: result.url }),
      };
    };


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
