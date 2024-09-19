import React from "react";
import ServiceHero from "./ServiceHero";
import ContactForm from "../ContactForm/ContactForm";
import Info from "../Info/Info";
import CTAButton from "../Button/CTAButton";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import Requirements from "../Requirements/Requirements";
import SquareServiceCard from "../ServiceCards/SquareServiceCard";
import Image from "next/image";
import SquareNote from "../Note/SquareNote";
import { ServiceType } from "@/types";
import RoundServiceCard from "../ServiceCards/RoundServiceCard";
import RectangleServiceCard from "../ServiceCards/RectangleServiceCard";
import Marquee from "react-fast-marquee";

const marqueeImgs = [
  "https://bestaxca.com/wp-content/uploads/2023/11/Logo_2.png",
  "https://odoocdn.com/web/image/res.partner/5741164/avatar_1920/Ajman%20Media%20City%20Freezone?unique=31b973b",
  "https://bestaxca.com/wp-content/uploads/2023/11/Logo_6.png",
  "https://bestaxca.com/wp-content/uploads/2023/11/Logo_7.png",
  "https://bestaxca.com/wp-content/uploads/2023/11/Logo_8.png",
  "https://avyanco.com/wp-content/uploads/2023/09/duqe-free-zone.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRALyK7vyDgfnL7OZbSMXqPnP0nmFi0bOL3gQ&s",
  "https://www.emiratesfreezones.com/images/freezones/sharjah-research-technology-and-innovation-park-free-zone.png",
  "https://bestaxca.com/wp-content/uploads/2023/11/Logo_9.png",
]

const Service = ({ service }: { service: ServiceType }) => {
  console.log(service);

  return (
    <div className="">
      {/* Hero */}
      <ServiceHero
        backgroundColor={service.primaryColor}
        buttonText={service.heroButton}
        title={service.heroTitle}
        description={service.heroDescription}
        subtitle={service.title}
        image={service.heroImage}
        showButton
      />

      <div className="md:px-40 px-8 mb-40 mt-20">
        <Breadcrumb
          textColor={"#102448"}
          links={["Home", "Services", service.title]}
          description={service.breadcrumbDescription}
        />

        {service.notes && service.notes.length > 0 &&
          (
            <h1 className="text-2xl font-bold uppercase mt-12">
              MUST KNOW
            </h1>
          )}
        <div
          className={`grid gap-x-10 mt-10 md:gap-y-0 gap-y-5 ${service.notes.length > 1 ? "md:grid-cols-3 grid-cols-1" : "grid-cols-1"
            }`}
        >
          {service.notes && service.notes.length > 0 &&
            service.notes.map((note, idx) => (
              <SquareNote
                content={note.description}
                title={note.title}
                contentBackground={"#10244810"}
              />
            ))}
        </div>
        {service.services && service.services.length > 0 && (
          <h1 className="text-2xl font-bold uppercase my-12">
            OUR {service.title} SERVICES
          </h1>

        )}

        <div
          className={`grid gap-x-10 gap-y-10 mt-10 mb-16 ${service.serviceStyle != "square"
            ? service.serviceStyle == "rounded"
              ? service.serviceOrientation === "row"
                ? "md:grid-cols-1 "
                : "md:grid-cols-3 grid-cols-1"
              : service.serviceOrientation === "column"
                ? "grid-cols-1"
                : "md:grid-cols-3 grid-cols-1"
            : service.serviceOrientation === "row" ? "grid-cols-1" : "md:grid-cols-3 grid-cols-1"
            }`}
        >
          {service.serviceStyle === "rounded"
            ? service?.services?.map((ser, idx) => (
              <RoundServiceCard
                subtitle={ser.description}
                // @ts-ignore
                orientation={service.serviceOrientation}
                titleColor={"#102448"}
                icon={
                  <Image
                    src={ser.icon}
                    alt={ser.title}
                    width={500}
                    height={500}
                    className="w-[500px]"
                  />
                }
                iconBackgroundColor={"#10244810"}
                title={ser.title}
              />
            ))
            : service.serviceStyle == "square"
              ? service.services?.map((ser, idx) => (
                <SquareServiceCard
                  description={ser.description}
                  direction={service.serviceOrientation}
                  orientation="column"
                  icon={
                    <Image
                      src={ser.icon}
                      alt={ser.title}
                      width={500}
                      height={100}
                      className={`${service.serviceOrientation === "row"
                        ? "w-[120px]"
                        : "w-[400px]"
                        }`}
                    />
                  }
                  iconBackgroundColor={"#10244810"}
                  title={ser.title}
                />
              ))
              : service.services?.map((ser, idx) => (
                <RectangleServiceCard
                  description={ser.description}
                  // @ts-ignore
                  direction={service.serviceOrientation}
                  orientation="column"
                  backgroundColor={"#10244810"}
                  icon={
                    <Image
                      src={ser.icon}
                      alt={ser.title}
                      width={500}
                      height={100}
                      className={`${service.serviceOrientation === "row"
                        ? "w-[120px]"
                        : "w-[100px]"
                        }`}
                    />
                  }
                  iconBackgroundColor={"#10244810"}
                  title={ser.title}
                />
              ))}
        </div>
        <div
          className={` mt-12 grid gap-5  ${service.requirements.length > 1 ? "md:grid-cols-2 grid-cols-1" : "grid-cols-1"
            }`}
        >
          {service.requirements && service.requirements.length > 0 &&
            service.requirements.map((req) => (
              <Requirements
                title={req.title}
                titleBackground={"#10244810"}
                titleColor={"#102448"}
                requirements={req.points}
              />
            ))}
        </div>

        {
          service.title == "Freezone Overview" &&

          <div className="w-full border-b py-4">
            <h1 className="text-4xl md:text-5xl text-center text-secondary">
              Freezones
            </h1>
            <br />
            <Marquee className="uppercase text-xl font-light my-3 md:my-5">
              {marqueeImgs.map((img) => (
                <img key={img} src={img} className="w-28 md:w-32 mx-5" />
              ))}
            </Marquee>
          </div>
        }
        <div className="flex md:flex-row flex-col justify-center md:mt-20 mt-10 gap-24">
          <div
            className={`flex flex-col gap-5 
            
            ${service.info && service.info.length > 0 ? "w-full" : "hidden"}
            `}
          >
            {service.info && service.info.length > 0 &&
              service.info.map((info, idx) => (
                <Info
                  description={info.description}
                  title={info.title}
                />
              ))}
          </div>
          <div
            className={`
            ${service.contactForm
                ? service.info && service.info.length > 0 ? "md:w-7/12 w-full" : "md:w-11/12 w-full"
                : "hidden"
              }
            `}
          >
            {service.contactForm &&
              (
                <ContactForm
                  backgroundColor={"#10244810"}
                  buttonColor="#B2913B"
                  title={service.title}
                />
              )}
          </div>
        </div>
        <div
          className={` pt-10`}
        >
          <CTAButton
            backgroundColor={"#B2913B"}
            color="white"
            className="rounded mx-auto font-medium text-lg"
            title="Book your free consultation"
          />
        </div>
      </div>
    </div>
  );
};

export default Service;
