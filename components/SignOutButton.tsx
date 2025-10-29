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
        className="bg-purple-600 px-6 py-1.5 rounded-xl cursor-pointer text-lg text-white border-2 border-white shadow-sm shadow-gray-600 hover:bg-purple-700 flex items-center gap-2"
      >
        Sign Out
      </button>
    </form>
  );
}

export default SignOutButton;
