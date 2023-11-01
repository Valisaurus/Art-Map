import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { createClient } from "@sanity/client";
import { Application } from "../../../types/application";

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
      _id,
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
      const id = application._id;
      if (application) {
        const { error } = await supabase.from("applications").insert([
          {
            application_id: id,
            venue_name: venueName,
            contact_name: contactPersonName,
            contact_email: contactPersonEmail,
            contact_phone: contactPersonPhone,
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
