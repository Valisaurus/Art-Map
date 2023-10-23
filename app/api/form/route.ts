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
  const { name, streetName, streetNo, city, about } = await req.json();
  //console.log("req", req.json());
  try {
    // Create a new document in Sanity
    const response = await client.create({
      _type: "form", // Use the document type you defined
      name,
      address: {
        streetName,
        streetNo,
        city,
      },
      about,
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
