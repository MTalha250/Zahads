import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";

const WhatsApp = () => {
  return (
    <a
      className="shadow-[0_0_25px_#7a7a7a] fixed bottom-5 md:bottom-4 left-2.5 md:left-8 bg-primary p-2.5 rounded-full"
      href="https://wa.me/971507114383"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        zIndex: 1000,
      }}
    >
      <IoLogoWhatsapp className="text-5xl text-white" />
    </a>
  );
};

export default WhatsApp;
