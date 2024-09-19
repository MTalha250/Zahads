import React from "react";

const Breadcrumb = (
  { links, description, textColor }: { links: string[]; description?: string; textColor: string },
) => {
  console.log(links);
  const myLinks = ["Home", "Corporate Services", "Legal Services"];
  return (
    <div className="flex flex-col gap-5">
      <div className="w-full flex flex-row items-center">
        {links.map((link, index) => (
          <p className="last:text-gray-700 text-sm" style={{ color: textColor }}>
            {link}
            {index < links.length - 1 && <span className="mx-2">{">"}</span>}
          </p>
        ))}
      </div>

      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default Breadcrumb;
