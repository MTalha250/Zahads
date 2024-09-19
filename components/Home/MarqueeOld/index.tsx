"use client";
import { marqueeImgs } from "@/constants";
import Marquee from "react-fast-marquee";

const MarqueeComp = () => {
  return (
    <div className="w-full py-10 bg-secondary">
      <h1 className="text-4xl text-center">
        <span className="border-b-4 border-primary pb-2">
          Trusted by partners worldwide
        </span>
      </h1>
      <Marquee className="uppercase text-xl font-light mt-3 md:mt-10">
        {marqueeImgs.map((img) => (
          <img key={img} src={img} className="w-28 md:w-36 mx-5" />
        ))}
      </Marquee>
    </div>
  );
};
export default MarqueeComp;
