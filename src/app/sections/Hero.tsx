import React from "react";
import Button from "../components/Button";
import Image from "next/image";
import VideoPlayer from "../components/VideoPlayer";
import Pill from "../components/Pill";

export default function Hero() {
  return (
    <section className="w-full px-4 py-16 md:py-24 flex flex-col items-center text-center">
      <Pill />

      <h1 className="text-[40px] leading-[48px] md:text-[56px] md:leading-[64px] lg:text-[72px] lg:leading-[80px] font-bold max-w-4xl mb-4">
        The <em className="italic">future</em> of trust. <br />
        Powered by Fieldguide
      </h1>

      <p className="text-gray-white max-w-xl mb-6 text-base md:text-lg">
        The Fieldguide AI Platform for Advisory & Audit Firms saves time
        increases margins, and improves client satisfaction.
      </p>

      <Button text="Get Started" />

      <Image
        src="/images/assets/years.svg"
        alt="Hero illustration"
        width={239}
        height={51}
        className="mt-6"
      />

      <h4 className="text-2xl leading-[33.6px] font-semibold mb-2">
        Trusted by Industry Leaders
      </h4>

      <p className="text-gray-white2 max-w-xl mb-6 text-base md:text-lg">
        3x Winner - CPA Practice Advisor
      </p>

      <VideoPlayer />
    </section>
  );
}
