import React from "react";
import google from '@/assets/google.webp'
import entre from '@/assets/entrepreneur.webp'
import business from '@/assets/business.webp'
import interBusiness from '@/assets/internationBusiness.webp'
import mea from '@/assets/meaMarkets.webp'


const Partners = () => {
  const images = [
    google,
    entre,
    business,
    interBusiness,
    mea
  ];

  return (
    <div className="bg-primary w-full gap-10 py-10 flex md:flex-row flex-col items-center justify-between md:px-32 px-8  md:h-[200px]">
      {images.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt="partner"
          className="md:h-[200px] md:w-[200px] w-[150px] object-contain"
        />
      ))}
    </div>
  );
};

export default Partners;
