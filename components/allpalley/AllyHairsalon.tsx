import Image from "next/image";
import React from "react";

const AllyHairsalon = () => {
  return (
    <div className="w-full  px-[16px] sm:px-[30px] lg:px-[55px] 2xl:px-0">
      <Image
        src="/img/ally_pally.png"
        alt="ally_pally"
        width={1498}
        height={524}
        className="mx-auto pt-10 sm:pt-14 lg:pt-24 2xl:pt-[195px]"
      />
    </div>
  );
};

export default AllyHairsalon;
