"use client";
import Service from "@/components/Services/Service";
import React from "react";
import { servicesSection } from "@/data";
import { useParams } from "next/navigation";

const page = () => {
  const { service } = useParams();
  //   @ts-ignore
  const serviceTitle = service.replace(/-/g, " ").toLowerCase();
  console.log(serviceTitle);

  return (
    <div>
      <Service
        //   @ts-ignore
        service={servicesSection.find((service) =>
          service.title.toLowerCase() == serviceTitle
        )}
      />
    </div>
  );
};

export default page;
