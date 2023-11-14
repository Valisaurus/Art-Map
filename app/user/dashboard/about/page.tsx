import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import VenueAbout from "./about";
import { redirect } from "next/navigation";

// interface userIdProps {
//   userId: string;
// }

export default async function AboutPage() {
  const supabase = createServerComponentClient({
    cookies,
  });

  // const { userId } = props;
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session) {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    const userId = user?.id;
    console.log("THIS IS USER ID", userId);
  } else {
    return "could not get user";
  }
  if (!session) {
    redirect("/");
  }

  return <VenueAbout/>;
}
