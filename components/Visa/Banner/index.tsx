import React from "react";
import img from "@/assets/visa-banner.jpeg";
const Banner = () => {
  return (
    <div className="relative">
      <img src={img.src} alt="img" className="w-full h-[80vh]" />
      <div className="top-0 left-0 w-full h-full absolute z-10 bg-secondary/70"></div>
      <div className="px-8 flex flex-col justify-center items-center absolute z-20 top-1/2 -translate-y-1/3 md:left-1/2 md:-translate-x-1/2 text-white md:w-1/2">
        <h1 className="text-center font-bold font-bask text-4xl md:text-5xl text-primary italic">
          Unlock a Wealth of Benefits with the UAE's Golden Visa!
        </h1>
        <p className="text-center font-semibold text-lg md:text-xl my-5 text-gray-100">
          At Zahads Corporate Services, we've got the tools to simplify your
          visa application hassle-free!
        </p>
        <button className="text-sm font-bold my-3 bg-primary py-3 px-5 text-white rounded">
          Book Your Free Assessment Today
        </button>
      </div>
    </div>
  );
};

export default Banner;
