import Link from "next/link";

const Introduction = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full bg-secondary text-white py-16">
      <h2 className="text-3xl text-center md:px-0 px-10 md:text-4xl font-medium mb-6 font-bask">
        Why Choose <span className=" text-primary italic">Zahads?</span>
      </h2>
      <p className="max-w-2xl text-center mb-8 px-8">
      At Zahads, we provide premier business consultancy and accounting services tailored to the unique needs of the UAE market. Our commitment to excellence and deep local expertise empowers your business to navigate challenges and seize opportunities for growth and success. Trust Zahads for unparalleled professional support in your business journey.
      </p>
      <div className="flex flex-wrap md:mt-0 mt-4 gap-4 justify-center">
        <Link href="/contact">
          <p className="bg-primary hover:bg-white hover:text-primary text-white font-medium py-3 px-6 rounded-full transition duration-300 ease-in-out">
            Get a free quote
          </p>
        </Link>
        <Link href="/services/tax/uae">
          <p className="bg-transparent border border-modern hover:bg-modern text-modern hover:text-white font-medium py-3 px-6 rounded-full transition duration-300 ease-in-out">
            Explore Our Services
          </p>
        </Link>
      </div>
    </section>
  );
};

export default Introduction;
