import React from "react";
// import Hero from "@/components/Home/Hero";
// import Services from "@/components/Home/Services";
import BusinessSetup from "@/components/Home/BusinessSetup";
// import BusinessSetup2 from "@/components/Home/BusinessSetup2";
// import Partners from "@/components/Home/Partners";
// import Zones from "@/components/Home/Zones";
// import ProcessSteps from "@/components/Home/ProcessSteps";
// import StatsSection from "@/components/Home/Stats";
// import Bloglist from "@/components/Home/Blog";
// import TestimonialsSection from "@/components/Home/Testimonial";
// import FAQSection from "@/components/Home/Faqs";
import Hero from "@/components/Home/HeroOld";
import Introduction from "@/components/Home/IntroductionOld";
import Marquee from "@/components/Home/MarqueeOld";
import Contact from "@/components/Home/ContactOld";
import Faqs from "@/components/Home/FAQsOld";
import About from "@/components/Home/AboutOld";
import Services from "@/components/Home/ServicesOld";
import Choose from "@/components/Home/ChooseOld";
import Slogan from "@/components/slogan";

const page = () => {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Introduction />
      <Choose />
      <BusinessSetup />
      <Marquee />
      <Faqs />
      <Contact />
      <Slogan />

      {/* <Hero />
      <Services />
      <BusinessSetup />
      <BusinessSetup2 />
      <Partners />
      <Zones />
      <ProcessSteps />
      <StatsSection />
      <Bloglist />
      <TestimonialsSection />
      <FAQSection /> */}
    </div>
  );
};

export default page;
