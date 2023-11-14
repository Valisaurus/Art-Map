"use server";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import ClientSideExhibitions from "./exhibitions";

export default async function ExhibitionsPage() {
  
    const supabase = createServerComponentClient({
      cookies,
    });
  
    const {
      data: { session },
    } = await supabase.auth.getSession();
  
    if (!session) {
      redirect("/");
    }
    return <ClientSideExhibitions />;

}
