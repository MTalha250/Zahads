import Hero from "@/components/Home/Hero";
import Introduction from "@/components/Home/Introduction";
import Marquee from "@/components/Home/Marquee";
import Contact from "@/components/Home/Contact";
import Faqs from "@/components/Home/FAQs";

export default function Home() {
  return (
    <div>
      <Hero />
      <Marquee />
      <Introduction />
      <Faqs />
      <Contact />
    </div>
  );
}
