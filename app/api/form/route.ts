import { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "@sanity/client";

// Initialize the Sanity client
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_ID || "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "",
  apiVersion: "2023-10-10",
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
  useCdn: false,
});

export async function POST(req: NextApiRequest, res: NextApiResponse) {
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
    console.log("response=", res)
  } catch (err) {
    res.status(500).json({ message: "Couldn't submit form," })
  }
  return res.status(200).json({ message: "Form data submitted successfully" });
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
