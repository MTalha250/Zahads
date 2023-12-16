import React from "react";

const Process = () => {
  return (
    <div className="my-10 p-8 md:px-16 flex flex-col md:flex-row bg-secondary text-white items-center">
      <div className="w-full md:w-1/2 md:px-10">
        <h1 className="font-bold text-2xl md:text-3xl">
          How To Apply For UAE Golden Visa With{" "}
          <span className="font-bask text-primary italic">
            {" "}
            Zahads Corporate Services.
          </span>
        </h1>
      </div>
      <div className="w-full md:w-1/2 text-justify">
        <div className="my-5">
          <h2 className="font-bold text-xl text-primary font-bask">
            Eligibility Assessment
          </h2>
          <p className="my-2 text-sm">
            The first step in applying for the Golden UAE Visa is a thorough
            assessment of your personal and professional profile to ensure that
            it meets the requirements involved.
          </p>
        </div>
        <div className="my-5">
          <h2 className="font-bold text-xl text-primary font-bask">
            Documentation Process
          </h2>
          <p className="my-2 text-sm">
            Once your profile matches the basic criteria for eligibility, our
            team will walk you through the collection and submission of all
            required documents.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Process;
