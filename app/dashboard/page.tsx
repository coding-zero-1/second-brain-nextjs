import { auth } from "@/auth"
import { redirect } from "next/navigation";

async function page() {
    const session = await auth();
    if(!session?.user){
        redirect('/');
    }
  return (
    <div>page</div>
  )
}

export default page