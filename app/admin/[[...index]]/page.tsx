"use client";
import { NextStudio } from "next-sanity/studio";
import { config } from "@/sanity.config";

<<<<<<< Updated upstream
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

=======
import { useState } from "react";

export default function AdminPage() {
>>>>>>> Stashed changes
  return (
    <>
      <NextStudio config={config} />
      <div>
        <form action="/auth/sign-up" method="POST">
<<<<<<< Updated upstream
          <input
            type="email"
            name="email"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="password"
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
          />
=======
          <input type="email" name="email" />
          <input type="password" name="password" />
>>>>>>> Stashed changes
          <button>Sign up user</button>
        </form>
        <Messages />
      </div>
    </>
  );
}
