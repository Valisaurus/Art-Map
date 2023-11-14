type DeleteAccountProps = {
  userID: string | undefined;
  userEmail: string | undefined;
};
const DeleteAccount = ({ userID, userEmail }: DeleteAccountProps) => {
  return (
    <div className="flex flex-col justify-center items-center gap-[32px]">
      <div className="py-[24px]">
        <i>Radera konto</i>
      </div>
      <form
        action="/auth/delete-account"
        method="post"
        className="flex flex-col gap-[24px]"
      >
        <input type="hidden" name="user_id" value={userID} />
        <input type="hidden" name="user_email" value={userEmail} />
        <label htmlFor="password">
          <i>Är du säker på att du vill ta bort ditt konto permanent?</i>
        </label>
        <input
          type="password"
          name="password"
          className="border-4 border-black dark:border-white px-[12px] py-[16px] h-[48px] bg-white dark:bg-black"
          placeholder="Skriv in ditt lösenord..."
        />
        <button className="flex flex-col justify-center items-center border-4 border-black dark:border-white text-center h-[48px]">
          Radera
        </button>
      </form>
    </div>
  );
};

export default DeleteAccount;
