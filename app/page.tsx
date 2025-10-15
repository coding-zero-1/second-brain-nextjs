import { auth } from "@/auth";
import SignInButton from "@/components/SIgnInButton";
import { redirect } from "next/navigation";

async function Home() {
  const session = await auth();
  if (session?.user) {
    redirect("/dashboard");
  }
  return (
    <div>
      <SignInButton />
    </div>
  );
}
export default Home;