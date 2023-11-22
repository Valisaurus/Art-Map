import ClientSideDashboard from "./user";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getVenues } from "@/sanity/sanity.utils";
import styles from "./dashboard.module.css";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const supabase = createServerComponentClient({
    cookies,
  });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  // Different welcoming message depending on user
  let welcomeMessage = "";

  if (session) {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    const userId = user?.id;

    const venues = await getVenues();
    const matchingVenue = venues.find((venue) => venue._id === userId);

    if (matchingVenue) {
      const venueName = matchingVenue.venueName;
      welcomeMessage = `Välkommen ${venueName}!`;
    } else {
      welcomeMessage = "Välkommen!";
    }

    return <ClientSideDashboard welcomeMessage={welcomeMessage} />;
  }

  if (!session) {
    redirect("/");
  }
}
