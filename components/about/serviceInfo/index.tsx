import React from "react";

interface Service {
  id: number;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    id: 1,
    title: "A higher level of service without the higher costs",
    description:
      "Zahads is known in the market to provide a higher standard of company setup guidance – without higher costs.",
  },
  {
    id: 2,
    title: "A one-stop-shop service",
    description:
      "We offer a concierge service with dedicated account managers. They are available to answer all of your questions and provide full transparency while liaising with UAE government authorities on your behalf.",
  },
  {
    id: 3,
    title: "Better time and cost management",
    description:
      "Your time-investment throughout the setup process? As little as just a few hours. For those looking to check off all the legal boxes of corporate ownership in the UAE while maintaining flexibility when it comes to managing costs, Zahads is your partner.",
  },
  {
    id: 4,
    title: "Contact us for hassle-free company setup",
    description:
      "We provide a free consultation that will help answer every question you may have about setting up a company in the UAE.",
  },
];

const ServiceInfo: React.FC = () => {
  return (
    <div className="bg-[#f3f4f6] py-24 px-8 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-4">
        {services.map((service) => (
          <div
            key={service.id}
            className="text-center md:text-left border-t-2 border-[#556D1E] py-10 px-5 relative"
          >
            <div className="w-14 h-14 bg-[#556D1E] text-lg text-white absolute top-0 -translate-y-1/2 flex items-center justify-center rounded-full left-0">
              0{service.id}
            </div>
            <h3 className="text-lg mb-2">{service.title}</h3>
            <p className="text-gray-600 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceInfo;
