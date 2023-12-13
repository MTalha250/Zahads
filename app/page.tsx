import Hero from "@/components/Home/Hero";
import Introduction from "@/components/Home/Introduction";
import Marquee from "@/components/Home/Marquee";
import Contact from "@/components/Home/Contact";
import Faqs from "@/components/Home/FAQs";
import About from "@/components/Home/About";
import Services from "@/components/Home/Services";
import Choose from "@/components/Home/Choose";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Choose />
      <Introduction />
      <Marquee />
      <Faqs />
      <Contact />
    </div>
  );
}
