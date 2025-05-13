import React from "react";
import { logos } from "../constants/LogoCarousel";

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
      <h3 className="text-[44px] leading-[56px] font-semibold mb-4">
        {callToAction.title}
      </h3>

      <p className="text-[16px] leading-[22px] font-normal text-[#D8D8D8] mb-8">
        {callToAction.subtitle}
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 max-w-2xl mx-auto">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full sm:w-[85%] px-4 py-3 border border-gray-300 rounded-lg focus:outline-none"
        />
        <button className="w-full sm:w-[15%] bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition">
          Join
        </button>
      </div>

      <div className="mx-auto max-w-[696px] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4 justify-items-center">
        {logos.slice(0, 7).map((logo, index) => (
          <div key={index} className="flex justify-center items-center">
            <img
              src={logo}
              alt={`Logo ${index}`}
              className="w-20 h-20 object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
