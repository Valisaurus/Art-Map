import Messages from "./messages";

export default function InviteForm() {
  return (
    <div>
      <form action="/auth/invite" method="POST">
        <input type="email" name="email" />
        <button>Skicka länk att skapa konto</button>
      </form>
      <Messages />
    </div>
  );
}
