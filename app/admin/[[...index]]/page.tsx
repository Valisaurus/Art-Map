"use client";
import { NextStudio } from "next-sanity/studio";
import { config } from "@/sanity.config";

import Messages from "./messages";

export default function AdminPage() {
  // const [email, setEmail] = useState<string>("");
  // const [password, setPassword] = useState<string>("");

  // async function handleSignUp() {
  //   const { error } = await supabase.auth.signUp({ email, password });
  //   if (error) {
  //     console.log(error.message)
  //   } else {
  //     console.log("Magic link sent to " + email )
  //   }
  // }

  return (
    <>
      <NextStudio config={config} />
      <div>
        <form action="/auth/invite" method="POST">
          <input
            type="email"
            name="email"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
          />
          {/* <input
            type="password"
            name="password"
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
          /> */}
          <button>Sign up user</button>
        </form>
        <Messages />
      </div>
    </>
  );
}
