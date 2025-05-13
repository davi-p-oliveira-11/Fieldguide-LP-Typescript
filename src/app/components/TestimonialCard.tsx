import React from "react";
import Image from "next/image";

export default function TestimonialCard() {
  interface TestimonialCardInfo {
    image: string;
    alt: string;
    testimonial: string;
    userName: string;
    role: string;
  }

  const testimonialCardInfo: TestimonialCardInfo = {
    image: "/images/assets/man1.svg",
    alt: "John Doe",
    testimonial:
      " “Software for accounting firms is notoriously outdated, slow, and hard to use. Fieldguide is different – itʼs a more streamlined, cloud-first approach.” ",
    userName: "John Doe",
    role: "Partner at Aprio",
  };

  return (
    <div className="flex-1 lg:flex-[0.7] shadow-lg rounded-xl overflow-hidden flex flex-col md:flex-row">
      <Image
        src={testimonialCardInfo.image}
        alt={testimonialCardInfo.alt}
        width={200}
        height={260}
        className="w-full max-w-[200px] h-auto object-cover rounded-lg"
      />
      <div className="p-6 flex flex-col justify-center">
        <p className="text-[24px] leading-[32px] font-medium mb-4 italic">
          {testimonialCardInfo.testimonial}
        </p>
        <p className="text-[16px] leading-[22px] font-normal">
          {testimonialCardInfo.userName}
        </p>

        <p className="text-[16px] leading-[22px] font-normal text-gray-white2">
          {testimonialCardInfo.role}
        </p>
      </div>
    </div>
  );
}
