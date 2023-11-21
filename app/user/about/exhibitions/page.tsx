"use server";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import ClientSideExhibitions from "./exhibitions";
import { getExhibitions } from "@/sanity/sanity.utils";

export default async function ExhibitionsPage() {
  const supabase = createServerComponentClient({
    cookies,
  });

  try {
    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (session) {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      const supabaseUserId = user?.id;

      if (!session) {
        redirect("/");
      }

      const exhibitions = await getExhibitions();

      // Check if any venue matches the user ID
      const userExhibitions = exhibitions.filter(
        (exhibition) => exhibition.userId === supabaseUserId
      );

      console.log("userExhibition", userExhibitions);

      if (userExhibitions) {
        // Render the ClientSideUpdateVenue component
        return <ClientSideExhibitions exhibitions={userExhibitions} />;
      }
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  // Return the JSX element for the message
  return <p>Du har inga sparade utsällningar</p>;
}
