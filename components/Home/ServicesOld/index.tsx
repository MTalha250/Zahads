import Bar from "@/components/Bar";
import { HiOutlineCode } from "react-icons/hi";
import { LuArrowUpRight } from "react-icons/lu";
import Link from "next/link";

const Services = () => {
  const services = [
    {
      name: "Software Solutions",
      description:
        "Unlocking Potential through Cutting-Edge Software Solutions and Services",
      href: "/services/it-services",
      color: "#8e44ad",
    },
    {
      name: "Accounting Services",
      href: "/services/accounting-services",

      color: "#2980b9",
      description:
        "Beyond the Ledger: Crafting Financial Stories, Fostering Success",
    },
    {
      name: "Tax Advisory",
      href: "/services/tax",
      color: "#f39c12",
      description:
        "Beyond Forms, Beyond Figures: Crafting Your Tax Success Story",
    },
    {
      name: "Compliance Services",
      href: "/services/compliance-services",
      color: "#112548",
      description:
        "Crafting Compliance Fortitude: CBCR, AML, ESR Excellence for Your Peace of Mind",
    },
    {
      name: "Bank Account Opening Services",
      href: "/services/bank-account-opening",
      description: "Discover the latest insights and updates from our experts",
      color: "#fa0544",
      isKnowledgeHub: true,
    },
    {
      name: "Audit & Assurance",
      href: "/services/accounting-services",
      description: "Audit Excellence, Building trust in every number",
      color: "#f7c002",
    },
    {
      name: "Business Setup",
      href: "/services/business-activities",
      color: "#1f9eab",
      description:
        "From Dream to Deed: Crafting your Business Beginnings with Seamless Setup Solutions",
    },
    {
      name: "Golden Visa",
      href: "/services/golden-visa-uae",
      color: "#44bb55",
      description:
        "Join the FORTH SOCIAL, our growing community of entreprenuers",
      bgImg: "",
    },
  ];

  return (
    <div id="services" className="md:px-16 py-20 px-8">
      <h2 className="text-4xl font-mont mb-2 text-center flex justify-center items-center">
        <span className="border-b-4 border-primary pb-2"> Our Services</span>
      </h2>
      <div className="flex flex-col md:flex-row w-full justify-between items-center gap-6">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-6">
          {services.map((service) => (
            <Link
              href={service.href}
              key={service.name}
              className="group cursor-pointer relative w-full h-[300px] flex flex-col justify-end bg-primary p-5 overflow-hidden"
            >
              <div>
                <div className="p-2.5 bg-secondary w-fit mb-3">
                  <HiOutlineCode size={28} className="text-black" />
                </div>
                <h3 className="text-3xl font-light tracking-wide">
                  {service.name.split(" ").map((word, i) => (
                    <span key={i} className="block">
                      {word}
                    </span>
                  ))}
                </h3>
              </div>
              <LuArrowUpRight className="absolute right-5  bottom-5 translate-y-20  group-hover:translate-y-0 text-4xl transition duration-300" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
