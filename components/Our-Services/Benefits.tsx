import React from 'react';
import img1 from '@/assets/benefits1.png';
import img2 from '@/assets/benefits2.png';
import img3 from '@/assets/benefits3.png';
import img4 from '@/assets/benefits4.png';

interface BenefitsComponentProps {
  scrollToForm: () => void;
}

const BenefitsComponent: React.FC<BenefitsComponentProps> = ({
  scrollToForm,
}) => {
  return (
    <div className="bg-[#FFFDF5] p-8 lg:p-12 flex flex-col items-center">
      <div className="max-w-screen-xl w-full text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-[#9C810A] mb-8">
        Maximize Your Business Potential with  <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9C810A] to-[#FBCF10]">
          Free Zone Advantages by Zahads
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <div className="flex flex-col items-center">
            <img
              src={img1.src}
              alt="Benefit 1"
              className="w-24 h-auto lg:w-28 lg:h-28"
            />
            <p className="mt-4 text-base lg:text-md">100% foreign ownership</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={img2.src}
              alt="Benefit 2"
              className="w-24 h-auto lg:w-28 lg:h-28"
            />
            <p className="mt-4 text-base lg:text-md">
              Operate in UAE & globally with our <br />
              Instant License
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={img3.src}
              alt="Benefit 3"
              className="w-24 h-auto lg:w-28 lg:h-28"
            />
            <p className="mt-4 text-base lg:text-md">
              2000+ business activities to choose from
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={img4.src}
              alt="Benefit 4"
              className="w-24 h-auto lg:w-28 lg:h-28"
            />
            <p className="mt-4 text-base lg:text-md">
              Upgrade to unlimited visas on flexi-desk
            </p>
          </div>
        </div>

        <div className="mt-12">
          <p className="text-gray-500 text-sm mb-2">*T&Cs Apply</p>
          <button
            onClick={scrollToForm}
            className="py-3 px-10 lg:px-12 bg-gradient-to-r from-[#9C810A] to-[#FBCF10] text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            GET THIS OFFER
          </button>
        </div>
      </div>
    </div>
  );
};

export default BenefitsComponent;
