// // import necessary modules and functions
// import getRawBody from "raw-body";
// import { NextRequest, NextResponse } from "next/server";
// import { Readable } from "stream";
// import { createClient } from "@sanity/client";

// // create a Sanity client
// const client = createClient({
//   projectId: "z4x2zjsw",
//   dataset: "production",
//   apiVersion: "2023-10-10",
//   token: process.env.NEXT_SANITY_FORM_INSERT2_ACCESS_TOKEN,
//   useCdn: false,
// });

// // // configure the API route
// // export const config = {
// //   api: {
// //     bodyParser: false,
// //     methods: ["POST"], // allow only POST requests
// //   },
// // };

// export const dynamic = "auto";
// // define the route handler
// export default async function uploadHandler(req: NextRequest) {
//   try {
//     // Cast the NextRequest to Readable
//     const readableReq = req as unknown as Readable;

//     // Get the raw body of the request
//     const rawBody = await getRawBody(readableReq);

//     // Upload the raw body as an asset to Sanity
//     await client.assets.upload("image", rawBody, {
//       contentType: "image/jpeg", // Set the content type to "image/jpeg" (adjust as needed)
//     });

//     // Respond with a success message and the ID of the uploaded asset
//     return NextResponse.json(
//       { message: "Form was submitted" },
//       { status: 200 }
//     );
//   } catch (error) {
//     // Handle errors, e.g., log them or send an error response
//     console.error("Error handling image upload:", error);
//     return NextResponse.json(
//       { message: "Failed to upload image, internal server error" },
//       { status: 500 }
//     );
//   }
// }
