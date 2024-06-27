import Link from "next/link";
import React from "react";

const SocialMediaEntertainingCard = () => {
  return (
    <div className="px-[16px] sm:px-[30px] lg:px-[55px] 2xl:px-0 pt-[79px]">
      <div className="max-w-[1479px] w-full mx-auto rotate-[1.898deg]">
        <div className="max-sm:hidden sm:max-w-[400px] lg:max-w-[700px] xl:max-w-[933px] w-full h-[203px] rounded-[40px] md:rounded-[68px] bg-[#F9DD00] -mb-32"></div>
        <div className="w-full h-[500px] md:h-[704px] rounded-[40px] md:rounded-[68px] bg-[#F9DD00]">
          <div className="max-m:max-w-[580px] md:max-w-[677px] w-full max-sm:pt-5 -rotate-[1.898deg] px-4 sm:pl-[30px] md:pl-[60px] sm:pr-3 lg:pl-[90px] xl:pl-[127px]">
            <h2 className="text-[#003465] max-w-[677px] w-full text-[32px] sm:text-[40px] md:text-[60px] xl:text-[80px] font-montserrat font-black leading-[93%] uppercase max-xl:pt-3">
              Entertaining, Engaging, Evolving
            </h2>
            <p className="mt-10 sm:mt-[87px] text-[#003465] text-[15px] sm:text-[18px] font-montserrat font-medium leading-[160%]">
              Growing your online following requires time and consistent effort.
              The best approach includes posting regular and entertaining
              content, engaging with followers, and continuously evolving your
              strategy. These crucial social signals attract relevant traffic to
              your website, enhancing your overall search result rankings.
            </p>
            <Link href="#signup">
              <button
                type="submit"
                className="mt-10 sm:mt-[94px] bg-[#003465] rounded-[12px] flex items-center justify-center max-w-[410px] w-full p-1 sm:p-[10px] h-[55px] border border-transparent hover:border-[#003465] hover:bg-transparent hover:text-[#003465] transition ease-in-out duration-300 text-white text-[14px] sm:text-[16px] font-montserrat font-bold leading-[93%]"
              >
                READY FOR A SOCIAL STRATEGY
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaEntertainingCard;
