"use client";

export default function ResetPasswordWithEmail() {
  return (
    <div>
      <form
        action="/auth/reset-password-email"
        method="POST"
        className="flex flex-col gap-[24px]"
      >
        <label htmlFor="mail">Skriv in din mail</label>
        <input name="email" required></input>

        <button className="px-4 mb-2 border-4 w-full border-black dark:border-white text-black dark:text-white h-[50px]">
          Återställ lösenord
        </button>
      </form>
    </div>
  );
}
