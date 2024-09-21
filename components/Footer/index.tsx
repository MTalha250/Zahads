// Footer.tsx
import React from "react";
import logo from "@/assets/logoWhite.png";
import { FaLocationDot } from "react-icons/fa6";
import {
  FaLinkedin,
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-tertiary  text-gray-300 py-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-5">
          <div className="w-full px-6 mb-8 md:mb-0 col-span-2">
            <img src={logo.src} alt="logo" className="w-56 mb-4" />
            <p className="mb-2">Business Setup in Dubai</p>
            <p>Office 751, Tamani Arts Offices, Business Bay, Dubai </p>
            <a
              href="https://maps.google.com"
              className="bg-secondary mt-5 text-black p-3 flex items-center w-fit gap-2"
            >
              <FaLocationDot className="text-xl" />
              Open in Google Maps
            </a>
            <div className="flex justify-start space-x-4 mt-5">
              <a href="" className="border rounded-full p-2 ">
                <FaLinkedin className="text-xl  cursor-pointer" />
              </a>
              <a href="" className="border rounded-full p-2 ">
                <FaWhatsapp className="text-xl  cursor-pointer" />
              </a>
              <a href="" className="border rounded-full p-2 ">
                <FaInstagram className="text-xl  cursor-pointer" />
              </a>
              <a href="" className="border rounded-full p-2 ">
                <FaFacebook className="text-xl  cursor-pointer" />
              </a>
            </div>
          </div>
          <div className="w-full px-6 mb-8 md:mb-0">
            <h2 className="text-secondary  mb-4">FREE ZONES</h2>
            <ul>
              <li className="mb-2 hover:text-primary group">
                <a
                  href="/services/freezone-overview"
                  className="group-hover:translate-x-5 inline-block transition duration-300"
                >
                  Overview
                </a>
              </li>
              <li className="mb-2 hover:text-primary group">
                <a
                  href="/services/business-activities"
                  className="group-hover:translate-x-5 inline-block transition duration-300"
                >
                  Business Activities
                </a>
              </li>
              <li className="mb-2 hover:text-primary group">
                <a
                  href="/services/freezone-license"
                  className="group-hover:translate-x-5 inline-block transition duration-300"
                >
                  Free Zone License Locations and Pricing
                </a>
              </li>
              <li className="mb-2 hover:text-primary group">
                <a
                  href="/services/uae-residence-visa"
                  className="group-hover:translate-x-5 inline-block transition duration-300"
                >
                  UAE Visas
                </a>
              </li>
              <li className="mb-2 hover:text-primary group">
                <a
                  href="/services/registration-process"
                  className="group-hover:translate-x-5 inline-block transition duration-300"
                >
                  Registration Process
                </a>
              </li>
              <li className="mb-2 hover:text-primary group">
                <a
                  href="/services/our-solution"
                  className="group-hover:translate-x-5 inline-block transition duration-300"
                >
                  Our solution
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full px-6 mb-8 md:mb-0">
            <h2 className="text-secondary  mb-4">MAINLAND</h2>
            <ul>
              <li className="mb-2 hover:text-primary group">
                <a
                  href="/services/mainland-overview"
                  className="group-hover:translate-x-5 inline-block transition duration-300"
                >
                  Overview
                </a>
              </li>
              <li className="mb-2 hover:text-primary group">
                <a
                  href="/services/sponsorship"
                  className="group-hover:translate-x-5 inline-block transition duration-300"
                >
                  Sponsorship
                </a>
              </li>
              <li className="mb-2 hover:text-primary group">
                <a
                  href="/services/dubai-mainland-license"
                  className="group-hover:translate-x-5 inline-block transition duration-300"
                >
                  Dubai Mainland Licence
                </a>
              </li>
              <li className="mb-2 hover:text-primary group">
                <a
                  href="/services/mainland-visas"
                  className="group-hover:translate-x-5 inline-block transition duration-300"
                >
                  Mainland Visas
                </a>
              </li>
              <li className="mb-2 hover:text-primary group">
                <a
                  href="/services/business-activities"
                  className="group-hover:translate-x-5 inline-block transition duration-300"
                >
                  Mainland Activities
                </a>
              </li>
              {/*  <li className="mb-2 hover:text-primary group"><a href="/services/" className="group-hover:translate-x-5 inline-block transition duration-300">VirtuFit</a></li> */}
            </ul>
          </div>
          <div className="w-full px-6 mb-8 md:mb-0">
            <h2 className="text-secondary  mb-4">SUPPORT</h2>
            <ul>
              <li className="mb-2 hover:text-primary group">
                <a
                  href="/contact"
                  className="group-hover:translate-x-5 inline-block transition duration-300"
                >
                  Support Services
                </a>
              </li>
              <li className="mb-2 hover:text-primary group">
                <a
                  href="/faq"
                  className="group-hover:translate-x-5 inline-block transition duration-300"
                >
                  FAQs
                </a>
              </li>
              <li className="mb-2 hover:text-primary group">
                <a
                  href="/guides"
                  className="group-hover:translate-x-5 inline-block transition duration-300"
                >
                  Setup Guides
                </a>
              </li>
              <li className="mb-2 hover:text-primary group">
                <a
                  href="/partners"
                  className="group-hover:translate-x-5 inline-block transition duration-300"
                >
                  Our Partners
                </a>
              </li>
              <li className="mb-2 hover:text-primary group">
                <a
                  href="#"
                  className="group-hover:translate-x-5 inline-block transition duration-300"
                >
                  Citizenship & Residency
                </a>
              </li>
              {/*  <li className="mb-2 hover:text-primary group"><a href="#" className="group-hover:translate-x-5 inline-block transition duration-300">Stand Together UAE</a></li> */}
            </ul>
          </div>
          <div className="w-full px-6">
            <h2 className="text-secondary  mb-4">RESOURCES</h2>
            <ul>
              <li className="mb-2 hover:text-primary group">
                <a
                  href="/about"
                  className="group-hover:translate-x-5 inline-block transition duration-300"
                >
                  About
                </a>
              </li>
              <li className="mb-2 hover:text-primary group">
                <a
                  href="/faq"
                  className="group-hover:translate-x-5 inline-block transition duration-300"
                >
                  FAQs
                </a>
              </li>
              <li className="mb-2 hover:text-primary group">
                <a
                  href="/partners"
                  className="group-hover:translate-x-5 inline-block transition duration-300"
                >
                  Our Partners
                </a>
              </li>
              <li className="mb-2 hover:text-primary group">
                <a
                  href="/start-a-business"
                  className="group-hover:translate-x-5 inline-block transition duration-300"
                >
                  How to Start a Business in Dubai
                </a>
              </li>
              <li className="mb-2 hover:text-primary group">
                <a
                  href="/get-a-trade-license"
                  className="group-hover:translate-x-5 inline-block transition duration-300"
                >
                  Trade License Dubai
                </a>
              </li>
              <li className="mb-2 hover:text-primary group">
                <a
                  href="/guides"
                  className="group-hover:translate-x-5 inline-block transition duration-300"
                >
                  Free UAE Setup Guides
                </a>
              </li>
              <li className="mb-2 hover:text-primary group">
                <a
                  href="/get-business-license-in-uae"
                  className="group-hover:translate-x-5 inline-block transition duration-300"
                >
                  Get Business License in UAE
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t mt-8 pt-8 flex flex-wrap justify-between">
          <p className="pl-20">Copyright © 2024 Zahads. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
