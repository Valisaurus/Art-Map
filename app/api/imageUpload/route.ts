import getRawBody from "raw-body";
import { NextRequest, NextResponse } from "next/server";
import { client } from "@/sanity.config";
import { Readable } from "stream";

export const config = {
  api: {
    bodyParser: false,
  },
};

const uploadHandler = async (req: NextRequest) => {
  try {

        // Cast the NextRequest to Readable
        const readableReq = req as unknown as Readable;

    // Get the raw body of the request
    const rawBody = await getRawBody(readableReq);

    // Upload the raw body as an asset to Sanity
     await client.assets.upload("image", rawBody, {
      contentType: "image/jpeg", // Set the content type to "image/jpeg" (adjust as needed)
    });
    // Respond with a success message and the ID of the uploaded asset
    return NextResponse.json({ message: "Form was submitted" }, { status: 200 });
  } catch (error) {
    // Handle errors, e.g., log them or send an error response
    console.error("Error handling image upload:", error);
    return NextResponse.json(
        { message: "Failed to upload image, internal server error" },
        { status: 500 }
      );
  }
};

export default uploadHandler;