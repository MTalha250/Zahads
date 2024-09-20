import Link from "next/link";
import React from "react";
import { FaArrowDown } from "react-icons/fa6";

const Hero: React.FC = () => {
  return (
    <div className="relative w-full h-[95vh]">
      <img
        src="https://placehold.co/1920x1080"
        alt=""
        className="w-full h-full object-cover absolute top-0 left-0"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col justify-end h-full w-full text-white px-8 md:px-16 py-20">
        <div className="w-full max-w-4xl">
          <h1 className="text-5xl mb-8">
            Do You Need Expert Business Support in the UAE?
          </h1>
          <p className="text-xl mb-8">
            Book a free consultation with our specialists and get the
            information you need. Our team will guide you with precision and
            expertise.
          </p>
          <Link
            href=""
            className="bg-primary text-black px-6 py-3 transition duration-300"
          >
            <span>Get Started Today</span>
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

export default Hero;