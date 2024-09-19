import Image from "next/image";
import React, { ReactNode } from "react";
import { PopupButton } from '@typeform/embed-react'
import Link from "next/link";

const ServiceHero = (
  {
    buttonText,
    title,
    description,
    subtitle,
    image,
    backgroundColor,
    showButton = false,
    costCalculator = false
  }: {
    buttonText?: string;
    title: string;
    description?: string;
    subtitle?: string;
    image: any;
    costCalculator?: boolean;
    backgroundColor: string;
    showButton?: boolean;
  },
) => {
  return (
    <div
      className={`w-full flex md:mt-[140px] mt-[100px] px-8 pt-5 md:px-40 md:gap-32 gap-5 justify-center items-center md:flex-row flex-col ${showButton ? "md:h-[66vh]" : "md:h-[55vh]"} `}
      style={{ backgroundColor: "#102448" }}
    >
      <div className="text-white flex flex-col gap-2 md:w-1/2 ">
        <p className="uppercase font-medium md:text-lg">{subtitle}</p>
        <h1 className="md:text-4xl text-2xl font-bold">{title}</h1>
        <p className="md:text-xl">{description}</p>
        {/* {
          showButton &&
          (
            <Link
              href="/contact"
              className="bg-white mt-5 w-fit font-medium text-center px-14 py-6 rounded-md text-md"
              style={{ color: "#102448" }}
            >
              {buttonText}
            </Link>
          )} */}
        {
          subtitle == 'Freezone License' || subtitle == 'Golden Visa UAE' ?

            <PopupButton
              id="ghl54Uga"
              className="bg-white mt-5 w-fit font-medium text-secondary text-center px-14 py-6 rounded-md text-md">
              Calculate your costs today!
            </PopupButton>
            :
            showButton &&
            (
              <Link
                href={subtitle == "Business Activities" ? "https://docs.google.com/spreadsheets/d/1_PdcNnwgGdniAnZpQrgWnPmv9-r1oLOGazgBH2X4BXI/edit?usp=sharing" : "/contact"}
                className="bg-white mt-5 w-fit font-medium text-center px-14 py-6 rounded-md text-md"
                style={{ color: "#102448" }}
              >
                {buttonText}
              </Link>
            )
        }
        {
          costCalculator &&
          <PopupButton id="ghl54Uga" className="mt-5 w-fit text-white underline text-sm">
            Calculate your setup costs
          </PopupButton>
        }
      </div>
      <div className="md:w-1/2 md:self-end">
        <Image src={image} alt="hero" className="md:w-[85%] w-[100%]" width={500} height={500} />
      </div>
    </div >
  );
};

export default ServiceHero;
