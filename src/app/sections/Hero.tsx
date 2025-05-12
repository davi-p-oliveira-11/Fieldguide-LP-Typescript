import React from "react";
import Button from "../components/Button";
import Image from "next/image";
import VideoPlayer from "../components/VideoPlayer";
import Pill from "../components/Pill";

export default function Hero() {
  return (
    <section className="w-full px-4 py-16 md:py-24 flex flex-col items-center text-center">
      <Pill />

      <h1 className="text-4xl md:text-5xl font-bold max-w-4xl mb-4">
        The future of trust. <br />
        Powered by Fieldguide
      </h1>

      <p className="text-muted-foreground max-w-xl mb-6 text-base md:text-lg">
        Streamline your workflows, collaborate in real-time, and deliver
        top-tier results with less effort.
      </p>

      <Button />

      <Image
        src="/images/assets/years.svg"
        alt="Hero illustration"
        width={238}
        height={51}
        className="mt-6"
      />

      <h4 className="text-xl font-semibold mb-2">
        Trusted by Industry Leaders
      </h4>

      <p className="text-muted-foreground max-w-xl mb-8">
        Join thousands of professionals who rely on FieldGuide to transform
        their audit process.
      </p>

      <VideoPlayer />
    </section>
  );
}
