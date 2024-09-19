import React from "react";

const Requirements = (
  { title, requirements = [], titleBackground, titleColor }: {
    title: string;
    requirements?: string[];
    titleBackground: string;
    titleColor: string;
  },
) => {
  return (
    <div className="">
      <h3
        className="font-semibold text-lg py-3 px-4 w-full"
        style={{ backgroundColor: titleBackground, color: titleColor }}
      >
        {title}
      </h3>
      <div className="mt-5 text-gray-700 ">
        <ul className="px-5">
          {requirements.map((requirement) => <li className="list-disc">{requirement}</li>)}
        </ul>
      </div>
    </div>
  );
};

export default Requirements;
