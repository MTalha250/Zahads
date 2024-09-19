import React from "react";
import FAQItem from "./Item";
import { faqs } from "@/data";
import Image from "next/image";
import { MessageCircleQuestion } from "lucide-react";

const FAQSection: React.FC = () => {
  return (
    <div className="min-h-screen bg-white md:p-16 px-8 py-5 items-center flex flex-col md:px-32">
      <div className="flex items-center justify-center w-16 h-14 bg-primary/10 rounded-md">
        <MessageCircleQuestion size={30} strokeWidth={1.5} className="text-primary" />
      </div>
      <h2 className="md:text-3xl text-xl font-bold text-center max-w-[700px] mt-5">
        FAQS
      </h2>
      <p className="md:text-xl max-w-[780px] text-center font-light mt-3">
        Our team of experts fields common questions from people all over the
        globe about company formation in the UAE.
      </p>
      <div className="container mx-auto md:px-4 px-2 mt-10">
        {faqs.map((faq: any, index: any) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
