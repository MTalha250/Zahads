import React from "react";

const CTAButton = (
  { backgroundColor, title, color, className }: {
    backgroundColor: string;
    className: string;
    title: string;
    color: string;
  },
) => {
  return (
    <button
      className={"px-10 py-5" + " " + className}
      style={{ backgroundColor: backgroundColor, color: color }}
    >
      {title}
    </button>
  );
};

export default CTAButton;
