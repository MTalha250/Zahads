"use client";
import React from "react";
import Characteristics from "./Characteristics";
import Hero from "../about/hero";
import ServiceInfo from "../about/serviceInfo";
import Slogan from "../slogan";

const About = () => {
  return (
    <div>
      <Hero />
      <Characteristics />
      <ServiceInfo />
      <Slogan />
    </div>
  );
};

export default About;
