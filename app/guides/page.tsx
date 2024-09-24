"use client";
import { setupGuides } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Hero from "@/components/guides/hero";

const page = () => {
  return (
    <div>
      <Hero />
      <h2 className="text-center text-4xl mt-20 mb-20">
        <span className="border-b-4 border-primary">Business Setup Guides</span>
      </h2>
      {setupGuides[0] && (
        <div className="px-8 md:px-16 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Left Side - Image */}
            <div className="relative w-full h-[60vh]">
              <Image
                src={setupGuides[0].image}
                alt={setupGuides[0].title}
                layout="fill"
                objectFit="cover"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-secondary px-10 h-full flex flex-col justify-center">
              <h3 className="text-3xl mb-4 border-l-4 border-[#556D1E] pl-5">
                {setupGuides[0].title}
              </h3>
              <p className="text-gray-600 text-lg mb-6">
                {setupGuides[0].description}
              </p>
              <Link
                href={`/guides/${setupGuides[0].id}`}
                className="w-fit inline-flex items-center bg-[#556D1E] text-white font-medium px-6 py-3 hover:bg-[#435414] transition"
              >
                Download Free
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-3 px-8 md:px-16 my-20 gap-10">
        {setupGuides.slice(1).map((guide, index) => (
          <div
            key={index}
            className="bg-secondary overflow-hidden flex flex-col"
          >
            <Link href={`/guides/${guide.id}`} className="block">
              <div className="relative w-full h-48">
                <Image
                  src={guide.image}
                  alt={guide.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </Link>
            <div className="p-6">
              <h3 className="text-xl pl-4 border-l-4 border-[#556D1E] text-gray-800 mb-3">
                {guide.title}
              </h3>
              <p className="text-gray-600 mb-5">{guide.description}</p>
            </div>
            <div className="p-6 mt-auto">
              <Link
                href={`/guides/${guide.id}`}
                className="w-fit inline-block bg-[#556D1E] hover:bg-primary-dark text-white font-medium px-4 py-2"
              >
                Download FREE
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
