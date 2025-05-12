import React from "react";

import { heroContent } from "../constants/HeroContent";

export default function Pill() {
  return (
    <div className="mb-10 w-full max-w-[429px] h-10 bg-blue-gray text-white rounded-full flex items-center justify-center text-sm font-medium leading-[22.4px] px-4">
      {heroContent.pillText}
    </div>
  );
}
