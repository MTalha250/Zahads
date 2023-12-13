import Bar from "@/components/Bar";
import {
  FaMoneyBillWave,
  FaCalculator,
  FaSearchDollar,
  FaBuilding,
  FaCog,
  FaShieldAlt,
} from "react-icons/fa";
import Link from "next/link";

const Services = () => {
  const services = [
    {
      name: "Accounting Services",
      description:
        "Expert accounting services for accurate bookkeeping, financial reporting, and regulatory compliance. Make informed decisions with ease...",
      href: "/services/accounting",
      icon: <FaMoneyBillWave size={30} />,
    },
    {
      name: "Tax Consultancy Services",
      href: "/services/tax",
      description:
        "Comprehensive tax consultancy for VAT, corporate tax, and excise tax compliance. Navigate complex regulations with expert guidance...",
      icon: <FaCalculator size={30} />,
    },
    {
      name: "Auditing Services",
      href: "/services/audit",
      description:
        "Professional auditing services to assess financial statements, internal controls, and risk management. Ensure regulatory compliance and valuable insights...",
      icon: <FaSearchDollar size={30} />,
    },
    {
      name: "Business Setup Services",
      href: "/services/business-setup-services",
      description:
        "Company formation in Dubai/UAE. Expert assistance for company formation, licensing, and regulatory processes..",
      icon: <FaBuilding size={30} />,
    },
    {
      name: "Software Solutions",
      href: "/services/software-solutions",
      description:
        "Zoho Authorized Partner offering tailored software implementation, customization, and support. Empower your business with cutting-edge technol..",
      icon: <FaCog size={30} />,
    },
    {
      name: "Compliance Services",
      href: "/services/management-consultancy",
      description:
        "Specialized compliance services for AML, UBO, and ESR regulations. Ensure adherence and minimize risk with expert support...",
      icon: <FaShieldAlt size={30} />,
    },
  ];

  return (
    <div className="md:px-32 mb-10 px-10 mt-10">
      <Bar />
      <br />
      <h2 className="text-3xl font-bold font-mont">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
        {services.map((service) => (
          <Link
            href={service.href}
            key={service.name}
            className="border hover:border-none bg-white transition duration-200 hover:shadow-lg p-5 rounded-lg text-center"
          >
            <div className="mb-4 text-primary flex justify-center">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold mb-3">{service.name}</h3>
            <p>{service.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Services;
