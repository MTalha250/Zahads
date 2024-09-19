import React from "react";
import { SignpostBig } from "lucide-react";

const Zones = () => {
  return (
    <div className="min-h-screen bg-white md:p-16 px-8 py-5 items-center flex flex-col md:px-32">
      <div className="flex items-center justify-center w-16 h-14 bg-primary/10 rounded-md">
        <SignpostBig size={30} strokeWidth={1.5} className="text-primary" />
      </div>
      <h2 className="md:text-3xl text-xl font-bold text-center max-w-[700px] mt-5">
        What setup option is best for your business?
      </h2>
      <p className="md:text-xl max-w-[780px] text-center font-light mt-3">
        Business setup in Dubai (or anywhere in the UAE) can be complicated.
        Decisions need to be made which can affect your journey and shape your success.
        Jurisdiction? Free zone or mainland?
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10 w-full max-w-[1200px]">
        <div
          style={{
            backgroundImage:
              "url(https://thumbs.dreamstime.com/b/dubai-marina-beauty-view-rooftop-showing-cityscape-boats-sea-view-51444879.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className="relative text-white p-12 rounded-lg"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-primary opacity-70 rounded-lg" />
          <div
            style={{
              position: "relative",
              zIndex: 1,
            }}
            className="flex flex-col "
          >
            <h3 className="text-4xl font-bold mb-4">Free Zones</h3>
            <ul className="list-disc list-inside mb-4">
              <li>Retain 100% ownership of your Dubai company</li>
              <li>0% corporate and income tax rate</li>
              <li>No custom duties</li>
              <li>Option to repatriate 100% of your capital and profits</li>
            </ul>
            <br />
            <button className="bg-white mx-auto text-primary py-3 px-6 rounded hover:bg-gray-200 transition duration-300">
              Find your free zone
            </button>
          </div>
        </div>
        <div
          style={{
            backgroundImage:
              "url(https://cdn.britannica.com/69/156369-050-75E7FD08/skyline-Dubai-United-Arab-Emirates.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className="relative text-white p-12 rounded-lg"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-primary opacity-70 rounded-lg" />
          <div
            style={{
              position: "relative",
              zIndex: 1,
            }}
            className="flex flex-col "
          >
            <h3 className="text-4xl font-bold mb-4">Mainland</h3>
            <ul className="list-disc list-inside mb-4">
              <li>Business activities not limited</li>
              <li>Operate anywhere inside and outside the country</li>
              <li>No limit on number of visas</li>
            </ul>
            <br />
            <button className="bg-white mx-auto text-primary py-3 px-6 rounded hover:bg-gray-200 transition duration-300">
              Mainland Business Setup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Zones;
