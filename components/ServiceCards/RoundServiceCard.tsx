import React, { ReactNode } from "react";

const RoundServiceCard = (
  { title, subtitle, icon, titleColor, iconBackgroundColor, orientation = "row"}: {
    titleColor: string;
    orientation: "row" | "column";
    title: string;
    subtitle: string;
    icon: ReactNode;
    iconBackgroundColor?: string;
  },
) => {
  return (
    <div className="flex flex-row items-start  justify-center gap-5">
      <div
        className={`rounded-full  ${
          orientation == "row" ? "w-[50px]" : "w-1/3"
        }`}
      >
        {icon}
      </div>
      <div className="flex flex-col gap-3 w-full">
        <h2 className="text-2xl font-semibold" style={{ color: titleColor }}>
          {title}
        </h2>
        <p className=" text-gray-600">{subtitle}</p>
      </div>
    </div>
  );
};

export default RoundServiceCard;
