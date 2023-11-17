"use server";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const getUser = async () => {
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
      return { userId };
    } else {
      return null; // or some default user object
    }
  };