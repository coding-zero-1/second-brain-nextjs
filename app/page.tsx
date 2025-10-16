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
    <main className="h-[91%] w-full flex justify-center items-center">
      <section className="w-[90%] h-[85%] flex flex-1-row justify-between items-center rounded-3xl p-10">
        <div className="h-full w-[60%] flex flex-col items-center justify-center text-[#0B032D]">
          <div className="w-full text-center">
            <h1 className="text-5xl font-medium underline underline-offset-10">
              Your <span className="text-purple-600">own</span> Second brain 🧠
            </h1>
          </div>
          <div className="w-full">
            <p className="text-2xl mt-5 text-center">
              Cognito is an AI-powered knowledge management system that helps
              you capture, organize, and retrieve information effortlessly.
            </p>
            <div className="w-full mt-5 flex flex-col items-center justify-center gap-4">
              <p className="text-2xl font-medium">Store your:</p>
              <div className="flex gap-2 items-center w-full justify-center">
                {features.map((feature) => (
                  <LandingPageCard
                    key={feature.title}
                    title={feature.title}
                    description={feature.description}
                    imageUrl={feature.imageUrl}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div>
          <Image
            src="/hero-section-image.png"
            alt="Cognito hero section image"
            width={420}
            height={400}
            className="rounded-3xl"
          />
        </div>
      </section>
    </main>
  );
}
export default Home;
