import Bar from "@/components/Bar";
import img from "@/assets/financial_services.webp";

const About = () => {
  return (
    <div className="pt-10 w-full flex md:flex-row flex-col justify-between md:gap-14 px-10 md:px-32">
      <div className="md:max-w-[40vw]">
        <Bar />
        <h2 className="text-2xl md:text-3xl mt-3 font-mont font-bold">
          Welcome to{" "}
          <strong className="text-primary font-bask italic">Zahads</strong>
        </h2>
        <p className=" text-justify text-[15px] mt-4">
          Your premier destination for expert financial and business consulting,
          boasting a dominant presence in Dubai. Our service spectrum
          encompasses business establishment in Dubai/UAE, tax guidance, audits,
          accounting & bookkeeping, AML Compliance, VAT procedures, ICV
          certification, stock audits, and holistic corporate tax strategies,
          among others. We are committed to empowering businesses globally,
          driving efficiency, compliance, and profitability. Our seasoned
          professionals stand out for their commitment to excellence and timely
          delivery, ensuring your venture thrives in a competitive market.
          <br />
          <br />
          Experience the <strong className="text-primary italic">
            Zahads
          </strong>{" "}
          advantage and let us calculate the best opportunities for you.
        </p>
      </div>
      <div className="mt-10 h-[340px] rounded-2xl overflow-hidden cursor-pointer">
        <img
          src={img.src}
          className=" transition-all duration-300 hover:scale-110 h-full object-cover"
          alt="financial services"
        />
      </div>
    </div>
  );
};

export default About;
