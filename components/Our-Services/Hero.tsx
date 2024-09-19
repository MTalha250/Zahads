import React from 'react';
import { User, Clock, FileText } from 'lucide-react';
import img from '@/assets/hero.png';

interface HeroComponentProps {
  scrollToForm: () => void;
}

const HeroComponent: React.FC<HeroComponentProps> = ({ scrollToForm }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between h-screen bg-[#FFFDF5] lg:p-24 p-8 mt-[120px] md:mt-[80px]">
      <div className="text-center md:text-left w-full lg:w-7/12 mx-auto">
        <div className="mb-8">
          <span className="bg-gradient-to-r from-[#FAD322] to-[#FCE685] text-black py-2 px-4 text-2xl rounded-md">
            WHERE <i className="font-bold">ELSE</i>
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl mb-4 leading-snug lg:mb-8">
          CAN YOU GET YOUR BUSINESS LICENSE ISSUED INSTANTLY FOR{' '}
          <span className="text-[#001540] font-semibold">
            <i>AED 6,875 ONLY!</i>
          </span>
        </h1>
        <button
          onClick={scrollToForm}
          className="mt-6 px-14 py-4 bg-black text-white text-lg rounded-full lg:mb-6"
        >
          <i>GET THIS OFFER</i>
        </button>

        <div className="bg-gradient-to-r from-[#FAD322] to-[#FCE685] p-8 mt-6 rounded-lg flex flex-col md:flex-row justify-between items-center text-black space-y-4 md:space-y-0 lg:w-9/12">
          <div className="flex flex-col items-center text-center">
            <User className="text-6xl mb-4" />
            <p className="text-lg leading-tight">
              Unlimited Visas for flexi-desk
            </p>
          </div>
          <div className="hidden md:block border-l border-black h-full self-stretch mx-4"></div>
          <div className="flex flex-col items-center text-center">
            <Clock className="text-6xl mb-4" />
            <p className="text-lg leading-tight">
              Instant business license and visa issuance
            </p>
          </div>
          <div className="hidden md:block border-l border-black h-full self-stretch mx-4"></div>
          <div className="flex flex-col items-center text-center">
            <FileText className="text-6xl mb-4" />
            <p className="text-lg leading-tight">
              Residency issued in 5 working days
            </p>
          </div>
        </div>
      </div>
      <div className="md:w-full lg:w-6/12 p-8 hidden md:block">
        <img
          src={img.src}
          alt="Team Working"
          className="w-full h-[650px] rounded-xl object-cover"
        />
      </div>
    </div>
  );
};

export default HeroComponent;
