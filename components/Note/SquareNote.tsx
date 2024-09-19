import React from "react";

const SquareNote = (
  { title, content, contentBackground }: {
    title?: string;
    content: string;
    contentBackground: string;
  },
) => {
  return (
    <div className="" style={{ backgroundColor: contentBackground }}>
      <p className="text-gray-700 px-4 py-3">
        {title &&
          <span className="text-gray-900 font-medium">{title} </span>}
        {content}
      </p>
    </div>
  );
};

export default SquareNote;
