import { createClient } from "@supabase/supabase-js";

import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const requestUrl = new URL(request.url);
  const formData = await request.formData();
  const password = String(formData.get("password"));
  const email = String(formData.get("user_email"));
  const user_id = String(formData.get("user_id"));

  const supabase = createClient(
    String(process.env.NEXT_PUBLIC_SUPABASE_URL),
    String(process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE),
    {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    }
  );

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  //console.log("THIS IS USERID", user_id);

  if (data?.user?.aud === "authenticated") {
    const { data, error } = await supabase.auth.admin.deleteUser(user_id);

    if (error) {
      return NextResponse.redirect(
        `${requestUrl.origin}/login-user?error=Could not delete user`,
        {
          // a 301 status is required to redirect from a POST to a GET route
          status: 301,
        }
      );
    }

    return NextResponse.redirect(`${requestUrl.origin}/login-user`, {
      status: 301,
    });
  }

  if (error?.message) {
    console.log(error?.message);
    return NextResponse.redirect(
      `${requestUrl.origin}/?error=incorrect password`,
      {
        // a 301 status is required to redirect from a POST to a GET route
        status: 301,
      }
    );
  }
}
