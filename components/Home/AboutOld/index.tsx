import Bar from "@/components/Bar";
import img from "@/assets/financial_services.webp";

const About = () => {
  return (
    <div className="w-full flex md:flex-row flex-col justify-between">
      <div className="w-full md:w-1/2 shrink-0 bg-[#F5F9EB] px-8 md:px-16 py-20">
        <h2 className="text-3xl md:text-4xl mt-3 font-mont border-l-4 pl-2 border-primary">
          Welcome to <span className="text-primary">Zahads</span>
        </h2>
        <p className="mt-4 tracking-wider text-gray-500 font-light">
          Welcome to ZAHADS, your gateway to unparalleled financial excellence
          and business success in the vibrant landscape of Dubai. At ZAHADS, we
          don 't just provide services; we craft solutions that transcend
          expectations. Whether you ' re navigating the complexities of
          accounting, seeking strategic tax advice, exploring business
          incorporation, or ensuring compliance with the latest regulations, you
          ' ve arrived at the right destination. Our team of seasoned
          professionals is dedicated to tailoring bespoke strategies that align
          with your unique business aspirations. With a commitment to precision,
          innovation, and unwavering integrity, ZAHADS invites you to embark on
          a journey where success is not just a destination but a continuous
          evolution. Explore the possibilities, discover the expertise, and
          welcome to a realm where your business ambitions find their perfect
          partner.
          <br />
          <br />
          Experience the{" "}
          <strong className="text-primary">Zahads advantage </strong> and let us
          calculate the best opportunities for you.
        </p>
      </div>
      <div className="w-full md:w-1/2 shrink-0 overflow-hidden cursor-pointer">
        <img
          src={img.src}
          className="w-full h-full object-cover"
          alt="financial services"
        />
      </div>
    </div>
  );
};

export default About;
