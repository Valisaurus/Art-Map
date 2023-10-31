import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { createClient } from "@sanity/client";
import { Application } from "../../../types/application";
import { useState } from "react";

const client = createClient({
  projectId: "z4x2zjsw",
  dataset: "production",
  useCdn: false,
});

export const dynamic = "force-dynamic";

const supabase = createRouteHandlerClient({ cookies });

export default async function setStatus() {
  const documentType = "application";

  try {
    const fetchedapplication = await client.fetch<
      Application[]
    >(`*[_type == "${documentType}"]{
      venueName,
      contactPerson { name, email, phone },
      status,
    }`);

    fetchedapplication.map(async (application) => {
      const venueName = application.venueName;
      const contactPersonName = application.contactPerson.name;
      const contactPersonEmail = application.contactPerson.email;
      const contactPersonPhone = application.contactPerson.phone;
      const status = application.status;

      if (application) {
        const { error } = await supabase.from("applications").insert([
          {
            venue_name: venueName,
            name: contactPersonName,
            email: contactPersonEmail,
            phone: contactPersonPhone,
            status: status,
          },
        ]);

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
