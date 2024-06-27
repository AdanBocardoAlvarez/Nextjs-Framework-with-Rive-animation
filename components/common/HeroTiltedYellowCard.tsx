import React from "react";

interface HeroTiltedYellowCardProps {
  data: any;
}

const HeroTiltedYellowCard: React.FC<HeroTiltedYellowCardProps> = ({
  data,
}) => {
  return (
    <div
      className="bg-[#F9DD00] rounded-lg max-w-[250px] sm:max-w-[325px] w-full p-4 
    sm:pt-10 md:pt-[52px] sm:pb-[45px] md:pb-[59px] rotate-[-2.088deg] -translate-y-[20px] sm:-translate-y-[52px]"
    >
      <div className="flex flex-col gap-3 sm:gap-4 md:gap-[22px] rotate-2">
        <div className="flex flex-col gap-1 sm:gap-1 md:gap-2">
          <h4 className="text-center font-montserrat font-black text-[16px] sm:text-[21px] leading-[130%] uppercase text-[#003465]">
            Lead Time:
          </h4>
          <p className="text-center font-montserrat font-normal text-[14px] sm:text-[16px] leading-[130%] text-[#003465]">
            {data.leadTime}
          </p>
        </div>
        <div className="flex flex-col gap-1 sm:gap-1 md:gap-2">
          <h4 className="text-center font-montserrat font-black text-[16px] sm:text-[21px] leading-[130%] uppercase text-[#003465]">
            sector:
          </h4>
          <p className="text-center font-montserrat font-normal text-[14px] sm:text-[16px] leading-[130%] text-[#003465]">
            {data.sector}
          </p>
        </div>
        <div className="flex flex-col gap-1 sm:gap-1 md:gap-2">
          <h4 className="text-center font-montserrat font-black text-[16px] sm:text-[21px] leading-[130%] uppercase text-[#003465]">
            Target Type:
          </h4>
          <p className="text-center font-montserrat font-normal text-[14px] sm:text-[16px] leading-[130%] text-[#003465]">
            {data.targetType}
          </p>
        </div>
        <div className="flex flex-col gap-1 sm:gap-1 md:gap-2">
          <h4 className="text-center font-montserrat font-black text-[16px] sm:text-[21px] leading-[130%] uppercase text-[#003465]">
            Services:
          </h4>
          <p className="text-center font-montserrat font-normal text-[14px] sm:text-[16px] leading-[130%] text-[#003465] max-w-[176px] w-full mx-auto">
            {data.services}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroTiltedYellowCard;
