import { FaCheckCircle } from "react-icons/fa";
import {
  FaMoneyBillWave,
  FaCalculator,
  FaSearchDollar,
  FaBuilding,
  FaCog,
  FaShieldAlt,
} from "react-icons/fa";
import Link from "next/link";

const Benefits = () => {
  const benefits = [
    "10 years of residence in the UAE, with the chance to renew.",
    "The terms of the visa extend to your spouse and children (No age limit).",
    "No employer or sponsor is required for application and acceptance.",
    "Security guaranteed; death or other unforeseen circumstances will not affect your family.",
    "Security guaranteed; death or other unforeseen circumstances will not affect your family.",
    "100% ownership of any business started and owned in the UAE.",
  ];

  return (
    <div className="my-20">
      <h2 className="text-3xl font-bold font-mont text-center text-secondary">
        UAE <span className="text-primary"> Golden Visa</span> Benefits
      </h2>
      <div className="flex flex-col items-center">
        <div className="w-2/5 h-1 bg-primary my-1"></div>
        <div className="w-1/3 h-1 bg-secondary"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-10">
        {benefits.map((benefit) => (
          <div
            key={benefit}
            className="border hover:border-none bg-primary text-white transition duration-200 hover:shadow-lg p-5 rounded-2xl text-center"
          >
            <div className="text-secondary mb-2 flex justify-center text-5xl">
              <span className="bg-white rounded-full">
                <FaCheckCircle />
              </span>
            </div>
            <p>{benefit}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;
