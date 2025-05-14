import React from "react";
import { logos } from "../constants/LogoCarousel";
import Input from "../components/Input";

export default function CTA() {
  interface CTASection {
    title: string;
    subtitle: string;
  }

  const callToAction: CTASection = {
    title:
      "Learn why the future of advisory and audit services is powered by Fieldguide",
    subtitle:
      " Top 500 firms trust the Fieldguide AI Platform for Advisory & Audit Firms. Learn how Fieldguide can help your firm.",
  };

  return (
    <section className="py-20 px-4 text-center max-w-4xl mx-auto">
      <h3 className="text-2xl leading-8 font-semibold mb-4 md:text-[44px] md:leading-[56px]">
        {callToAction.title}
      </h3>

      <p className="text-base leading-[22px] font-normal text-[#D8D8D8] mb-8 md:text-[16px]">
        {callToAction.subtitle}
      </p>

      <Input />

      <div className="mx-auto max-w-[974px] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-8 justify-items-center">
        {logos.slice(0, 7).map((logo, index) => (
          <div key={index} className="flex justify-center items-center">
            <img
              width={130}
              height={51}
              src={logo}
              alt={`Logo ${index}`}
              className="w-40 h-30 object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
