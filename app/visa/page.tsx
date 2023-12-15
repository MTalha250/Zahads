import Banner from "@/components/Visa/Banner";
import Benefits from "@/components/Visa/Benefits";
import Eligibility from "@/components/Visa/Eligibility";
import React from "react";

const Visa = () => {
  return (
    <div>
      <Banner />
      <div className="px-8 md:px-16">
        <Benefits />
        <Eligibility />
      </div>
    </div>
  );
};

export default Visa;
