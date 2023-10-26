import LogoutButton from "@/components/User/LogoutButton";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function About() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div>
      <p>This is the om sidan site Hej hej</p>
      <div className="">
        {user ? (
          <div className="">
            Hey, {user.email}!
            <LogoutButton />
          </div>
        ) : (
          <Link href="/login" className="">
            Login
          </Link>
        )}
      </div>
    </div>
  );
}
