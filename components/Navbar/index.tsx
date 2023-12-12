"use client";
import React from "react";
import { navLinks } from "@/constants";
import { NavigationMenu } from "@/components/ui/navigation-menu";
import logo from "@/assets/logo.jpg";

import Link from "next/link";

const Navbar = () => {
  return (
    <div className="px-16 py-3 shadow flex justify-between w-full bg-white items-center">
      <img src={logo.src} alt="logo" className="w-32" />

      <NavigationMenu className="flex gap-5 py-2">
        {navLinks.map((navLink, index) => (
          <Link href={navLink.title} key={index}>
            <p className="cursor-pointer hover:text-primary transition-all">
              {navLink.title}
            </p>
          </Link>
        ))}
      </NavigationMenu>
    </div>
  );
};

export default Navbar;
