import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { createClient } from "@sanity/client";
import { getExhibitions } from "@/sanity/sanity.utils";
export const dynamic = "force-dynamic";

// Initialize the Sanity client
const client = createClient({
  projectId: "z4x2zjsw",
  dataset: "production",
  apiVersion: "2023-10-10",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

export async function POST(req: NextRequest) {
  try {
    const exhibitions = await getExhibitions();
    const documentIdToDelete = exhibitions?.find(
      (exhibition) => exhibition._id === exhibition._id
    );

    const exhibitionIdToDelete = documentIdToDelete;
    if (exhibitions && exhibitions.length > 0) {
      const deleteMutation = `*[_id == $exhibitionIdToDelete] | delete`;

      await client
        .transaction()
        .delete(exhibitionIdToDelete)
        .commit()
        .then((response) => {
          console.log("Document deleted successfully:", response);
        })
        .catch((error) => {
          console.error("Error deleting document:", error);
        });

      return NextResponse.json(
        { message: "Exhibition was deleted" },
        { status: 200 }
      );
    } else {
      console.error("No exhibitions found to delete");
      return NextResponse.json(
        { message: "No exhibitions found to delete" },
        { status: 404 }
      );
    }
  } catch (err) {
    console.error("Error while deleting document:", err);
    return NextResponse.json(
      { message: "Failed to delete document" },
      { status: 500 }
    );
  }
}
