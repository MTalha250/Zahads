import React from "react";

const Note = (
  { title, content, contentBackground }: {
    title: string;
    content: string;
    contentBackground: string;
  },
) => {
  return (
    <div>
      <h1 className="text-2xl font-bold uppercase my-12">{title}</h1>
      <p className="text-gray-700 px-4 py-3" style={{ backgroundColor: contentBackground }}>
        {content}
      </p>
    </div>
  );
};

export default Note;
