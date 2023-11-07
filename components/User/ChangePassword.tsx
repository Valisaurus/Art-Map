export default function ChangePassword() {
  return (
    <div>
      <form action="/auth/change-password" method="POST">
        <label htmlFor="old password">Gammalt lösenord</label>
        <input name="old password" type="password" required></input>
        <label htmlFor="new password">Nytt lösenord</label>
        <input name="new password" type="password" required></input>
        <button>Byt lösenord </button>
      </form>
    </div>
  );
}
