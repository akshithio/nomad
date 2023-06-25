import Image from "next/image";
import Link from "next/link";

interface componentProps {
  status: string;
  fromPlace: string;
  toPlace: string;
  fromDate: Date;
  toDate: Date;
  imageLink: string?;
  imageNum: number;
  // Below is the journey / plan id that postgres should be automatically updating? it is set to number temporarily
  id: string;
}

export default function CardComponent(props: componentProps) {
  let string: string;
  switch (props.imageNum) {
    case 0:
      string =
        "https://cdn.discordapp.com/attachments/818736658819448845/1122145549353750568/Wallpapers_4.jpg";
      break;
    case 1:
      string =
        "https://cdn.discordapp.com/attachments/818736658819448845/1122145550263930920/Wallpapers_5.jpg";
      break;
    case 2:
      string =
        "https://cdn.discordapp.com/attachments/818736658819448845/1122145551367020644/Wallpapers_7.jpg";
      break;
    case 3:
      string =
        "https://cdn.discordapp.com/attachments/818736658819448845/1122145552105214043/Wallpapers_1.jpg";
      break;
  }

  return (
    <Link
      href={`/journey/${props.id}`}
      className="relative mt-4 h-[256px] w-[384px] rounded-md border-[2px] border-black"
    >
      <div className="z-0 h-[60%] w-full overflow-clip">
        <Image
          src={string}
          alt="random banner image"
          width={6016}
          height={2000}
        />
      </div>
      <div className="h-[40%] w-full border-t-[2px] border-black px-2 pt-5 font-inter text-sm">
        {props.status === "inProgress" && (
          <div className="absolute right-2 rounded-md bg-yellow-300 px-2 font-cal text-[12px]">
            In Progress
          </div>
        )}
        {props.status === "recentlyCompleted" && (
          <div className="absolute right-2 rounded-md bg-green-300 px-2 font-cal text-[12px]">
            Trip Done
          </div>
        )}
        {props.status === "expired" && (
          <div className="absolute right-2 rounded-md bg-gray-300 px-2 font-cal text-[12px]">
            Expired
          </div>
        )}

        <svg
          className="absolute bottom-2 right-2"
          width="54"
          height="30"
          viewBox="0 0 54 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="15" cy="15" r="14.5" fill="#D9D9D9" stroke="black" />
          <circle cx="26" cy="15" r="14.5" fill="#D9D9D9" stroke="black" />
          <circle cx="39" cy="15" r="14.5" fill="#D9D9D9" stroke="black" />
        </svg>

        <h1 className="absolute bottom-3 right-3 mb-[1px] mr-[2px] text-sm">
          +3
        </h1>

        <h1>From: {props.fromPlace}</h1>
        <h1>To: {props.toPlace}</h1>

        <h1 className="absolute bottom-2 font-serif text-[12px]">
          {props.fromDate.toLocaleString("default", { month: "long" }) +
            " " +
            props.fromDate.getDate().toString()}{" "}
          -{" "}
          {props.toDate.toLocaleString("default", { month: "long" }) +
            " " +
            props.toDate.getDate().toString()}
        </h1>
      </div>
      <Image
        className="absolute left-[5%] top-[52.5%] rounded-full"
        src={props.imageLink}
        alt="profile picture"
        height={36}
        width={36}
      />
    </Link>
  );
}
