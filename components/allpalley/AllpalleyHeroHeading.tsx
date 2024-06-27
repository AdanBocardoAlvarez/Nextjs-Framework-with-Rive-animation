import React from "react";
import TopHeading from "../common/TopHeading";

const AllyPallyHeroHeading = () => {
  return (
    <>
      <div className=" bg-[url('/img/social-media-hero-bg.png')] bg-top bg-cover bg-no-repeat sm:pt-[182px] pt-[120px] xl:pt-[167px]">
        <div className="absolute left-[51%] -translate-x-1/2 top-[130px] sm:top-[200px] lg:top-[250px] 2xl:top-[300px]">
          <p className="text-white text-center font-montserrat text-[16px] md:text-[24px] lg:text-[32px] font-semibold leading-[93%] uppercase">
            Branding
          </p>
        </div>
        <div className="realtive max-w-[1523px] w-full mx-auto">
          <h1 className="font-montserrat font-black text-[13vw] sm:text-[16vw] xl:text-[16vw] text-center leading-[93%] sm:tracking-[-20px]  2xl:tracking-[-57.916px] uppercase text-[#03498A]">
            Ally Pally
          </h1>
        </div>
        <p className="text-center text-white font-montserrat text-[18px] md:text-[30px] lg:text-[40px] font-black leading-[110%] uppercase max-w-[1175px] w-full mx-auto -translate-y-[10px] sm:-translate-y-[19px] md:-translate-y-[29px] xl:-translate-y-[69px] 2xl:-translate-y-[70px]">
          A fresh brand identity for a trendy barber shop in Alexandra Palace
        </p>
      </div>
    </>
  );
};

export default AllyPallyHeroHeading;
