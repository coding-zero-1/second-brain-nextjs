import { signIn } from "@/auth";
import ArrowRight from "@/icons/ArrowRight";

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
        className="bg-purple-600 px-6 py-1.5 rounded-xl cursor-pointer text-lg text-white border-2 border-white shadow-sm shadow-gray-600 hover:bg-purple-500 flex items-center gap-2 hover:px-5.5 transition-all duration-200"
      >
        Get Started <ArrowRight />
      </button>
    </form>
  );
}
