"use client";
import { data } from "@/constants";
import { useEffect } from "react";
import AssessmentForm from "@/components/Services";
import Link from "next/link";
interface Props {
  params: { slug: string[] };
}
const Services = ({ params }: Props) => {
  const { slug } = params;
  //@ts-ignore
  let matchedService = data.services.find((s) => s.href.includes(slug[0]));

  // If the service doesn't exist, show 'Service not found!'
  if (!matchedService) {
    return <div>Service not found!</div>;
  }

  // If subservice is defined, find the matching subservice
  if (slug[1]) {
    let ind = matchedService.children.findIndex((s) =>
      s.href.includes(slug[1])
    );
    if (ind === -1) {
      return;
    }
    //@ts-ignore
    matchedService = matchedService.children[ind];

    // If the subservice doesn't exist, show 'Subservice not found!'
    if (!matchedService) {
      return <div>Subservice not found!</div>;
    }
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug[0], slug[1]]);

  return (
    <div className="bg-gray-100 md:pl-32 px-8">
      <div className="pt-36 md:pt-48 pb-10 md:text-justify min-h-screen flex md:flex-row flex-col w-full gap-10 relative">
        <div className="max-w-[90] md:max-w-[65%]">
          <h2 className="text-3xl font-bold">{matchedService.label}:</h2>
          <div
            className="content text-justify"
            dangerouslySetInnerHTML={{ __html: matchedService.content }}
          />
        </div>
        <div className="md:w-[25%] bg-white h-fit p-7 rounded-2xl">
          <h2 className="mb-5 font-semibold text-xl">Get free Assessement</h2>
          <AssessmentForm />
        </div>
      </div>
      {!slug[1] && matchedService.children.length > 0 && (
        <h2 className="mb-6 text-xl font-medium">Explore more:</h2>
      )}
      <div className="flex flex-wrap gap-4 pb-10">
        {!slug[1] &&
          matchedService.children.length > 0 &&
          matchedService.children.map((service: any, i: any) => {
            return (
              <Link
                href={service.href}
                className="bg-white p-3 whitespace-nowrap rounded-lg cursor-pointer hover:border-green-500 hover:bg-gray-50 transition-all duration-200 border"
                key={i}
              >
                {service.label}
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default Services;
