import { auth } from "@/auth";
import LandingPageCard from "@/landing/LandingPageCard";
import { ILandingPageCardProps } from "@/types/types";
import Image from "next/image";
import { redirect } from "next/navigation";

async function Home() {
  const session = await auth();
  if (session?.user) {
    redirect("/dashboard");
  }

  const features: ILandingPageCardProps[] = [
    {
      title: "Notes",
      description:
        "Capture and organize your thoughts, ideas, and important information in one place.",
      imageUrl: "/note-taking.png",
    },
    {
      title: "Youtube Links",
      description:
        "Save and categorize your favorite YouTube videos for easy access and reference.",
      imageUrl: "/youtube.png",
    },
    {
      title: "Twitter/X Links",
      description:
        "Easily save and organize your favorite tweets for future reference and sharing.",
      imageUrl: "/twitter.png",
    },
  ];
  return (
    <main className="h-[92%] w-full flex flex-col justify-center items-center">
      <section className="h-full w-[80%] flex flex-col items-center justify-between">
        <div className="text-center mt-10 h-[20%]">
          <h1 className="text-5xl font-normal text-[#0B032D] mb-4">
            Your very own{" "}
            <span className="font-medium italic text-[#2B20FF]">
              Second Brain
            </span>
          </h1>
          <h3 className="text-gray-700 text-lg">
            Save your precious brain space for what’s important right now <br />
            Store now, Refer Later
          </h3>
        </div>
        <div className="h-[70%] w-full flex justify-center items-center">
          <div className="w-[80%] bg-amber-300 h-full">
            Hello
          </div>
        </div>
      </section>
    </main>
  );
}
export default Home;
