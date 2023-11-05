"use client";
import { NextStudio } from "next-sanity/studio";
import { config } from "@/sanity.config";

import Messages from "./messages";

export default function AdminPage() {

  return (
    <>
      <NextStudio config={config} />
      <div>
        <form action="/auth/invite" method="POST">
          <input
            type="email"
            name="email"
          />
          <button>Skicka länk att skapa konto</button>
        </form>
        <Messages />
      </div>
    </>
  );
}