"use client";
import { useState } from "react";
import Bar from "@/components/Bar";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import {
  FaHandHoldingUsd,
  FaChartPie,
  FaCreditCard,
  FaLandmark,
} from "react-icons/fa";

const Choose = () => {
  const [hasCountedCompanies, setHasCountedCompanies] = useState(false);
  const [hasCountedProjects, setHasCountedProjects] = useState(false);
  const [hasCountedTeam, setHasCountedTeam] = useState(false);
  const [hasCountedSatisfaction, setHasCountedSatisfaction] = useState(false);

  return (
    <div className="md:px-32 mb-10 px-10">
      <Bar />
      <br />
      <h2 className="text-3xl font-bold font-mont">Why Choose Us?</h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mt-10">
        <div className="flex flex-col relative items-center rounded-lg p-5 ">
          <div className="flex flex-col items-center">
            <FaHandHoldingUsd className="text-primary" size={40} />
            <h3 className="text-xl font-bold mt-3">Companies Partnered</h3>
          </div>
          <div className="flex flex-col items-center">
            <VisibilitySensor
              partialVisibility
              offset={{ top: 10 }}
              delayedCall
              onChange={(isVisible: any) => {
                if (isVisible) setHasCountedCompanies(true);
              }}
              active={!hasCountedCompanies} // This will make sure VisibilitySensor becomes inactive after first count
            >
              {({ isVisible }: { isVisible: any }) => (
                <h3 className="text-[25px] font-bold ">
                  <CountUp end={isVisible ? 239 : 0} duration={3} />+
                </h3>
              )}
            </VisibilitySensor>
          </div>
        </div>

        <div className="flex flex-col items-center p-5 rounded-lg ">
          <FaChartPie size={40} className="text-primary" />
          <h3 className="text-xl font-bold mt-3">Projects Completed</h3>
          <div className="flex flex-col items-center">
            <VisibilitySensor
              partialVisibility
              offset={{ top: 10 }}
              delayedCall
              onChange={(isVisible: any) => {
                if (isVisible) setHasCountedProjects(true);
              }}
              active={!hasCountedProjects} // This will make sure VisibilitySensor becomes inactive after first count
            >
              {({ isVisible }: { isVisible: any }) => (
                <h3 className="text-[25px] font-bold ">
                  <CountUp end={isVisible ? 122 : 0} duration={3} />+
                </h3>
              )}
            </VisibilitySensor>
          </div>
        </div>

        <div className="flex flex-col items-center p-5 rounded-lg">
          <FaCreditCard size={40} className="text-primary" />
          <h3 className="text-xl font-bold mt-3">Certified team: </h3>
          <div className="flex flex-col items-center">
            <VisibilitySensor
              partialVisibility
              offset={{ top: 10 }}
              delayedCall
              onChange={(isVisible: any) => {
                if (isVisible) setHasCountedTeam(true);
              }}
              active={!hasCountedTeam} // This will make sure VisibilitySensor becomes inactive after first count
            >
              {({ isVisible }: { isVisible: any }) => (
                <h3 className="text-[25px] font-bold ">
                  <CountUp end={isVisible ? 43 : 0} duration={3} />+
                </h3>
              )}
            </VisibilitySensor>
          </div>
        </div>

        <div className="flex flex-col items-center p-5 rounded-lg">
          <FaLandmark size={40} className="text-primary" />
          <h3 className="text-xl font-bold mt-3">Satisfaction Rate</h3>
          <div className="flex flex-col items-center">
            <VisibilitySensor
              partialVisibility
              offset={{ top: 10 }}
              delayedCall
              onChange={(isVisible: any) => {
                if (isVisible) setHasCountedSatisfaction(true);
              }}
              active={!hasCountedSatisfaction} // This will make sure VisibilitySensor becomes inactive after first count
            >
              {({ isVisible }: { isVisible: any }) => (
                <h3 className="text-[25px] font-bold text-primary">
                  <CountUp end={isVisible ? 99 : 0} duration={3} />%
                </h3>
              )}
            </VisibilitySensor>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
