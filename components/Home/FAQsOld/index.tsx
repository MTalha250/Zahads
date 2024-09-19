import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import img from "@/assets/faqs.webp";
const Faqs = () => {
  const faq = [
    {
      trigger: "What services does Zahads offer?",
      text: "Zahads offers a range of services including business consultancy, accounting, financial planning, and tax advisory tailored to the unique needs of the UAE market.",
    },
    {
      trigger: "How can Zahads help my business grow?",
      text: "Our expert team provides strategic insights, financial planning, and market analysis to help your business identify growth opportunities and optimize operations in the UAE's dynamic market.",
    },
    {
      trigger: "What makes Zahads different from other consultancy firms?",
      text: "Zahads stands out for its deep understanding of the UAE's business environment, personalized client approach, and a team of seasoned professionals committed to your business's success.",
    },
    {
      trigger: "Can Zahads assist with international business expansion?",
      text: "Yes, we specialize in assisting businesses with international expansion, offering guidance on cross-border financial strategies, compliance, and market entry.",
    },
    {
      trigger: "Can Zahads handle complex tax filing?",
      text: "Yes, our tax specialists are well-versed in UAE tax laws, ensuring accurate and optimized tax filing for businesses of all sizes.",
    },
    {
      trigger: "What accounting services does Zahads provide?",
      text: "We offer comprehensive accounting services including bookkeeping, financial reporting, and budgeting to support your business's financial health.",
    },
    {
      trigger: "Does Zahads offer audit services?",
      text: "Our audit services provide thorough financial analysis to improve your business's operational efficiency and ensure regulatory compliance.",
    },
  ];

  return (
    <div className="w-full py-20 px-8 md:px-16 flex flex-col items-center">
      <h1 className="text-4xl text-center">
        <span className="border-b-4 border-primary pb-2">FAQs</span>
      </h1>
      <div className="w-full max-w-3xl text-sm md:text-base mt-10">
        <Accordion type="single" collapsible className="w-full">
          {faq.map((a, i) => (
            <AccordionItem
              key={a.trigger}
              value={`item-${i}`}
              className="my-2 px-6 rounded-lg justify-start border border-black bg-[#FAFAFA]"
            >
              <AccordionTrigger className="font-light text-xl">
                {a.trigger}
              </AccordionTrigger>
              <AccordionContent className="font-light">
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
