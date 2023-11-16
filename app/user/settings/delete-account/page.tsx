type DeleteAccountProps = {
  user_id: string | undefined;
  user_email: string | undefined;
};
const DeleteAccount = ({ user_id, user_email }: DeleteAccountProps) => {
  return (
    <div>
      <div>
        <i>Radera konto</i>
      </div>

      <form action="/auth/delete-account" method="post">
        <label htmlFor="password">
          <i>Är du säker på att du vill ta bort ditt konto permanent?</i>
        </label>

        <input
          type="password"
          name="password"
          placeholder="Skriv in ditt lösenord"
        />

        <button>Radera</button>
      </form>
    </div>
  );
};

export default DeleteAccount;
