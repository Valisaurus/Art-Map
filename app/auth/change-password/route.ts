import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const supabase = createRouteHandlerClient({ cookies });
  const requestUrl = new URL(request.url);
  const formData = await request.formData();
  const oldPassword = String(formData.get("oldPassword"));
  const newPassword = String(formData.get("newPassword"));

  const {
    data: { user },
  } = await supabase.auth.getUser();
  const email = String(user?.email);

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password: oldPassword,
  });

  if (data?.user?.aud === "authenticated") {
    const { data, error } = await supabase.auth.updateUser({
      password: newPassword,
    });

    if (error) {
      return NextResponse.redirect(
        `${requestUrl.origin}/?error=incorrect old password`,
        {
          status: 301,
        }
      );
    }

    // Check if the user is an admin
    const { data: admin } = await supabase
      .from("admin")
      .select("*")
      .eq("admin_email", email);

    if (admin && admin.length > 0) {
      return NextResponse.redirect(`${requestUrl.origin}/admin`, {
        status: 301,
      });
    } else {
      return NextResponse.redirect(`${requestUrl.origin}/dashboard`, {
        status: 301,
      });
    }
  }
}
