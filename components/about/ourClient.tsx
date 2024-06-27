import React, { useEffect, useState } from "react";
import Image from "next/image";

const OurClient = () => {
  const imagedata = [
    {
      img: "/img/image_6_29e8bc7200.svg",
    },
    {
      img: "/img/franzos-logo-2.svg",
    },
    {
      img: "/img/network_rail_logo_639ec064b5.svg",
    },
    {
      img: "/img/image_13_6abc9395f5.svg",
    },
    {
      img: "/img/clarke-chapman-logo2.svg",
    },
    {
      img: "/img/SK-Foods-logo-1.svg",
    },
    {
      img: "/img/Duronic_Logo.svg",
    },
    {
      img: "/img/ams.svg",
    },
  ];

  return (
    <div className="px-4 bg-white sm:px-5 md:px-[55px]  flex justify-center">
      <div className="py-[60px] sm:py-[90px] md:pt-[120px] max-w-[1437px] 2xl:max-w-[1400px] w-full">
        <h2 className="text-center text-[rgba(0,52,101,1)] font-black font-introBlack mx-auto mb-[45px] sm:mb-[60px] md:mb-[90px] uppercase leading-[37px] sm:leading-[50px] md:leading-[60px] lg:leading-[65px] xl:leading-[74px] max-w-[941px] w-full text-[30px] sm:text-[50px] md:text-[60px] lg:text-[70px] xl:text-[84px]">
          PEOPLE WE HAVE WORKED WITH
        </h2>
        <div className="w-full max-sm:max-w-[500px] max-sm:mx-auto grid grid-cols-2 sm:grid-cols-4 sm:gap-x-4 gap-x-4 gap-y-7 sm:gap-y-5">
          {imagedata.map((item, index) => (
            <div
              data-aos="fade-right"
              data-aos-anchor-placement="center-center"
              key={index}
              className="flex items-center justify-center"
            >
              <Image
                src={item.img}
                alt="logo"
                width={350}
                height={125}
                className="max-w-[350px] min-w-full w-full h-[65px] sm:h-[100px] md:h-[125px] sm:px-[11.5%]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurClient;
