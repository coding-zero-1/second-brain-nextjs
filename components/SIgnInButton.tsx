import { signIn } from "@/auth";

export default function SignInButton() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google", { redirectTo: "/dashboard" });
      }}
    >
      <button
        type="submit"
        className="bg-purple-600 px-6 py-1.5 rounded-xl cursor-pointer text-lg text-white border-2 border-white shadow-xs shadow-black hover:bg-purple-700"
      >
        Get Started <span className="text-xl">&gt;&gt;</span>
      </button>
    </form>
  );
}
