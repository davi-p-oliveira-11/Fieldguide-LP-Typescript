import React from "react";
import Button from "../components/Button";
import Image from "next/image";
import VideoPlayer from "../components/VideoPlayer";
import Pill from "../components/Pill";

import { heroContent } from "../constants/HeroContent";

export default function Hero() {
  return (
    <section className="w-full px-4 py-16 md:py-24 flex flex-col items-center text-center">
      {/*Top Block */}
      <div className="flex flex-col items-center">
        <Pill />

        <h1 className="text-[40px] leading-[48px] md:text-[56px] md:leading-[64px] lg:text-[72px] lg:leading-[80px] font-bold max-w-4xl mb-6">
          {heroContent.heading.firstLine}
          <em className="italic">{heroContent.heading.emphasizedWord}</em>
          {heroContent.heading.secondLine}
        </h1>

        <p className="mb-8 text-gray-white max-w-xl text-[16px] leading-[22px] md:text-[18px] md:leading-[26px]">
          {heroContent.description}
        </p>

        <Button text={heroContent.buttonText} />
      </div>

      {/*Bottom Block */}
      <div className="mt-12 flex flex-col items-center">
        <Image
          src={heroContent.badge.imageSrc}
          alt={heroContent.badge.alt}
          width={239}
          height={51}
          className="mb-6 w-40 md:w-60 lg:w-[239px] h-auto"
        />

        <h4 className="text-xl leading-7 md:text-2xl md:leading-[33.6px] font-semibold mb-6">
          {heroContent.trustedHeading}
        </h4>

        <p className="text-gray-white2 max-w-xl text-[16px] leading-[22px] md:text-[18px] md:leading-[26px] mb-6">
          {heroContent.trustedSubtext}
        </p>
      </div>

      {/* Video Component */}
      {/* <VideoPlayer /> */}

      <div className="w-full max-w-4xl mx-auto mb-12">
        <img
          src="/images/assets/gif-video.png"
          alt="Fieldguide product demo"
          className="w-full h-auto rounded-lg object-cover"
        />
      </div>
    </section>
  );
}
