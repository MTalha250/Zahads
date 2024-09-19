import React from "react";
import { servicesSection } from "@/data";
import Link from "next/link";

const Services = () => {
  return (
    <div className="min-h-screen bg-primary/10 md:p-16 px-8 py-5 items-center flex flex-col">
      <h2 className="md:text-3xl text-xl font-bold text-center text-primary max-w-[600px]">
        Already own a business?
      </h2>
      <p className="md:text-xl text-lg text-center font-medium mt-3">
        Simplify your operations with our end-to-end suite of corporate services
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 w-full max-w-[1200px] mx-auto">
        {servicesSection.map((service) => (
          <Link
            href={`/services/${service.title.toLowerCase().replace(/\s/g, "-")}`}
            key={service.title}
            className="p-5 border border-gray-200 hover:border-primary rounded-lg shadow-sm bg-white hover:bg-fuchsia-50 transition-all duration-200 cursor-pointer"
          >
            <div className="flex mb-4 flex-col">
              <h2 className="text-lg mt-3 font-bold">{service.title}</h2>
            </div>
            <p className="text-gray-600 text-sm">{service.description}</p>
            <a className="text-primary mt-4 inline-block">
              {service.link}
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Services;
