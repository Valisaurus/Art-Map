import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const requestUrl = new URL(request.url);
  const formData = await request.formData();
  const email = String(formData.get("email"));
  const password = String(formData.get("password"));

  const supabase = createRouteHandlerClient({ cookies });

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    // options: {
    //   emailRedirectTo: `${requestUrl.origin}/auth/callback`,
    // },
  });

  if (error) {
    return NextResponse.redirect(
      `${requestUrl.origin}/sign-up?error=Could not authenticate user`,
      {
        // a 301 status is required to redirect from a POST to a GET route
        status: 301,
      }
    );
  } else {
    const user = data.user;
    if (user) {
      const { data: userStatus, error } = await supabase.from("status").insert([
        {
          user_id: user.id,
          status: "pending",
        },
      ]);
    }
  }
  if (error) {
    console.log("oh no error");
  }

  return NextResponse.redirect(`${requestUrl.origin}/ansokan`, {
    // a 301 status is required to redirect from a POST to a GET route
    status: 301,
  });
}
