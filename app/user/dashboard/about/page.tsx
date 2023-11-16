import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import VenueAbout from "./about";
import { redirect } from "next/navigation";


export default async function AboutPage() {
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

  } else {
    return "could not get user";
  }
  if (!session) {
    redirect("/");
  }

  return <VenueAbout/>;
}
