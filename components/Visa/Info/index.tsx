import Image from "next/image";
import { BiSolidPlaneAlt } from "react-icons/bi";
import { FaDownLeftAndUpRightToCenter } from "react-icons/fa6";
import { MdOutlineJoinRight } from "react-icons/md";
import { RiCustomerService2Fill, RiReplyAllLine } from "react-icons/ri";
import { GiProcessor } from "react-icons/gi";
import { AiOutlineFileDone, AiOutlineFileSearch } from "react-icons/ai";
import line from "@/assets/line.svg";

type Info = {
  icon: JSX.Element;
  title: string;
  description: string;
};

function InfoCard({ info }: { info: Info }) {
  return (
    <div className="w-full h-full pb-8 px-12 flex bg-white shadow-xl border-t-2 rounded-lg flex-col justify-between items-center z-10">
      <div className="w-16 aspect-square -translate-y-1/2 grid place-items-center bg-secondary rounded-full">
        {info.icon}
      </div>
      <section className="flex h-full justify-between flex-col gap-4">
        <h3 className="text-3xl md:text-4xl text-center font-bold text-primary font-bask italic">
          {info.title}
        </h3>
        <p className="text-secondary text-center">{info.description}</p>
        <div />
      </section>
    </div>
  );
}

export default function Info() {
  const infos: Info[] = [
    {
      icon: <AiOutlineFileDone size={40} color="#e0c98d" />,
      title: "Step 1",
      description: "Assemble the necessary paperwork.",
    },
    {
      icon: <RiReplyAllLine size={40} color="#e0c98d" />,
      title: "Step 2",
      description:
        "On your behalf, we will forward them to the proper authorities.",
    },
    {
      icon: <GiProcessor size={40} color="#e0c98d" />,
      title: "Step 3",
      description: "Pay the necessary golden visa fees.",
    },
    {
      icon: <MdOutlineJoinRight size={40} color="#e0c98d" />,
      title: "Step 4",
      description: "Obtain your E-visa and finish the necessary medical tests.",
    },
  ];

  return (
    <div className="my-20">
      <h1 className="font-bold text-3xl md:text-4xl text-center text-secondary">
        Golden Visa Process
      </h1>
      <div className="relative">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-x-8 md:gap-y-20 my-10 px-8 md:px-16">
          {infos.map((info) => (
            <InfoCard key={info.title} info={info} />
          ))}
        </div>
        <Image
          layout="fill"
          objectFit="contain"
          src={line.src}
          className="lg:block hidden absolute xl:top-[21%] left-0 w-full px-20 -z-0"
          alt="useful info track"
        />
      </div>
    </div>
  );
}
