import { signIn } from "@/auth"
import { redirect } from "next/navigation"
 
export default function SignInButton() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("google",{redirectTo: '/dashboard'})
      }}
      className="bg-gray-300 inline p-2 rounded-md mt-3"
    >
      <button type="submit">Get Started</button>
    </form>
  )
} 