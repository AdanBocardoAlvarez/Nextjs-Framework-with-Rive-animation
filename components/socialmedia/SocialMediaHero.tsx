import React from "react";
import TopHeading from "../common/TopHeading";
import { SocialMediaHeroHandIcon } from "../common/Icons";

const SocialMediaHero = () => {
  return (
    <div className="bg-[url('/img/social-media-hero-bg.png')] bg-top bg-cover bg-no-repeat pt-[120px] md:pt-[182px] xl:pt-[167px] px-4 sm:px-[30px] lg:px-[55px]">
      <div className="max-w-[1505px] w-full mx-auto">
        <div className="absolute left-[51%] max-sm:hidden -translate-x-1/2 top-[30px] sm:top-[142px]">
          <SocialMediaHeroHandIcon />
        </div>
        <div className="realtive">
          <TopHeading
            heading="social media"
            textSize="text-[12.3vw] xl:text-[11.4vw] 2xl:text-[10.4vw]"
          />
        </div>
        <p className="text-center text-white font-montserrat text-[18px] md:text-[30px] lg:text-[40px] font-black leading-[110%] uppercase max-w-[1175px] w-full mx-auto -translate-y-[10px] sm:-translate-y-[10px] md:-translate-y-[15px] lg:-translate-y-[25px] 2xl:-translate-y-[40px]">
          Take charge of the online conversation about your business by directly
          building relationships with your customers
        </p>
      </div>
    </div>
  );
};

export default SocialMediaHero;
