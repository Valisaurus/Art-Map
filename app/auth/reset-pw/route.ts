import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";


// route doesn't work for some reason

export async function POST(request: Request) {
  const requestUrl = new URL(request.url);
  const formData = await request.formData();
  const password = String(formData.get("password"));
  const code = String(formData.get("code"));

  const supabase = createRouteHandlerClient({ cookies });
  await supabase.auth.exchangeCodeForSession(code);

  const { data, error } = await supabase.auth.updateUser({
    password: password,
  });

  return NextResponse.redirect(`${requestUrl.origin}/om-sidan`, {
    status: 301,
  });
}
