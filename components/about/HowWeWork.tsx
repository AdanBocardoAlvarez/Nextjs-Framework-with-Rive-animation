import React from "react";
import Image from "next/image";
import { howweowrkdata } from "../common/Helper";
import { Bird1Icon } from "../common/Icons";

const HowWeWork = () => {
  return (
    <div className="bg-[#003465] -mt-1 relative">
      <div className="max-w-[1437px] 2xl:max-w-[1600px] w-full mx-auto  px-[16px] sm:px-[55px] pb-[80px] md:pb-[173px]">
        <h3 className="text-[30px]  sm:text-[50px] md:text-[60] lg:text-[70px] xl:text-[80px] font-black text-white leading-[93.1%] text-center mb-[40px] sm:mb-[50px] md:mb-[70px] lg:mb-[90px] xl:mb-[110px]">
          HOW DO WE WORK
        </h3>
        <div
          data-aos="fade-left"
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 relative justify-between gap-y-3 gap-x-6 2xl:gap-x-2"
        >
          <Image
            alt="decoration"
            width={3626}
            height={163}
            src="/img/arrow-icon.svg"
            className="absolute -right-[40px] top-[85px] lg:top-[130px] 2xl:top-[150px] max-md:hidden min-w-[1806px]"
          />
          <Image
            alt="decoration"
            width={3626}
            height={163}
            src="/img/arrow-icon.svg"
            className="absolute -right-[50px] top-[500px] lg:top-[490px] max-md:hidden xl:hidden min-w-[1806px]"
          />
          {howweowrkdata.map((item, index) => (
            <div
              data-aos="fade-up"
              key={index}
              className="relative how_we_work max-sm:mt-4 max-lg:min-h-[409px] max-md:min-h-[200px]"
            >
              <span className="text-[24px] sm:text-[30px] uppercase 2xl:text-[40px] font-black leading-[93.1%] text-white lg:max-w-[240px] w-full inline-block mb-[10px] sm:mb-[40px] lg:mb-[60px]">
                {item.title}
              </span>
              <Image
                data-aos="fade-up"
                alt="decoration"
                width={69}
                height={69}
                src="/img/steps-header-icon.svg"
                className="relative z-20 mb-[18px] lg:mb-[30px] 2xl:mb-[px] max-lg:z-[1] 
                max-sm:w-[50px] max-sm:h-[50px] "
              />
              <Image
                data-aos="fade-up"
                alt="decoration"
                width={1024}
                height={163}
                src="/img/arrow-icon.svg"
                className="md:hidden absolute right-0 sm:-right-10 top-[40px] sm:top-[90px] min-w-[806px]"
              />

              <p
                data-aos="fade-up"
                className="text-[15px] sm:text-[17px] text-white inline-block md:max-w-[340px] w-full"
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <span className="absolute right-[100px] md:right-[205px] -bottom-5 md:-bottom-8">
        <Bird1Icon />
      </span>
    </div>
  );
};

export default HowWeWork;
