import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { createClient } from "@sanity/client";
import { Application } from "../../../types/application";
import { User } from "@supabase/supabase-js";
import application from "@/sanity/schemas/documents/application";

const client = createClient({
  projectId: "z4x2zjsw",
  dataset: "production",
  useCdn: false,
  apiVersion: "2023-10-10",
});

export const dynamic = "force-dynamic";

const supabase = createRouteHandlerClient({ cookies });

export default async function setStatus(user: User) {
  const documentType = "application";

  try {
    const fetchedApplications = await client.fetch<
      Application[]
    >(`*[_type == "${documentType}"]{
     _id
      status,
    }`);

    const applicationsToUpdate = fetchedApplications.filter(
      (application) => application.status === "approved"
    );

    const updateQueries = applicationsToUpdate.map(async (application) => {
      const { error } = await supabase
        .from("status")
        .update({ status: "approved" })
        .eq("user_id", user.id);
      if (error) {
        console.error("Error updating status:", error);
      }
      console.log("Status updated for application ID", application._id);
    });
    await Promise.all(updateQueries);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// interface User {
//   id: string;
// }

// const updateUserStatus = async (user: User) => {
//   const { data, error } = await supabase
//     .from("user_status")
//     .update({ status: "approved" })
//     .eq("user_id", user.id);
// };

// export default updateUserStatus;
