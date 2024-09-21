"use client";
import React from "react";
import ServiceHero from "../Services/ServiceHero";
import Image from "next/image";
import { GlobeIcon } from "lucide-react";
import Characteristics from "./Characteristics";
import { aboutPoints, team } from "@/data";
import TeamCard from "../Cards/TeamCard";
import aboutUs from "@/assets/accountingServices.webp";
import Hero from "../about/hero";

const About = () => {
  return (
    <div>
      <Hero />

      <Characteristics
        title="Setting Up a Company With No Regrets"
        points={aboutPoints}
      />
    </div>
  );
};

export default About;
