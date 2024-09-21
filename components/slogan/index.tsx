import React from "react";

const Slogan = () => {
  return (
    <div className="px-8 md:px-16 py-20 flex flex-col md:flex-row md:justify-between gap-5 bg-primary">
      <div className="border-l-4 border-black pl-3">
        <h2 className="italic text-4xl font-light">#BeYourOwnBoss</h2>
        <h1 className="text-5xl">Let`s Work Together</h1>
      </div>
      <div>
        <p className="font-light">email</p>
        <h1 className="border-b border-gray-700 text-5xl mt-2">
          info@zahads.com
        </h1>
      </div>
    </div>
  );
};

export default Slogan;
