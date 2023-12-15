"use client";
import React, { useEffect } from "react";
import { navLinks } from "@/constants";
import { BiSolidChevronDown } from "react-icons/bi";
import logo from "@/assets/logo2.png";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(-1);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={
        pathname != "/" || scrolled
          ? "bg-white text-black shadow-xl px-8 md:px-16 py-3 w-[95%] relative flex items-center justify-between rounded-full"
          : "text-white px-8 md:px-16 py-3 w-[95%] relative flex justify-between rounded-full items-center"
      }
    >
      <Link href="/">
        <img src={logo.src} alt="logo" className="w-28 md:w-32" />
      </Link>
      <div className="text-sm items-center justify-center gap-5 md:flex hidden">
        {navLinks.map((link, index) => (
          <div
            key={index}
            onMouseEnter={() => setActiveDropdown(index)}
            onMouseLeave={() => setActiveDropdown(-1)}
            className="relative"
          >
            <Link href={link.href} className="flex items-center">
              {link.label}
              {link.children && (
                <BiSolidChevronDown className="inline-block ml-1" />
              )}
            </Link>
            {link.children && activeDropdown === index && (
              <div className="text-black absolute top-full left-[-10px] bg-white p-2 border w-[250px] rounded shadow-lg">
                {link.children.map((child, childIndex) => (
                  <Link
                    key={childIndex}
                    href={child.href}
                    className="block p-2 text-sm hover:bg-gray-200"
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <Link
        href="/contact"
        className="py-2 px-5 rounded-full text-white border-primary bg-primary hover:bg-s transition-all"
      >
        Contact Us
      </Link>
    </div>
  );
};

export default Navbar;
