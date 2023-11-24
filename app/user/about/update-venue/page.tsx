import { getVenueData } from "@/sanity/sanity.utils";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Venue } from "@/types/venue";
import ClientSideUpdateVenue from "./updateVenue";

export default async function UpdateVenue() {
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

      const venues = await getVenueData();

       // FIX: not a clean solution with message

      // Check if any venue matches the user ID
      const userVenue = venues.find((venue) => venue._id === supabaseUserId);

      // Render the ClientSideUpdateVenue component with the user venue or message
      return <ClientSideUpdateVenue venue={userVenue} message={!userVenue ? "Det fanns inget sparat om din verksamhet" : undefined} />;
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
  
  return <ClientSideUpdateVenue venue={undefined} message="Det fanns inget sparat om din verksamhet. Fyll i dina uppgifter för att kunna publicera utställningar på sidan." />;
}
