import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { createClient } from "@sanity/client";
import { Application } from "../../../types/application";

import { User } from "@supabase/supabase-js";

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
      _id,
      status,
    }`);

    if (fetchedApplications.length === 0) {
      console.log("No applications found.");
      return;
    }

    const applicationsToUpdate = fetchedApplications.filter(
      (application) => application.status === "approved"
    );

    if (applicationsToUpdate.length === 0) {
      console.log("No applications with status 'approved' found.");
      return;
    }

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

// export async function POST(request: Request) {
//   try {
//     const requestUrl = new URL(request.url);
//     const formData = await request.formData();

//     // Perform user registration or other actions with email and password here
//     // ...

//     return new Response("Registration Successful", { status: 200 });
//   } catch (error) {
//     console.error("Error processing POST request:", error);
//     return new Response("Error occurred during registration", { status: 500 });
//   }
// }

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
