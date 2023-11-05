import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  const requestUrl = new URL(request.url);
  const formData = await request.formData();

  const email = String(formData.get("email"));
  
  const supabase = createRouteHandlerClient({ cookies });

  // const { data, error } = await supabase.auth.admin.inviteUserByEmail(email);
  try {
    const { error } = await supabase.auth.signInWithOtp({
      email: email,
      options: {
        emailRedirectTo: `${requestUrl.origin}/reset-password`,
      },
    });
  } catch (err) {
    console.error("Error while creating document:", err);
    return NextResponse.redirect(
      `${requestUrl.origin}/admin/desk?error=Could not sign up user`,
      {
        status: 301,
      }
    );
  }
  return NextResponse.redirect(`${requestUrl.origin}/admin/desk`, {
    status: 301,
  });
}
