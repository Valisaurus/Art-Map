import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";
import LogoutButton from "../components/LogoutButton";
import Map from "../components/Map";

export const dynamic = "force-dynamic";

export default async function Index() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <>
      <nav className="">
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
      </nav>
      <Map />
    </>
  );
}
