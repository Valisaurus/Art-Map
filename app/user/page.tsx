import ClientSideDashboard from "./user";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getVenues } from "@/sanity/sanity.utils";
import venue from "@/sanity/schemas/documents/venue";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
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
    const userId = user?.id;

    const venues = await getVenues();
    const matchingVenue = venues.find((venue) => venue._id === userId);

    if (matchingVenue) {
      const venueName = matchingVenue.venueName;
      return (
        <div>
          <p>Välkommen {venueName}!</p>
          <ClientSideDashboard />
        </div>
      );
    }
  }
  if (!session) {
    redirect("/");
  }
}
