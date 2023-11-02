"use client";
import { NextStudio } from "next-sanity/studio";
import { config } from "@/sanity.config";
import supabase from "@/supabase/utils/supabaseClient";
import { useState } from "react";

export default function AdminPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <>
      <NextStudio config={config} />
      <div>
        <form action="/auth/sign-up" method="POST">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button>Sign up user</button>
        </form>
      </div>
    </>
  );
}
