import React from "react";
import { features } from "../constants/Features";
import Button from "./Button";

export default function InfoCard() {
  interface InfoCardContent {
    title: string;
    description: string;
  }

  const infoCardContents: InfoCardContent[] = [
    {
      title:
        "Grow your business with the Fieldguide AI Platform for Advisory and Audit Firms",
      description:
        "Fieldguide increases margins, revenue, and client satisfaction across all advisory and audit engagements.",
    },
  ];

  return (
    <div className="flex-1 space-y-6">
      {infoCardContents.map((content, index) => (
        <div key={index}>
          <p className="text-sm uppercase text-primary font-medium mb-4">
            PRODUCTS
          </p>
          <h3 className="text-[32px] leading-[38px] font-semibold mb-4">
            {content.title}
          </h3>
          <p className="text-[16px] leading-[22px] font-normal text-gray-white2">
            {content.description}
          </p>
        </div>
      ))}

      <div className="grid grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <div key={index}>
            <p className="text-[16px] leading-[22px] font-medium">
              {feature.title}
            </p>

            <p className="text-[14px] leading-[22px] font-normal text-gray-white2">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      <Button text="Explore Products" />
    </div>
  );
}
