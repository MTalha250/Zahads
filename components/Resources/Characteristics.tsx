import React from "react";
import img1 from "@/assets/about/1.jpg";
import img2 from "@/assets/about/2.jpg";
import img3 from "@/assets/about/3.jpg";
import img4 from "@/assets/about/4.jpg";
import img5 from "@/assets/about/5.jpg";
import img6 from "@/assets/about/6.jpg";
import img7 from "@/assets/about/7.jpg";

const Characteristics = () => {
  return (
    <div className="px-8 md:px-16 py-20 min-h-[70vh] flex items-center justify-center relative">
      <h1 className="max-w-sm text-4xl text-center">
        Setting Up a Company With No Regrets
      </h1>
      <img src={img1.src} alt="about" className="absolute top-0 left-32 w-64" />
      <img
        src={img2.src}
        alt="about"
        className="absolute top-14 right-80 w-64"
      />
      <img src={img3.src} alt="about" className="absolute top-0 right-0 w-64" />
      <img
        src={img4.src}
        alt="about"
        className="absolute top-1/2 -translate-y-1/2 left-0 w-64"
      />
      <img
        src={img5.src}
        alt="about"
        className="absolute bottom-5 left-32 w-64"
      />
      <img
        src={img6.src}
        alt="about"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64"
      />
      <img
        src={img7.src}
        alt="about"
        className="absolute bottom-20 right-20 w-64"
      />
    </div>
  );
};

export default Characteristics;
