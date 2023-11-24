import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";


// FIX: verfification and error messages on client side

export async function POST(request: Request) {
  const requestUrl = new URL(request.url);
  const formData = await request.formData();
  const email = String(formData.get("email"));
  const password = String(formData.get("password"));
  const supabase = createRouteHandlerClient({
    cookies,
  });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: admin, error: adminNotFound } = await supabase
    .from("admin")
    .select("*")
    .eq("admin_email", email);


  if (adminNotFound) {
    return NextResponse.redirect(
      `${requestUrl.origin}/login-admin?error=Admin not found`,
      {
        status: 301,
      }
    );
  }

  if (admin && admin.length > 0) {
    const { error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (signInError) {
      return NextResponse.redirect(
        `${requestUrl.origin}/login-admin?error=Could not authenticate user`,
        {
          status: 301,
        }
      );
    }

    return NextResponse.redirect(`${requestUrl.origin}/admin`, {
      status: 301,
    });
  } else {
    return NextResponse.redirect(
      `${requestUrl.origin}/login-admin?error=Admin access denied`,
      {
        status: 301,
      }
    );
  }
}
