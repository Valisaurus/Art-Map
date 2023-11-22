"use server";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import ClientSideResetPassword from "./reset-password";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function ResetPassword() {

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
  }
  if (!session) {
    redirect("/");
  }
  
  return <ClientSideResetPassword />;
};


