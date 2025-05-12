import React from "react";
import InfoCard from "../components/InfoCard";
import Image from "next/image";
import { infoSections } from "../constants/InfoSectionContent";

export default function InfoSection() {
  interface InfoSectionContent {
    title: string;
    subtext: string;
  }

  const infoSection: InfoSectionContent = {
    title: "Built by and for practitioners",
    subtext: "Fieldguide is built to power the firm of the future.",
  };

  return (
    <section className="w-full px-4 pt-12 md:pt-16 pb-16 md:pb-24 flex flex-col items-center text-center">
      <h2 className="text-[32px] leading-[40px] md:text-[40px] md:leading-[48px] lg:text-[48px] lg:leading-[52px] font-semibold mb-4">
        {infoSection.title}
      </h2>

      <p className="text-[#d0d0d0] text-[16px] leading-[22px] md:text-[18px] md:leading-[26px] max-w-2xl mx-auto mb-16">
        {infoSection.subtext}
      </p>

      {infoSections.map((section, index) => (
        <div
          key={index}
          className={`flex flex-col lg:flex-row items-center gap-12 text-left ${
            index > 0 ? "mt-20" : ""
          }`}
        >
          {section.reverseOrder ? (
            <>
              <div className="flex-1">
                <Image
                  src={section.imageSrc}
                  alt={section.altText}
                  width={606}
                  height={606}
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
              <InfoCard />
            </>
          ) : (
            <>
              <InfoCard />
              <div className="flex-1">
                <Image
                  src={section.imageSrc}
                  alt={section.altText}
                  width={606}
                  height={606}
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
            </>
          )}
        </div>
      ))}
    </section>
  );
}
