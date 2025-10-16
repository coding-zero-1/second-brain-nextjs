import { signOut } from "@/auth";

function SignOutButton() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut({ redirectTo: "/" });
      }}
    >
      <button
        type="submit"
        className="bg-[#7a45a9] px-6 py-1.5 rounded-xl cursor-pointer text-lg text-white border-2 border-white shadow-sm shadow-blue-800 hover:bg-[#87239b]"
      >
        Sign Out
      </button>
    </form>
  );
}

export default SignOutButton;
