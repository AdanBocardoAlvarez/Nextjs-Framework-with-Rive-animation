import Image from "next/image";
import React from "react";

interface HeroProps {
  image: string;
  target: string;
  sector: string;
  leadTime: string;
  services: string;
  text: string;
  width: string;
}

const Franzos: React.FC<HeroProps> = ({
  image,
  leadTime,
  target,
  sector,
  services,
  text,
  width,
}) => {
  return (
    <>
      <div className="pt-5 md:pt-[29px] w-fit mx-auto  ">
        <div className="w-fit h-fit bg-white rounded-[12px] md:rounded-[24px] lg:rounded-[32px]">
          <Image
            src={image}
            width={1501}
            height={628}
            alt="franzos-image"
            className="rounded-[12px] md:rounded-[24px] lg:rounded-[32px]"
          />
        </div>
      </div>
      <div className="max-w-[1501px] w-full mx-auto flex max-lg:flex-col items-center lg:gap-12 2xl:gap-[119px] justify-end mt-[-1px] ">
        <div className="bg-[#F9DD00] rounded-[8px] max-w-[250px] sm:max-w-[350px] w-full p-4 sm:pt-[52px] sm:pb-[59px] rotate-[-2.088deg] -translate-y-[20px] sm:-translate-y-[52px]">
          <div className="flex flex-col gap-3 sm:gap-[22px] rotate-2">
            <div className="flex flex-col gap-1 sm:gap-[8px]">
              <h4 className="text-center font-montserrat font-black text-[16px] sm:text-[21px] leading-[130%] uppercase text-[#003465]">
                Lead Time:
              </h4>
              <p className="text-center font-montserrat font-normal text-[14px] sm:text-[16px] leading-[130%] text-[#003465]">
                {leadTime}
              </p>
            </div>
            <div className="flex flex-col gap-1 sm:gap-[8px]">
              <h4 className="text-center font-montserrat font-black text-[16px] sm:text-[21px] leading-[130%] uppercase text-[#003465]">
                sector:
              </h4>
              <p className="text-center font-montserrat font-normal text-[14px] sm:text-[16px] leading-[130%] text-[#003465]">
                {sector}
              </p>
            </div>
            <div className="flex flex-col gap-1 sm:gap-[8px]">
              <h4 className="text-center font-montserrat font-black text-[16px] sm:text-[21px] leading-[130%] uppercase text-[#003465]">
                Target Type:
              </h4>
              <p className="text-center font-montserrat font-normal text-[14px] sm:text-[16px] leading-[130%] text-[#003465]">
                {target}
              </p>
            </div>
            <div className="flex flex-col gap-1 sm:gap-[8px]">
              <h4 className="text-center font-montserrat font-black text-[16px] sm:text-[21px] leading-[130%] uppercase text-[#003465]">
                Services:
              </h4>
              <p className="text-center font-montserrat font-normal text-[14px] sm:text-[16px] leading-[130%] text-[#003465]">
                {services}
              </p>
            </div>
          </div>
        </div>
        <div className={`${width} w-full`}>
          <p className="text-white font-montserrat font-normal text-[14px] sm:text-[18px] leading-[160%]">
            {text}
          </p>
        </div>
      </div>
    </>
  );
};

export default Franzos;
