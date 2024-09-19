import React from "react";
import Image from "next/image";
import { FileQuestion } from "lucide-react";
import prepDocs from '@/assets/prepDocs.webp'
import bankProcess from '@/assets/bankProcess.webp'
import visaProcess from '@/assets/visaProcess.webp'
import businessLicense from '@/assets/businessLicense.webp'

const ProcessSteps = () => {
  return (
    <div className="min-h-screen bg-white md:p-16 px-8 py-5 items-center flex flex-col md:px-32">
      <div className="flex items-center justify-center w-16 h-14 bg-primary/10 rounded-md">
        <FileQuestion size={30} strokeWidth={1.5} className="text-primary" />
      </div>
      <h2 className="md:text-3xl text-xl font-bold text-center max-w-[700px] mt-5">
        The process of business setup in Dubai
      </h2>
      <p className="md:text-xl max-w-[780px] text-center font-light mt-3">
        With Zahads as your company formation partner, registering a company
        in the UAE is not only easy, but it’s the most cost-effective way to do
        it! In fact, the entire process can take as little as 24 hours! That’s
        right! All you have to do is supply us with the relevant information
        about your company and we do the rest. Here’s our time-tested process:
      </p>
      <div className="max-w-2xl mx-auto mt-12">
        <div className="flex flex-col items-center md:flex-row mb-8">
          <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
            <img
              src={prepDocs.src}
              width={150}
              height={150}
              alt="Prepare Documentation"
              className="rounded-full"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2">
              1. Prepare Documentation
            </h2>
            <p className=" font-light">
              If you’re an overseas entrepreneur starting up in a new country
              for the first time, the documentation process can be daunting. We
              help you to make the right decisions for your Dubai company and
              handle all of the complex paperwork.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center  md:flex-row mb-8">
          <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
            <img
              src={businessLicense.src}
              width={150}
              height={150}
              alt="Business License"
              className="rounded-full"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2">2. Business Licence</h2>
            <p className=" font-light">
              Choosing the right licence and applying for it are essential to
              getting your business setup in Dubai right. Having an in-depth
              understanding of the dos and don’ts around setting up your
              business licence will help you to avoid the common traps we see
              people fall into. For instance, some business categories require
              prior approvals from certain authorities. A company formation
              expert will guide you through the necessary requirements to start
              your business.
            </p>
          </div>
        </div>
        <div className="flex items-center  flex-col md:flex-row mb-8">
          <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
            <img
              src={visaProcess.src}
              width={150}
              height={150}
              alt="Visa Process"
              className="rounded-full"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2">3. Visa Process</h2>
            <p className=" font-light">
              Private companies can obtain new employment entry permits for
              their employees provided they apply for residence visa status
              within 30 days of the employee’s entry into the UAE.
            </p>
          </div>
        </div>
        <div className="flex items-center  flex-col md:flex-row mb-8">
          <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
            <img
              src={bankProcess.src}
              width={150}
              height={150}
              alt="Bank Account"
              className="rounded-full"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2">4. Bank Account</h2>
            <p className=" font-light">
              Setting up a corporate bank account in the UAE can be a little
              arduous for international entrepreneurs. It requires careful
              consideration and there are several boxes to tick to ensure you
              have everything in place before approaching your bank of choice.
            </p>
          </div>
        </div>
        <div className="text-center flex flex-col items-center justify-center gap-4 mt-8">
          <button className="bg-primary/90 text-white py-6 px-8 rounded hover:bg-primary transition duration-300 mr-4">
            About Us
          </button>
          <a href="#" className="text-primary/80">
            Calculate your business setup cost
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProcessSteps;
