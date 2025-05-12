import React from "react";
import { logos } from "../constants/LogoCarousel";
import TestimonialCard from "../components/TestimonialCard";
import DataCard from "../components/DataCard";

export default function TestimonialSection() {
  interface TestimonialSectionContent {
    title: string;
    subtext: string;
  }

  const infoSection: TestimonialSectionContent = {
    title: "Trusted by industries leaders",
    subtext: "Trusted by accounting firms and professionals worldwide.",
  };

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto text-center">
      <h2 className="text-[32px] leading-[40px] md:text-[40px] md:leading-[48px] lg:text-[48px] lg:leading-[52px] font-semibold mb-4">
        {infoSection.title}
      </h2>
      <p className="text-[#d0d0d0] text-[16px] leading-[22px] md:text-[18px] md:leading-[26px] max-w-2xl mx-auto mb-16">
        {infoSection.subtext}
      </p>
      <div className="mx-auto max-w-[696px] grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center">
        {logos.slice(0, 4).map((logo, index) => (
          <div key={index} className="flex justify-center items-center">
            <img
              src={logo}
              alt={`Logo ${index}`}
              className="w-20 h-20 object-contain"
            />
          </div>
        ))}
      </div>

      <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-8 text-left">
        <TestimonialCard />
        <DataCard />
      </div>
    </section>
  );
}
