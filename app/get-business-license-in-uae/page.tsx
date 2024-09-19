'use client';
import React, { useRef } from 'react';
import HeroComponent from '@/components/Our-Services/Hero';
import Form from '@/components/Our-Services/Form';
import BenefitsComponent from '@/components/Our-Services/Benefits';
import BankingPartners from '@/components/Our-Services/BankingPartners';
import NameCheckForm from '@/components/Our-Services/NameCheckForm';

const Page: React.FC = () => {
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <HeroComponent scrollToForm={scrollToForm} />
      <div ref={formRef}>
        <Form />
      </div>
      <BenefitsComponent scrollToForm={scrollToForm} />
      <BankingPartners />
      {/* <NameCheckForm /> */}
    </div>
  );
};

export default Page;
