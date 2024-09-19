import React from "react";
import { FaStar } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";

interface TestimonialCardProps {
  name: string;
  date: string;
  rating: number;
  text: string;
  avatar: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  date,
  rating,
  text,
  avatar,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 m-4 w-80">
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-4">
          <FaUser className="text-gray-500" />
        </div>
        <div>
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-sm text-gray-500">{date}</p>
        </div>
      </div>
      <div className="flex items-center mb-4">
        {[...Array(rating)].map((_, i) => (
          <FaStar key={i} className="text-yellow-500" />
        ))}
      </div>
      <p className="text-gray-700 text-sm">{text}</p>
    </div>
  );
};

export default TestimonialCard;
