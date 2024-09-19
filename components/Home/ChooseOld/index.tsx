"use client";
import { useState } from "react";
import Bar from "@/components/Bar";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { CiFaceSmile } from "react-icons/ci";
import { LiaBullseyeSolid } from "react-icons/lia";
import { LiaHandshake } from "react-icons/lia";

const Choose = () => {
  const [hasCountedCompanies, setHasCountedCompanies] = useState(false);
  const [hasCountedProjects, setHasCountedProjects] = useState(false);
  const [hasCountedTeam, setHasCountedTeam] = useState(false);
  const [hasCountedSatisfaction, setHasCountedSatisfaction] = useState(false);

  return (
    <div className="md:px-16 py-5 px-8 bg-secondary">
      <div className="w-full flex justify-between mt-10">
        <div className="flex flex-col">
          <LiaHandshake size={40} />
          <VisibilitySensor
            partialVisibility
            offset={{ top: 10 }}
            delayedCall
            onChange={(isVisible: any) => {
              if (isVisible) setHasCountedCompanies(true);
            }}
            active={!hasCountedCompanies}
          >
            {({ isVisible }: { isVisible: any }) => (
              <h3 className="text-4xl font-medium my-3">
                <CountUp end={isVisible ? 2500 : 0} duration={3} />+
              </h3>
            )}
          </VisibilitySensor>
          <h3 className="text-2xl font-light">Clients Served</h3>
        </div>
        <div className="flex flex-col">
          <LiaBullseyeSolid size={40} />
          <VisibilitySensor
            partialVisibility
            offset={{ top: 10 }}
            delayedCall
            onChange={(isVisible: any) => {
              if (isVisible) setHasCountedProjects(true);
            }}
            active={!hasCountedProjects}
          >
            {({ isVisible }: { isVisible: any }) => (
              <h3 className="text-4xl font-medium my-3">
                <CountUp end={isVisible ? 122 : 0} duration={3} />+
              </h3>
            )}
          </VisibilitySensor>
          <h3 className="text-2xl font-light">Projects Completed</h3>
        </div>
        <div className="flex flex-col">
          <HiOutlineUserGroup size={40} />
          <VisibilitySensor
            partialVisibility
            offset={{ top: 10 }}
            delayedCall
            onChange={(isVisible: any) => {
              if (isVisible) setHasCountedTeam(true);
            }}
            active={!hasCountedTeam}
          >
            {({ isVisible }: { isVisible: any }) => (
              <h3 className="text-4xl font-medium my-3">
                <CountUp end={isVisible ? 43 : 0} duration={3} />+
              </h3>
            )}
          </VisibilitySensor>
          <h3 className="text-2xl font-light">Certified Team</h3>
        </div>
        <div className="flex flex-col">
          <CiFaceSmile size={40} />
          <VisibilitySensor
            partialVisibility
            offset={{ top: 10 }}
            delayedCall
            onChange={(isVisible: any) => {
              if (isVisible) setHasCountedSatisfaction(true);
            }}
            active={!hasCountedSatisfaction}
          >
            {({ isVisible }: { isVisible: any }) => (
              <h3 className="text-4xl font-medium my-3">
                <CountUp end={isVisible ? 100 : 0} duration={3} />%
              </h3>
            )}
          </VisibilitySensor>
          <h3 className="text-2xl font-light">Satisfaction Rate</h3>
        </div>
      </div>
    </div>
  );
};

export default Choose;
