"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import img from "@/assets/logo.png";
import { accountingTax, businessSetup, resources, services } from "@/data";
import Link from "next/link";
import { ChevronDown, ChevronUp, Menu, X } from "lucide-react";
import { PopupButton } from "@typeform/embed-react";
import { usePathname } from "next/navigation";
import { FaArrowRight } from "react-icons/fa";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [toggleSubMenu, setToggleSubMenu] = useState<string>("");
  const [toggleMenu, setToggleMenu] = useState<string>("");
  const navbarRef = useRef(null);
  const pathName = usePathname();

  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (pathName == "/" && window.scrollY > 600) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleToggleSubMenu(id: string) {
    if (toggleSubMenu === id) {
      setToggleSubMenu("");
    } else {
      setToggleSubMenu(id);
    }
  }

  function handleToggleMenu(id: string) {
    if (toggleMenu === id) {
      setToggleMenu("");
    } else {
      setToggleMenu(id);
    }
  }

  function handleLinkClick() {
    setShowMenu(false);
    setToggleSubMenu("");
    setToggleMenu("");
  }

  return (
    <div
      ref={navbarRef}
      className={`flex w-full py-3 items-center justify-between md:px-24 px-6 bg-white `}
    >
      <Link href={"/"}>
        <Image src={img} alt="logo" width={80} className="w-32" />
      </Link>
      <div className="md:hidden block">
        {showMenu ? (
          <X
            size={24}
            className="text-primary"
            onClick={() => setShowMenu(!showMenu)}
          />
        ) : (
          <Menu
            size={24}
            className="text-primary"
            onClick={() => setShowMenu(!showMenu)}
          />
        )}
        {showMenu && (
          <div className="absolute shadow-md py-5 top-[105px] px-5  left-2.5 z-[999] w-[95vw] mx-auto">
            <div className="flex flex-col gap-2">
              <div
                className="flex flex-row justify-between items-center"
                onClick={() => handleToggleMenu("business-setup")}
              >
                <h4 className="text-sm">Business Setup</h4>
                {toggleMenu == "business-setup" ? (
                  <ChevronUp size={20} />
                ) : (
                  <ChevronDown size={20} />
                )}
              </div>
              {businessSetup.map((item, idx) => (
                <div
                  key={item.id}
                  className={`flex pl-2 flex-col gap-1 ${
                    toggleMenu == "business-setup" ? "block" : "hidden"
                  }`}
                >
                  <div
                    className="flex flex-row justify-between items-center"
                    onClick={() => handleToggleSubMenu(item.id)}
                  >
                    <h4 className="text-sm">{item.title}</h4>
                    {toggleSubMenu == item.id ? (
                      <ChevronUp size={20} />
                    ) : (
                      <ChevronDown size={20} />
                    )}
                  </div>
                  <div
                    className={`flex flex-col gap-1 ${
                      toggleSubMenu == item.id ? "block" : "hidden"
                    }`}
                  >
                    {item.subServices.map((subItem) => (
                      <Link
                        key={subItem.id}
                        href={`/services/${subItem.id}`}
                        onClick={handleLinkClick}
                      >
                        <p className="text-sm pl-4 text-gray-700 hover:text-primary hover:bg-primary/10">
                          {subItem.title}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              {accountingTax.map((item, idx) => (
                <div
                  key={item.id}
                  className={`flex flex-col gap-1 
                    `}
                >
                  <div
                    className="flex flex-row justify-between items-center"
                    onClick={() => handleToggleSubMenu(item.id)}
                  >
                    <h4 className="text-sm">{item.title}</h4>
                    {toggleSubMenu == item.id ? (
                      <ChevronUp size={20} />
                    ) : (
                      <ChevronDown size={20} />
                    )}
                  </div>
                  <div
                    className={`flex flex-col gap-1 ${
                      toggleSubMenu == item.id ? "block" : "hidden"
                    }`}
                  >
                    {item.subservices.map((subItem) => (
                      <Link
                        key={subItem.id}
                        href={`/services/${subItem.id}`}
                        onClick={handleLinkClick}
                      >
                        <p className="text-sm pl-2 text-gray-700 hover:text-primary hover:bg-primary/10">
                          {subItem.title}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              <div
                className="flex flex-row justify-between items-center"
                onClick={() => handleToggleMenu("services")}
              >
                <h4 className="text-sm">Services</h4>
                {toggleMenu == "services" ? (
                  <ChevronUp size={20} />
                ) : (
                  <ChevronDown size={20} />
                )}
              </div>
              {services.map((item, idx) => (
                <div
                  key={item.id}
                  className={`flex pl-2 flex-col gap-1 ${
                    toggleMenu == "services" ? "block" : "hidden"
                  }`}
                >
                  <div
                    className="flex flex-row justify-between items-center"
                    onClick={() => handleToggleSubMenu(item.id)}
                  >
                    <h4 className="text-sm">{item.title}</h4>
                    {toggleSubMenu == item.id ? (
                      <ChevronUp size={20} />
                    ) : (
                      <ChevronDown size={20} />
                    )}
                  </div>
                  <div
                    className={`flex flex-col gap-1 ${
                      toggleSubMenu == item.id ? "block" : "hidden"
                    }`}
                  >
                    {item.subServices.map((subItem) => (
                      <Link
                        key={subItem.id}
                        href={`/services/${subItem.id}`}
                        onClick={handleLinkClick}
                      >
                        <p className="text-sm pl-4 text-gray-700 hover:text-primary hover:bg-primary/10">
                          {subItem.title}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              <div
                className="flex flex-row justify-between items-center"
                onClick={() => handleToggleMenu("resources")}
              >
                <h4 className="text-sm">Resources</h4>
                {toggleMenu == "resources" ? (
                  <ChevronUp size={20} />
                ) : (
                  <ChevronDown size={20} />
                )}
              </div>
              {resources.map((item, idx) => (
                <Link
                  href={`/${item.id}`}
                  key={item.id}
                  className={`flex pl-2 flex-col gap-1 ${
                    toggleMenu == "resources" ? "block" : "hidden"
                  }`}
                  onClick={handleLinkClick}
                >
                  <div className="flex flex-row justify-between items-center">
                    <h4 className="text-sm">{item.title}</h4>
                  </div>
                </Link>
              ))}
              <PopupButton
                id="naqPzEEo"
                className="text-primary py-2 border-2 border-primary px-4 font-medium"
              >
                Cost Calculator
              </PopupButton>
              <Link
                className="w-full"
                href={"/contact"}
                onClick={handleLinkClick}
              >
                <button className="w-full border border-primary bg-primary text-white py-2">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
      <div className="hidden md:flex flex-col items-end">
        <ul className="items-center space-x-2 text-sm flex my-3">
          <li
            className={`border-b hover:border-primary transition duration-300 py-2 ${
              pathName == "/" ? "border-primary" : "border-transparent"
            }`}
          >
            <Link href="/" className="text-black py-2 px-4 text-sm">
              Home
            </Link>
          </li>
          <li
            className={`border-b hover:border-primary transition duration-300 py-2 ${
              pathName == "/media-centre"
                ? "border-primary"
                : "border-transparent"
            }`}
          >
            <Link href="/media-centre" className="text-black py-2 px-4 text-sm">
              Media Centre
            </Link>
          </li>
          <li
            className={`border-b hover:border-primary transition duration-300 py-2 ${
              pathName == "/about" ? "border-primary" : "border-transparent"
            }`}
          >
            <Link href="/about" className="text-black py-2 px-4 text-sm">
              About Us
            </Link>
          </li>
          <li
            className={`border-b hover:border-primary transition duration-300 py-2 ${
              pathName == "/contact" ? "border-primary" : "border-transparent"
            }`}
          >
            <Link href="/contact" className="text-black py-2 px-4 text-sm">
              Contact
            </Link>
          </li>
          <li
            className={`border-b hover:border-primary transition duration-300 py-2 ${
              pathName == "/blogs" ? "border-primary" : "border-transparent"
            }`}
          >
            <Link href="/blogs" className="text-black py-2 px-4 text-sm">
              Blogs
            </Link>
          </li>
        </ul>
        <div className="items-center space-x-2 text-sm flex">
          <div className="relative group">
            <div className="flex flex-row items-center">
              <button
                className={` text-black py-2 px-4 text-sm ${
                  pathName != "/" || (pathName == "/" && hasScrolled)
                    ? "text-black"
                    : "text-black"
                }`}
              >
                Accounting & Tax
              </button>
              <ChevronDown
                size={15}
                className={` group-hover:rotate-180 transition-all ${
                  pathName != "/" || (pathName == "/" && hasScrolled)
                    ? "text-black"
                    : "text-black"
                }`}
              />
            </div>
            <div className="absolute hidden group-hover:block bg-white shadow-lg ">
              <div className="grid grid-cols-1 w-[230px] gap-4 px-2 py-3">
                {accountingTax[0].subservices.map((item) => (
                  <Link
                    key={item.id}
                    href={`/services/${item.id}`}
                    className="block mt-1 text-sm text-gray-700 hover:text-black hover:bg-secondary/5 px-2 py-1"
                    onClick={handleLinkClick}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="relative group">
            <div className="flex gap-2 flex-row items-center justify-between">
              <p
                className={` ${
                  pathName != "/" || (pathName == "/" && hasScrolled)
                    ? "text-black"
                    : "text-black"
                } text-black text-sm`}
              >
                Business Setup
              </p>
              <ChevronDown
                size={15}
                className={` group-hover:rotate-180 transition-all ${
                  pathName != "/" || (pathName == "/" && hasScrolled)
                    ? "text-black"
                    : "text-black"
                }`}
              />
            </div>
            <div
              className="absolute 
             hidden group-hover:block
           bg-white w-[600px] top-5 px-4 py-2 shadow-lg "
            >
              <div className="grid grid-cols-2 gap-4 px-2 py-3">
                <div>
                  <h4 className="font-bold mb-2">Free Zones</h4>
                  <div className="flex flex-col space-y-2">
                    {businessSetup[0].subServices.map((subItem) => (
                      <Link
                        key={subItem.id}
                        href={`/services/${subItem.id}`}
                        className="block mt-1 text-sm text-gray-700 hover:text-black hover:bg-secondary/5 px-2 py-1"
                        onClick={handleLinkClick}
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Mainland</h4>
                  <div className="flex flex-col space-y-2">
                    {businessSetup[1].subServices.map((subItem) => (
                      <Link
                        key={subItem.id}
                        href={`/services/${subItem.id}`}
                        className="block mt-1 text-sm text-gray-700 hover:text-black hover:bg-secondary/5 px-2 py-1"
                        onClick={handleLinkClick}
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative group">
            <div className="flex flex-row justify-between items-center">
              <button
                className={` py-2 px-4 text-sm ${
                  pathName != "/" || (pathName == "/" && hasScrolled)
                    ? "text-black"
                    : "text-v"
                }`}
              >
                Services
              </button>
              <ChevronDown
                size={15}
                className={` group-hover:rotate-180 transition-all ${
                  pathName != "/" || (pathName == "/" && hasScrolled)
                    ? "text-black"
                    : "text-black"
                }`}
              />
            </div>
            <div
              className="absolute ml-[-200px]
             hidden group-hover:block
           bg-white w-[500px] px-4 py-2 shadow-lg"
            >
              <div className="grid grid-cols-2 gap-4 px-2 py-3">
                <div>
                  <h4 className="font-bold mb-2">Essential Services</h4>
                  <div className="flex flex-col space-y-2">
                    {services[0].subServices.map((subItem) => (
                      <Link
                        key={subItem.id}
                        href={`/services/${subItem.id}`}
                        className="block mt-1 text-sm text-gray-700 hover:text-black hover:bg-secondary/5 px-2 py-1"
                        onClick={handleLinkClick}
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                </div>
                {/* <div>
                <h4 className="font-bold mb-2">Operational Services</h4>
                <div className="flex flex-col space-y-2">
                  {services[1].subServices.map((subItem) => (
                    <Link
                      key={subItem.id}
                      href={`/services/${subItem.id}`}
                      className="block mt-1 text-sm text-gray-700 hover:text-secondary hover:bg-secondary/5 px-2 py-1"
                      onClick={handleLinkClick}
                    >
                      {subItem.title}
                    </Link>
                  ))}
                </div>
              </div> */}
                <div>
                  <h4 className="font-bold mb-2">Support Services</h4>
                  <div className="flex flex-col space-y-2">
                    {services[1].subServices.map((subItem) => (
                      <Link
                        key={subItem.id}
                        href={`/services/${subItem.id}`}
                        className="block mt-1 text-sm text-gray-700 hover:text-black hover:bg-secondary/5 px-2 py-1"
                        onClick={handleLinkClick}
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative group">
            <div className="flex flex-row items-center justify-between">
              <button
                className={`${
                  pathName != "/" || (pathName == "/" && hasScrolled)
                    ? "text-black"
                    : "text-black"
                } transition-all py-2 px-4 text-sm `}
              >
                Resources
              </button>
              <ChevronDown
                size={15}
                className={` group-hover:rotate-180 transition-all ${
                  pathName != "/" || (pathName == "/" && hasScrolled)
                    ? "text-black"
                    : "text-black"
                }`}
              />
            </div>
            <div className="absolute hidden group-hover:block bg-white shadow-lg ">
              <div className="flex flex-col gap-2 px-2 py-3 w-[200px]">
                {resources.map((item) => (
                  <Link
                    key={item.id}
                    href={`/${item.id}`}
                    className="block mt-1 text-sm text-gray-700 hover:text-black hover:bg-secondary/5 px-2 py-1"
                    onClick={handleLinkClick}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <PopupButton
            id="ghl54Uga"
            className="text-black bg-[#DFEDC1] py-3 px-4 flex items-center gap-2"
          >
            Cost Calculator <FaArrowRight />
          </PopupButton>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
