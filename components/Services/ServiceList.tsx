import React from "react";
import RoundServiceCard from "../ServiceCards/RoundServiceCard";
import theLaw from "@/assets/theLaw.svg";
import Image from "next/image";

const ServiceList = ({ title }: { title: string }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold uppercase my-12">{title}</h1>
      <div className="grid grid-cols-2 gap-x-20 gap-y-12">
      </div>
    </div>
  );
};

export default ServiceList;
