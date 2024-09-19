"use client"
import React from "react";
import img from "@/assets/dubaiBlue.avif";
import Image from "next/image";
import { PopupButton } from "@typeform/embed-react";

const Hero = () => {
  return (
    <div className="">
      <Image
        src={img}
        alt="hero image"
        className="opacity-80 object-cover w-full h-screen absolute top-0 left-0"
      />
      <div className=" w-full h-screen absolute top-0 left-0" />
      <div className="flex flex-col bg-black/40 items-center md:px-0 px-5 justify-center w-full h-screen relative">
        <h1 className="text-[#fff] md:text-4xl text-xl text-center md:mt-14 max-w-[700px] font-bold">
          HOW MUCH DOES BUSINESS SETUP IN DUBAI COST?
        </h1>
        <p className="text-white text-center mt-3 md:text-lg text-m max-w-[600px]">
          That depends. What is your business activity? Free zone or mainland?
          How many visas or shareholders? From our experience with{" "}
          <b>business setup in Dubai</b>{" "}
          for over 70,000 entrepreneurs, we have created the Business Setup Cost
          Calculator to give you the answer.
        </p>
        <PopupButton id="ghl54Uga" className="text-white bg-secondary py-2 mt-5  px-4 rounded ">
          Cost Calculator
        </PopupButton>
      </div>
    </div>
  );
};

export default Hero;