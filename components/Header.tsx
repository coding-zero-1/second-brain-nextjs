import { auth } from "@/auth";
import SignInButton from "./SIgnInButton";
import SignOutButton from "./SignOutButton";
import Link from "next/link";

async function Header() {
  const session = await auth();
  return (
    <header className="px-10 py-6 h-[8%] flex items-center w-full">
      <nav className="flex justify-between items-center w-full">
        <Link href="/" className="font-semibold text-3xl text-[#0B032D] italic">Cognito</Link>
        {session?.user ? <SignOutButton /> : <SignInButton />}
      </nav>
    </header>
  );
}

export default Header;