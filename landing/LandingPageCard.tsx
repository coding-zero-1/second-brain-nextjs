import { ILandingPageCardProps } from "@/types/types";
import Image from "next/image";

function LandingPageCard({
  title,
  description,
  imageUrl,
}: ILandingPageCardProps) {
  return (
    <div className="w-60 h-60 bg-blue-100 p-2 rounded-2xl border-2 border-gray-400 flex flex-col justify-around items-center text-center hover:scale-105 transition-transform duration-200 ease-in-out">
      <h2 className="text-xl font-medium">{title}</h2>
      <p className="text-sm">{description}</p>
      <div className="w-full h-[40%] bg-gray-700 rounded-full">
        <Image
          src={imageUrl}
          alt={title}
          width={50}
          height={50}
          className="object-cover rounded-full w-full h-full"
        />
      </div>
    </div>
  );
}

export default LandingPageCard;
