import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import img from "@/assets/faq.png";
const Faqs = () => {
  const faq = [
    {
      trigger: "How can I track my order?",
      text: "Once your order has been shipped, you will receive an email with the tracking information and a link to track your order.",
    },
    {
      trigger: "What payment methods do you accept?",
      text: "We accept Visa, Mastercard, American Express, PayPal, and various other payment methods. You can see the full list of accepted payment methods during the checkout process.",
    },
    {
      trigger: "Can I return or exchange an item?",
      text: "Yes, we have a hassle-free return and exchange policy. Please visit our Returns & Exchanges page for more information on how to initiate a return or exchange.",
    },
    {
      trigger: "How long will it take to receive my order?",
      text: "Delivery times vary depending on your location and the shipping method chosen. Generally, orders are processed within 1-2 business days. Once shipped, the estimated delivery time will be provided in the shipping confirmation email.",
    },
    {
      trigger: "Do you offer international shipping?",
      text: "Yes, we offer international shipping to many countries. During checkout, you can enter your address to see if we deliver to your location and view the shipping costs.",
    },
    {
      trigger: "How can I change or cancel my order?",
      text: "Please contact our customer service as soon as possible if you need to change or cancel your order. Orders that have already been shipped cannot be changed or canceled but can be returned following our return policy.",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row w-full lg:py-10 px-16">
      <div className="w-1/2 pr-5 md:pr-10">
        <h1 className="font-semibold font-bask text-primary mb-3 lg:mb-5 text-3xl lg:text-5xl 2xl:text-6xl">
          FAQs
        </h1>
        <p className="font-extralight text-justify lg:text-lg 2xl:text-2xl">
          To make the most informed decision for your business, we have answered
          some of the most common questions.
        </p>
        <img src={img.src} alt="" className="p-10" />
      </div>
      <div className="w-1/2 p-5">
        <Accordion type="single" collapsible className="w-full">
          {faq.map((a, i) => (
            <AccordionItem key={a.trigger} value={`item-${i}`} className="my-2">
              <AccordionTrigger className="px-6 rounded-lg justify-start bg-gray-200 hover:bg-primary hover:text-white transition duration-300">
                {a.trigger}
              </AccordionTrigger>
              <AccordionContent className="p-2 bg-white font-extralight text-md 2xl:text-xl">
                {a.text}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default Faqs;
