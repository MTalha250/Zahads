"use client";
import { marqueeImgs } from "@/constants";
import Marquee from "react-fast-marquee";

const MarqueeComp = () => {
  return (
    <div className="w-full border-b py-4">
      <h1 className="text-4xl md:text-5xl text-center text-secondary">
        Our <span className="text-primary font-bask italic">Partners</span>
      </h1>
      <div className="flex flex-col items-center">
        <div className="w-1/3 md:w-1/5 h-1 bg-primary my-1"></div>
        <div className="w-1/4 md:w-[19%] h-1 bg-secondary"></div>
      </div>
      <br />
      <Marquee className="uppercase text-xl font-light my-3 md:my-5">
        {marqueeImgs.map((img) => (
          <img key={img} src={img} className="w-28 md:w-32 mx-5" />
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueeComp;
