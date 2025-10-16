import { auth } from "@/auth";
import SignInButton from "./SIgnInButton";
import SignOutButton from "./SignOutButton";

async function Header() {
  const session = await auth();
  return (
    <header className="px-15 py-6 bg-[#92baff] h-[8%] flex items-center w-full">
      <nav className="flex justify-between items-center w-full">
        <h1 className="font-semibold text-3xl text-[#0B032D]">Cognito</h1>
        {session?.user ? <SignOutButton /> : <SignInButton />}
      </nav>
    </header>
  );
}

export default Header;