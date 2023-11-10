"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";

const ClientSideResetPassword = () => {
  const codeFetch = useSearchParams().get("code");
  const code = codeFetch !== null ? codeFetch : "";
  return (
    <form
      action="/auth/reset-pw"
      method="POST"
      className="flex flex-col gap-[24px]"
    >
      <input type="hidden" name="code" value={code} />
      <label htmlFor="password">Skriv in ditt nya lösenord:</label>
      <div className="px-4 py-2 border-4 w-full border-black bg-inherit text-black dark:border-white dark:bg-black dark:text-white h-[50px]">
        <input type="password" name="password" />
      </div>
      <button className="px-4 mb-2 border-4 w-full border-black dark:border-white text-black dark:text-white h-[50px]">
        Uppdatera
      </button>
    </form>
  );
};

export default ClientSideResetPassword;
