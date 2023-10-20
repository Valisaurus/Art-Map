import { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import { createClient } from "@sanity/client";

// Initialize the Sanity client
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_ID || "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "",
  apiVersion: "2023-10-10",
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
  useCdn: false,
});

export async function POST(req: NextApiRequest) {
  console.log("this is req body", req.body);
  // Parse form data from the request body
  const { name, address, about } = req.body;
  try {
    // Create a new document in Sanity
    await client.create({
      _type: "form", // Use the document type you defined
      name,
      address,
      about,
    });
  } catch (err) {
    return NextResponse.json({ message: "hej" }, { status: 500 });
  }
  return NextResponse.json({ message: "JA" }, { status: 200 });
}

//   switch (req.method) {
//     case "POST":
//       try {
//         const newForm = JSON.parse(req.body);

//         // Create a new document using Sanity client
//         const result = await client.create({
//           _type: "form",
//           name: newForm.name,
//           address: newForm.address,
//           about: newForm.about,
//         });

//         console.log(`Form was created, document ID is ${result._id}`);
//         res
//           .status(200)
//           .json({ msg: `Form was created, document ID is ${result._id}` });
//       } catch (err) {
//         console.error(err);
//         res.status(500).json({ msg: "Error, check console" });
//       }
//       break;
//   }
// }
