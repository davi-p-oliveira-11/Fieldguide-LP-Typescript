import React from "react";
import { logos } from "../constants/LogoCarousel";

export default function Companies() {
  return (
    <section className="w-full px-4 py-16 md:py-24 flex flex-col items-center text-center">
      <p>
        Top 500 firms trust Fieldguide to improve efficiency, revenue, and
        client experiences
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-8 gap-8 justify-items-center">
        {logos.map((logo, index) => (
          <div key={index} className="flex justify-center items-center">
            <img
              src={logo}
              alt={`Logo ${index}`}
              className="w-24 h-24 object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
