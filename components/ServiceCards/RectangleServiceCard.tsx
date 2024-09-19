import React, { ReactNode } from "react";

const RectangleServiceCard = (
  {
    title,
    description,
    icon,
    iconBackgroundColor,
    backgroundColor,
    direction = "row",
    orientation = "row",
  }: {
    title: string;
    description: string;
    direction: "row" | "column";
    orientation: "row" | "column";
    icon: ReactNode;
    iconBackgroundColor: string;
    backgroundColor: string;
  },
) => {
  return (
    <div
      className="flex flex-row gap-2 py-2 px-5 items-center justify-center"
      style={{ backgroundColor: backgroundColor }}
    >
      <div
        className="flex w-1/4 flex-row justify-center rounded-full items-center"
        style={{ backgroundColor: iconBackgroundColor }}
      >
        {icon}
      </div>
      <div className="w-full">
        <h3 className="font-semibold text-sm">{title}</h3>
        <p className="text-gray-700 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default RectangleServiceCard;
