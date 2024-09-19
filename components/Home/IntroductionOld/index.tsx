import Link from "next/link";

const Introduction = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full bg-tertiary text-white px-8 md:px-16 py-32">
      <h2 className="text-3xl text-center md:px-0 px-8 md:text-4xl font-medium mb-6 font-bask">
        Why Choose Zahads?
      </h2>
      <p className="max-w-6xl text-center mb-8 px-8">
        At Zahads, we provide premier business consultancy and accounting
        services tailored to the unique needs of the UAE market. Our commitment
        to excellence and deep local expertise empowers your business to
        navigate challenges and seize opportunities for growth and success.
        Trust Zahads for unparalleled professional support in your business
        journey.
      </p>
      <div className="flex flex-wrap md:mt-0 mt-4 gap-4 justify-center items-center">
        <Link href="/contact">
          <p className="bg-primary text-black py-3 px-6 transition duration-300 ease-in-out">
            Get a free quote
          </p>
        </Link>
        <Link href="#services" className="underline">
          Explore Our Services
        </Link>
      </div>
    </section>
  );
};

export default Introduction;
