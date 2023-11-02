export default function Slask() {
  return (
    <div>
      <form action="/api/status" method="get">
        {/* <label htmlFor="email">Email</label>
        <input name="email" placeholder="you@example.com" required />
        <label htmlFor="password">Lösenord</label>
        <input
          type="password"
          name="password"
          placeholder="••••••••"
          required
        /> */}
        <button>Registera konto</button>
      </form>
    </div>
  );
}

import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { createClient } from "@sanity/client";
import { Application } from "@/types/application";
import application from "@/sanity/schemas/documents/application";
export const dynamic = "force-dynamic";

const client = createClient({
  projectId: "z4x2zjsw",
  dataset: "production",
  useCdn: false,
  apiVersion: "2023-10-10",
});

export async function POST(request: Request) {
  const requestUrl = new URL(request.url);
  const formData = await request.formData();
  const email = String(formData.get("email"));
  const password = String(formData.get("password"));

  const supabase = createRouteHandlerClient({ cookies });
  const documentType = "application";
  const fetchedApplications = await client.fetch<
    Application[]
  >(`*[_type == "${documentType}"]{
  _id,
  status,
}`);

  if (fetchedApplications.length === 0) {
    console.log("No applications found.");
    return;
  }

  const approvedApplications = fetchedApplications.filter(
    (application) => application.status === "approved"
  );

  if (application) {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      // options: {
      //   emailRedirectTo: `${requestUrl.origin}/auth/callback`,
      // },
    });
  } else if (approvedApplications.length === 0) {
    console.log("No applications with status 'approved' found.");
    return;
  }

  // if (error) {
  //   return NextResponse.redirect(
  //     `${requestUrl.origin}/sign-up?error=Could not authenticate user`,
  //     {
  //       // a 301 status is required to redirect from a POST to a GET route
  //       status: 301,
  //     }
  //   );
  // } else {
  //   const user = data.user;
  //   if (user) {
  //     const { data: userStatus, error } = await supabase.from("status").insert([
  //       {
  //         user_id: user.id,
  //         status: "pending",
  //       },
  //     ]);
  //   }
  // }
  // if (error) {
  //   console.log("oh no error");
  // }

  return NextResponse.redirect(`${requestUrl.origin}/ansokan`, {
    // a 301 status is required to redirect from a POST to a GET route
    status: 301,
  });
}
