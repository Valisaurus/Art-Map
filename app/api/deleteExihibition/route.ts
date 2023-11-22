// import { NextRequest } from "next/server";
// import { NextResponse } from "next/server";
// import { createClient } from "@sanity/client";
// import { getExhibitions } from "@/sanity/sanity.utils";

// export const dynamic = "force-dynamic";

// // Initialize the Sanity client
// const client = createClient({
//   projectId: "z4x2zjsw",
//   dataset: "production",
//   apiVersion: "2023-10-10",
//   token: process.env.NEXT_SANITY_FORM_INSERT2_ACCESS_TOKEN,
//   useCdn: false,
// });

// export async function Delete(req: NextRequest) {
//   try {
//     const exhibitions = await getExhibitions();

//     // Assuming you have a condition to filter exhibitions to delete
//     const documentIdsToDelete = exhibitions?.filter(
//       (exhibition) => exhibition._id
//     );

//     if (!documentIdsToDelete || documentIdsToDelete.length === 0) {
//       console.error("No matching exhibitions found to delete");
//       return NextResponse.json(
//         { message: "No matching exhibitions found to delete" },
//         { status: 404 }
//       );
//     }

//     // Use Promise.all to delete multiple documents concurrently
//     await Promise.all(
//       documentIdsToDelete.map(async (document) => {
//         await client.transaction().delete(document._id).commit();
//       })
//     );

//     return NextResponse.json(
//       { message: "Exhibitions were deleted" },
//       { status: 200 }
//     );
//   } catch (err) {
//     console.error("Error while deleting documents:", err);
//     return NextResponse.json(
//       { message: "Failed to delete documents" },
//       { status: 500 }
//     );
//   }
// }

// export default Delete;
