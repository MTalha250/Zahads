"use client";
import { marqueeImgs } from "@/constants";
import Marquee from "react-fast-marquee";

const MarqueeComp = () => {
  return (
    <div className="w-full border-b py-4">
      <h1 className="px-10 text-5xl text-center text-secondary">
        Our <span className="text-primary font-bask italic">Partners</span>
      </h1>
      <div className="flex flex-col items-center">
        <div className="w-1/5 h-1 bg-primary my-1"></div>
        <div className="w-[19%] h-1 bg-secondary"></div>
      </div>
      <Marquee className="uppercase text-xl font-light my-5">
        {marqueeImgs.map((img) => (
          <img src={img} className="w-32 mx-5" />
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueeComp;
