import React from 'react';

const StatsSection: React.FC = () => {
  return (
    <div className="relative bg-cover bg-center bg-no-repeat md:h-80 md:py-0 py-10" style={{ backgroundImage: "url('https://static.vecteezy.com/system/resources/thumbnails/014/440/262/small/dubai-city-skyline-silhouette-illustration-free-vector.jpg')" }}>
      <div className="absolute inset-0 bg-gradient-to-t from-black to-primary"></div>
      <div className="relative flex md:flex-row md:gap-0 gap-10 flex-col justify-around items-center h-full text-white">
        <div className="text-center">
          <h2 className="md:text-7xl text-5xl font-light">14</h2>
          <p className="md:text-xl mt-3">Years in business</p>
        </div>
        <div className="text-center">
        <h2 className="md:text-7xl text-5xl font-light">150</h2>
          <p className="md:text-xl mt-3">Team Members</p>
        </div>
        <div className="text-center">
          <h2 className="md:text-7xl text-5xl font-light">70,000+</h2>
          <p className="md:text-xl mt-3">Happy Customers</p>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;