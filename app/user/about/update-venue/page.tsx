import VenueFormUpdate from "@/components/Forms/VenueFormUpdate/VenueFormUpdate";
import { getVenueData } from "@/sanity/sanity.utils";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import ClientSideUpdateVenue from "./updateVenue";
import { createClient } from "next-sanity";
import clientConfig from "@/sanity/config/client-config";


export default async function UpdateVenue(req: NextRequest) {


  const supabase = createServerComponentClient({
    cookies,
  });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session) {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    const supabaseUserId = user?.id;

    const venues = await getVenueData();
  
    // Check if any venue matches the user ID
    const userVenue = venues.find((venue) => venue._id === supabaseUserId);

    if (userVenue) {
      // Render the ClientSideUpdateVenue component
      return <ClientSideUpdateVenue venue={userVenue} />;
    }
  } else {
    return <p>det fanns inget sparat om din verksamhet</p>
  }
}