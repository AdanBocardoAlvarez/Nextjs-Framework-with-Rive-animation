import Image from "next/image";
import React from "react";
import { EcommercePcStandIcon } from "../common/Icons";

const Ecommerce = () => {
  return (
    <>
      <div className=" max-lg:flex-col-reverse max-md:items-center w-full pt-[40px] sm:pt-[70px] md:pt-[100px] lg:pt-[140px] xl:pt-[177px] 2xl:pt-[233px] flex justify-center px-4 gap-[20px] sm:gap-[30px] md:gap-[50px]  lg:gap-[80px] xl:gap-[132px] ">
        <div className="flex flex-col">
          <div className="flex items-end">
            <div className="flex items-center flex-col">
              <div className="">
                <Image
                  src="/img/pc-head-image.png"
                  width={771}
                  height={371}
                  alt="pc-image"
                />
              </div>
            </div>
          </div>
          <div className="bg-white max-w-[1106px] lg:translate-x-4 w-full h-[3px] sm:h-1.5 rounded-md"></div>
          <button
            type="submit"
            className="w-[265px] h-[50px] flex justify-center items-center border border-[#F9DD00] rounded-[12px] bg-[#F9DD00] font-montserrat font-bold leading-[93%] text-[16px] text-[#003465] hover:text-[#F9DD00] transition duration-300 ease-in-out mt-5 lg:mt-[40px] xl:mt-[60px] 2xl:mt-[84px] hover:bg-transparent max-lg:mx-auto lg:hidden"
          >
            More About Sitemoni
          </button>
        </div>
        <div className="lg:max-w-[392px] w-full max-lg:text-center">
          <h3 className=" font-montserrat font-black leading-[43px] uppercase text-white text-[30px] sm:mt-[40px] xl:mt-[70px] 2xl:mt-[110px]">
            e-commerce
          </h3>
          <p className="lg:h-[54px] mt-5 lg:mt-[34px] font-montserrat font-normal text-[15px] sm:text-[17px] text-white leading-[160%] ">
            The swiss army knife of monitoring tools for your online business.
          </p>
          <button
            type="submit"
            className="w-[265px] h-[50px] flex justify-center items-center border border-[#F9DD00] rounded-[12px] bg-[#F9DD00] font-montserrat font-bold leading-[93%] text-[16px] text-[#003465] hover:text-[#F9DD00] transition duration-300 ease-in-out mt-4 lg:mt-[40px] xl:mt-[60px] 2xl:mt-[84px] hover:bg-transparent max-lg:mx-auto max-lg:hidden"
          >
            More About Sitemoni
          </button>
        </div>
      </div>
    </>
  );
};

export default Ecommerce;
