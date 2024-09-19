"use client";
import React, { useState } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4">
      <button
        className="w-full font-medium text-left bg-primary text-white py-3 px-4 rounded-md focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
        <span className="float-right">{isOpen ? "-" : "+"}</span>
      </button>
      {isOpen && (
        <div className="bg-white p-4 rounded-md shadow-md mt-2">
          <p className="text-gray-800">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FAQItem;
