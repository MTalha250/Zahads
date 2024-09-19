"use client"
import React from "react";
import { PopupButton } from "@typeform/embed-react";
import { RocketIcon } from "lucide-react";
import setupThinking from '@/assets/setupThinking.webp'

const BusinessSetup = () => {
  const data = [
    {
      title: "There is a multitude of options.",
      subtitle:
        "With over 60 jurisdictions, how do you know which is the right one for your Dubai company? How do you make sure you’re choosing the right licence and business activity? Don’t let your business setup in Dubai be a trial-and-error process.",
    },
    {
      title: "It is not easy.",
      subtitle:
        "Liaising with the relevant authorities and government departments alone takes time and travel miles.  Lots of both.",
    },
    {
      title: "There is a mountain of paperwork.",
      subtitle:
        "Starting a Dubai company involves tonnes of paperwork. Think forms, applications, banking and legal requirements – and that is just the start.  ",
    },
    {
      title: "You might save money - but at what cost?",
      subtitle:
        "What is your time worth?  Are you outstanding with detail?  Can you afford to hit pause on your business plans to fill out forms or attend more meetings?",
    },
  ];

  return (
    <div className="min-h-screen bg-white md:p-16 px-8 py-5 items-center flex flex-col md:px-32">
      <div className="flex items-center justify-center w-16 h-14 bg-primary/10 rounded-md">
        <RocketIcon size={30} strokeWidth={1.5} className="text-primary" />
      </div>
      <h2 className="md:text-3xl text-xl font-bold text-center max-w-[700px] mt-5">
        Should you undertake business setup in Dubai yourself?
      </h2>
      <p className="md:text-xl  max-w-[780px] text-center font-light mt-3">
        Wondering if you can start a Dubai company yourself? You can. But there
        are some things you need to know.
      </p>
      <div className="grid md:mt-20 mt-10 md:grid-cols-2 grid-cols-1 items-center gap-20">
        <div className="flex flex-col items-center justify-center w-full h-full relative">
          {data.map((item, index) => (
            <div
              key={item.title}
              className="md:p-5 py-5 bg-white transition-all duration-200"
            >
              <h2 className="text-2xl font-bold">
                {index + 1}. {item.title}
              </h2>
              <p className="text-gray-600  mt-3">{item.subtitle}</p>
            </div>
          ))}
        </div>
        <img
          src={setupThinking.src}
          width={500}
          height={300}
          alt="img"
        />
      </div>
      <div className="mt-10 flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold text-center mt-5">
          But it doesn't have to be this way.
        </h2>
        <p className="text-center font-light mt-3">
          Before you do anything, talk to one of our experts at company
          formation in Dubai. We'll show you how easy the Zahads process is
          and why we're the partner of choice for more entrepreneurs choosing to
          start a Dubai company.
        </p>
        <PopupButton id="ghl54Uga" className="text-white bg-secondary py-3 mt-5  px-4 rounded text-sm">
          Cost Calculator
        </PopupButton>
      </div>
    </div>
  );
};

export default BusinessSetup;
