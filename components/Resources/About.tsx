"use client";
import React from "react";
import ServiceHero from "../Services/ServiceHero";
import Image from "next/image";
import { GlobeIcon } from "lucide-react";
import Characteristics from "./Characteristics";
import { aboutPoints, team } from "@/data";
import TeamCard from "../Cards/TeamCard";
import aboutUs from "@/assets/accountingServices.webp";

const About = () => {
  return (
    <div>
      <ServiceHero
        title="The Zahads Story"
        description="Founded in 2009, Zahads’s mission is to remove the complexities of company setup in Dubai so that our clients can focus 100% on running their businesses. "
        subtitle="About Us"
        image={aboutUs.src}
        backgroundColor="#102448"
        costCalculator
        buttonText="Get started today"
        showButton
      />

      <Characteristics
        title="Setting Up a Company With No Regrets"
        points={aboutPoints}
     />

    </div>
  );
};

export default About;
