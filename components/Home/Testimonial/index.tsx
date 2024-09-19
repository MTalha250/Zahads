import React from "react";
import TestimonialCard from "./Card";
import { testimonials } from "@/data";
import { FaStar } from "react-icons/fa6";
import { Sparkles } from "lucide-react";

const TestimonialsSection: React.FC = () => {
  return (
    <div className="bg-primary/10 md:py-8 px-8 py-5 flex flex-col items-center justify-center">
      <div className="flex items-center mb-4 justify-center w-16 h-14 bg-primary/10 rounded-md">
        <Sparkles size={30} strokeWidth={1.5} className="text-primary" />
      </div>
      <div className="text-center mb-8 flex flex-col items-center justify-center">
        <h2 className="md:text-3xl text-xl font-bold">
          Join 70,000 happy customers
        </h2>
        <p className="text-gray-700 font-light md:text-lg mt-2 max-w-[700px]">
          Make sure you hire the best in the business for your business setup in
          Dubai. With Zahads, you will fast-track your path to business
          success.
        </p>
        <div className="flex md:flex-row flex-col items-center md:gap-0 gap-2 justify-center mt-4">
          <span className="text-yellow-500 text-xl font-semibold">
            EXCELLENT
          </span>
          <span className="ml-2 text-yellow-500">
            <FaStar className="text-yellow-500" />
          </span>
          <span className="ml-2 text-xl font-semibold">1156 reviews on</span>
          <span className="ml-2 text-blue-500 text-xl font-semibold">
            Google
          </span>
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
        {testimonials.map((testimonial: any) => (
          <TestimonialCard
            key={testimonial.id}
            name={testimonial.name}
            date={testimonial.date}
            rating={testimonial.rating}
            text={testimonial.text}
            avatar={testimonial.avatar}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;
