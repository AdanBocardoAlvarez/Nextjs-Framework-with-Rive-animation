import React from "react";

interface YellowCardProps {
  data: any;
}

const YellowTiltedCard: React.FC<YellowCardProps> = ({ data }) => {
  return (
    <div className="bg-[#F9DD00] lg:mt-[60px] rounded-[8.267px] max-w-[410px] sm:max-w-[410px] md:max-w-[560px] lg:max-w-[450px] xl:max-w-[622px] w-full h-auto md:h-[320px] lg:h-[250px] xl:h-[353px] rotate-2 lg:rotate-[3.219deg] flex items-center justify-center py-7 px-3 sm:p-7">
      <div className="-rotate-[3.219deg] flex items-start justify-center gap-4 md:gap-[29px]">
        <div className="flex flex-col items-start justify-start gap-[16px] md:gap-[25px]">
          <p className="text-[#003465] font-montserrat text-[16px] md:text-[18px] lg:text-[21px] font-black leading-[130%] uppercase">
            Scope:
          </p>
          <div className="text-[#003465] font-montserrat text-[13px] md:text-[16px] font-normal leading-[130%] max-sm:min-w-[120px] w-full">
            {data.scope.map((item: any, index: number) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[16px] md:gap-[25px]">
          <p className="text-[#003465] font-montserrat text-[16px] md:text-[18px] lg:text-[21px] font-black leading-[130%] uppercase">
            Resources:
          </p>
          <div className="text-[#003465] font-montserrat text-[13px] md:text-[16px] font-normal leading-[130%] ">
            {data.resources.map((item: any, index: number) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default YellowTiltedCard;
