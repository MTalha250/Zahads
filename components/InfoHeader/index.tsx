import React from "react";
import { FaPhone, FaUsers } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";

const InfoHeader = () => {
  return (
    <div className="bg-white">
      <div className="flex w-full bg-primary/10 md:h-[40px] py-2 items-center justify-end md:px-32 px-5 gap-6">
        <a href="tel:+971542019999" className="flex w-auto items-center gap-2">
          <FaPhone className="text-primary md:text-lg text-xs" />
          <span className="md:text-sm text-xs font-light">+971 56 7517147</span>
        </a>
        <a href="https://wa.me/971567517147" className="flex items-center gap-2">
          <IoLogoWhatsapp className="text-green-500 md:text-2xl text-sm" />
          <span className="ms:text-sm text-xs font-light">WhatsApp</span>
        </a>
      </div>
    </div>
  );
};

export default InfoHeader;
