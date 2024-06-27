import Image from "next/image";
import React from "react";

const LetsTalks = () => {
  return (
    <>
      <div className="flex max-md:flex-col gap-9 sm:gap-14 2xl:gap-[110px] justify-center mx-auto pt-12 sm:pt-16 md:pt-[100px] lg:pt-[160px] xl:pt-[200px] 2xl:pt-[241px] bg-[#003465] px-4 md:px-7 xl:px-[55px]">
        <div className="max-w-[905px] w-full pt-5 lg:pt-14 xl:pt-[70px]">
          <h3 className="text-white font-montserrat font-black text-[28px] sm:text-[38px] lg:text-[46px] xl:text-[80px] leading-[93%] uppercase">
            Got A Project In Mind? Let's Talk
          </h3>
          <p className="max-w-[680px] w-full pt-5 sm:pt-8 xl:pt-11 font-montserrat font-bold text-[19px] sm:text-[22px] lg:text-[32px] leading-[130%] text-white">
            Interested in working with us or just want to say hello?
          </p>
          <button
            type="submit"
            className="max-w-[342px] w-full h-[50px] md:h-[63px] flex justify-center items-center border border-[#F9DD00] rounded-[12px] bg-[#F9DD00] font-montserrat font-bold leading-[93%] text-[16px] text-[#003465] hover:text-[#F9DD00] transition duration-300 ease-in-out mt-4 lg:mt-[40px] xl:mt-[40px] 2xl:mt-[46px] hover:bg-transparent"
          >
            GET IN TOUCH
          </button>
        </div>
        <div className="max-md:mx-auto">
          <Image
            src="/img/mike.png"
            width={467}
            height={582}
            alt="lets-talks-image"
          />
        </div>
      </div>
    </>
  );
};

export default LetsTalks;
