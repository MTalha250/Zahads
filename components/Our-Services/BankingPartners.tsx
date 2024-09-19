import React from 'react';
import img from '@/assets/banking.png';
import img1 from '@/assets/imagebackground.png';

const BankingPartners: React.FC = () => {
  return (
    <div className="bg-[#FFFDF5] py-12 flex flex-col items-center">
      <div className="w-full max-w-screen-xl text-center px-4 lg:px-0">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-[#B2930C] mb-8">
            Banking Partners
          </h2>
          <img
            src={img.src}
            alt="Banking Partner Logos"
            className="w-full h-auto object-contain"
          />
        </div>

        <div className="bg-[#FFFDF5] py-8 flex flex-col items-center">
          <h2 className="text-2xl font-semibold text-[#B2930C] mb-6">
            Get your Business License at a cost-effective price of AED 6,875
          </h2>
          <div className="w-full flex justify-center">
            <img
              src={img1.src}
              alt="Get Your Business License"
              className="w-full max-w-sm h-auto object-contain rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankingPartners;
