import Form from "@/components/Form";

const slides = [
  {
    title: "Looking for a Business Consulting firm in Dubai?",
    subtitle: <span>Zahads calculates your business success</span>,
    description:
      "We are a team of experienced business consultants in Dubai, UAE. We provide business setup services, accounting services, VAT services, and other business consulting services in Dubai, UAE.",
    image:
      "https://blog.udemy.com/wp-content/uploads/2014/04/bigstock-Image-of-business-partners-dis-41296537.jpg",
  },
];

const Hero = () => {
  return (
    <div className="flex items-end h-screen bg-secondary w-full justify-center relative">
      <div className="flex md:h-[93vh] h-screen w-full md:w-[95vw] mb-6 md:rounded-[40px] bg-green-500 overflow-hidden relative">
        <div
          className="md:w-[95vw] w-full relative md:h-[93vh] h-screen bg-green-500"
          style={{
            backgroundImage: `url(${slides[0].image})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="flex z-20 items-center justify-between w-full absolute">
            <div className="glass md:h-[93vh] md:max-w-[50vw] px-16">
              <div className="flex flex-col justify-center h-screen md:h-[90vh]">
                <h2 className="text-white mb-4 md:border-b-2 w-fit md:border-primary">
                  Get Business Consulting Services in Dubai
                </h2>
                <h1 className="text-white font-bask md:text-4xl md:leading-[50px] font-bold font-mont mb-3">
                  {slides[0].title}
                </h1>
                <h3 className="text-primary md:text-2xl font-medium">
                  {slides[0].subtitle}!
                </h3>
                <p className="text-white mt-3 text-justify">
                  {slides[0].description}
                </p>
              </div>
            </div>
            <div className="mt-16 md:block hidden mr-16">
              <Form />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
