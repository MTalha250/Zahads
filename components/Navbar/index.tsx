"use client";
import React, { useEffect } from "react";
import { navLinks } from "@/constants";
import { NavigationMenu } from "@/components/ui/navigation-menu";
import logo from "@/assets/logo2.png";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/button";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

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
      className={`px-16 py-3 w-[90vw] relative flex justify-between rounded-full ${
        scrolled ? "bg-white shadow" : ""
      } items-center`}
    >
      <img src={logo.src} alt="logo" className="w-32" />
      <NavigationMenu className="flex gap-5 py-2">
        {navLinks.map((navLink, index) => (
          <Link href={navLink.href} key={index}>
            <p
              className={`cursor-pointer hover:text-primary transition-all ${
                scrolled ? "" : " font-medium text-white"
              }`}
            >
              {navLink.label}
            </p>
          </Link>
        ))}
      </NavigationMenu>
      <Button className="text-white border-primary bg-primary hover:bg-s transition-all">
        Get a Quote
      </Button>
    </div>
  );
};

export default Navbar;
