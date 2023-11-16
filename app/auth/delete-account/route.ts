import { createClient } from "@supabase/supabase-js";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const requestUrl = new URL(request.url);
  const formData = await request.formData();
  const password = String(formData.get("password"));

  const supabaseAdminClient = createClient(
    String(process.env.NEXT_PUBLIC_SUPABASE_URL),
    String(process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE),
    {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    }
  );

  const supabaseRouteClient = createRouteHandlerClient({ cookies });

  const {
    data: { user },
  } = await supabaseRouteClient.auth.getUser();
  const email = user?.email;
  const user_id = user?.id;

  if (!email || !user_id) {
    return NextResponse.redirect(`${requestUrl.origin}/?error=user not found`);
  }
  // Authenticate the user
  const { data: authData, error: authError } =
    await supabaseRouteClient.auth.signInWithPassword({
      email,
      password,
    });

  if (authError) {
    console.error("Authentication error:", authError.message);
    return NextResponse.redirect(
      `${requestUrl.origin}/?error=could not authenticate user`,
      { status: 301 }
    );
  }
  // Check if the user is authenticated
  if (authData?.user?.aud === "authenticated") {
    // Delete the user
    const { error: deleteError } =
      await supabaseAdminClient.auth.admin.deleteUser(user_id);

    if (deleteError) {
      console.error("Error deleting user:", deleteError.message);
      return NextResponse.redirect(
        `${requestUrl.origin}/login-user?error=Could not delete user`,
        { status: 301 }
      );
    }

    // Redirect after successful deletion
    return NextResponse.redirect(`${requestUrl.origin}/login-user`, {
      status: 301,
    });
  }
}
