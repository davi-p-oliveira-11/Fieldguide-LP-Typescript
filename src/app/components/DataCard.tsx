import React from "react";

export default function DataCard() {
  interface StatsCard {
    multipleNum: string;
    subtext: string;
    text: string;
  }

  const statsCardInfo: StatsCard = {
    multipleNum: "5X",
    subtext: "Business Growth",
    text: "Fieldguide innovations and efficiencies helped Maxwell Locke & Ritter grow their practice by",
  };

  return (
    <div className="flex-1 lg:flex-[0.3] bg-gray-50 shadow-md rounded-xl p-8 flex flex-col justify-center text-left mb-1">
      <h2 className="text-[120px] leading-[96px] font-semibold text-blue-600 mb-2">
        {statsCardInfo.multipleNum}
      </h2>
      <p className="text-[16px] leading-[22px] font-medium mb-4">
        {statsCardInfo.subtext}
      </p>
      <p className="text-[16px] leading-[22px] font-normal text-gray-white2">
        {statsCardInfo.text}
      </p>
    </div>
  );
}
