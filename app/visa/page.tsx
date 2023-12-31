import Banner from "@/components/Visa/Banner";
import Benefits from "@/components/Visa/Benefits";
import Eligibility from "@/components/Visa/Eligibility";
import Info from "@/components/Visa/Info";
import Process from "@/components/Visa/Process";
import React from "react";

const Visa = () => {
  return (
    <div>
      <Banner />
      <div className="px-8 md:px-16">
        <Benefits />
        <Eligibility />
      </div>
      <Process />
      <Info />
    </div>
  );
};

export default Visa;
