import React, { ReactNode } from "react";

const SquareServiceCard = (
  {
    title,
    description,
    icon,
    iconBackgroundColor,
    direction = "row",
    orientation = "row",
  }: {
    title: string;
    description: string;
    icon: ReactNode;
    iconBackgroundColor: string;
    orientation?: "row" | "column";
    direction?: "row" | "column";
  },
) => {
  return (
    <div
      className="flex items-start gap-5 "
      style={{ flexDirection: direction }}
    >
      <div
        className={`flex flex-row justify-center items-start p-10 ${
          orientation == "row" ? "w-1/3" : "w-full"
        }`}
        style={{ backgroundColor: iconBackgroundColor }}
      >
        {icon}
      </div>
      <div className="w-full">
        <h3
          className="font-semibold text-lg"
          style={{ marginTop: direction == "row" ? 0 : 10 }}
        >
          {title}
        </h3>
        <p className="text-gray-700 mt-2">{description}</p>
      </div>
    </div>
  );
};

export default SquareServiceCard;
