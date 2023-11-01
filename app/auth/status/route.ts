import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { createClient } from "@sanity/client";
import { Application } from "../../../types/application";
import { User } from "@supabase/supabase-js";
const client = createClient({
  projectId: "z4x2zjsw",
  dataset: "production",
  useCdn: false,
});

export const dynamic = "force-dynamic";

const supabase = createRouteHandlerClient({ cookies });

export default async function setStatus(user: User) {
  const documentType = "application";

  try {
    const fetchedapplication = await client.fetch<
      Application[]
    >(`*[_type == "${documentType}"]{
     
      status,
    }`);

    fetchedapplication.map(async (application) => {
      if (application.status === "approved") {
        const { error } = await supabase
          .from("status")
          .update({ status: "approved" })
          .eq("user_id", user.id);

        if (error) {
          console.error("Error inserting data:", error);
        }
      }
    });
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
