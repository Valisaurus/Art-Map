import ClientSideDashboard from "./dashboard";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const supabase = createServerComponentClient({
    cookies,
  });

  // DENNA BORDE ÄNDRAS?
  // const {
  //   data: { session },
  // } = await supabase.auth.getSession();

  // if (!session) {
  //   redirect("/sign-up");
  // }

  return <ClientSideDashboard />;
}
