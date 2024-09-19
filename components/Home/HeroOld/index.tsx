import Link from "next/link";
import React from "react";
import { FaArrowDown } from "react-icons/fa6";

const HeroSection: React.FC = () => {
  return (
    <div className="relative w-full h-screen">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/videos/your-video.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col justify-center h-full w-full text-white px-8 md:px-16">
        <div className="w-full max-w-4xl">
          <h1 className="text-5xl mb-8">
            Empowering Your Business Journey with Strategic Financial Solutions.
          </h1>
          <p className="text-xl mb-8">
            Offering expert solutions for accounting, tax, and business growth
            in Dubai.
          </p>
          <Link
            href=""
            className="bg-primary text-white px-6 py-3  font-semibold transition duration-300"
          >
            <span>Enquire Now</span>
          </Link>
        </div>
      </div>
      <div className="absolute bottom-0 w-full flex justify-center p-4">
        <Link href="" className="text-white text-lg flex flex-col items-center">
          <span> Learn more </span>
          <FaArrowDown className="animate-bounce mt-5" />
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
