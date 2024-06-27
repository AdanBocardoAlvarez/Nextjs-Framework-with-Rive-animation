import React from "react";
// import styles from "../styles/aboutPageSection.module.css";
import Image from "next/image";
import TopHeading from "../common/TopHeading";

const AboutPageSection = () => {
  return (
    <div className=" px-4 max-md:pt-[120px] max-xl:pt-[182px]  sm:px-[30px] lg:px-[55px] 2xl:px-0 -mt-1">
      <Image
        alt="decoration"
        width={2752}
        height={1159}
        className="absolute left-0 right-0 top-[60px] 2xl:top-2.5 mx-auto z-[1] max-w-screen w-full"
        src="/img/about-hero-bg.svg"
      />
      <div className="max-w-[1437px] relative 2xl:max-w-[1600px] w-full mx-auto h-[530px] sm:h-[650px] md:h-[800px] lg:h-[1100px] xl:h-[1200px] xl:pt-[167px] ">
        <Image
          alt="decoration"
          width={271}
          height={129}
          className="absolute left-0 right-5 md:-right-0 -top-16 sm:top-[-8px] lg:top-[10px] xl:top-[100px] z-[1] mx-auto max-sm:w-[100px] max-lg:w-[200px] max-lg:h-[100px]"
          src="/img/ufo.svg"
        />
        <Image
          alt="decoration"
          width={879}
          height={937}
          className="absolute left-1/2 top-0 sm:top-[10px] md:top-[43px] lg:top-[140px] xl:top-[240px] z-[2]  mx-auto md:ml-5 -translate-x-1/2 max-sm:max-w-[300px]  max-md:max-w-[600px] max-sm:h-fit max-lg:max-w-[700px] max-lg:w-full max-lg:h-[700px]"
          src="/img/bottom-ufo.svg"
        />
        <div>
          <TopHeading
            textSize="text-[15vw] md:text-[16.4vw] xl:text-[16vw] 2xl:text-[14vw]"
            heading="About Us"
          />
        </div>
        <div
          data-aos="fade-up"
          className="text-[#003465] absolute right-0 left-0 mx-auto text-center flex items-center justify-center flex-col top-[70px] sm:top-[200px] md:top-[270px] lg:top-[300px] xl:top-[450px] 2xl:top-[450px] z-[5]  lg:ml-4"
        >
          <h3 className="max-w-[200px] md:max-w-[300px] lg:max-w-[400px] w-full leading-[93%] text-[30px] sm:text-[40px] md:text-[50px] lg:text-[60px] xl:text-[80px] text-[#003465] mb-[20px] sm:mb-[40px] md:mb-[20px] lg:mb-[60px] xl:mb-[81px] font-black">
            OUR MISSION
          </h3>
          <span
            data-aos="fade-down"
            className="text-[16px] sm:text-[20px] md:text-[24px] lg:text-3xl font-bold mb-3 sm:mb-[10px] lg:mb-[43px] leading-[120%] max-w-[300px] sm:max-w-[280px] md:max-w-[400px] xl:max-w-[590px] w-full max-sm:px-[57px] xl:translate-x-2"
          >
            The Internet is overcrowded and millions and millions of companies
            compete to get noticed.
          </span>
          <span
            data-aos="fade-up"
            className="text-sm md:text-base max-sm:mt-12 lg:text-lg font-bold !leading-[120%] md:!leading-[160%] sm:max-w-[450px] lg:max-w-[563px] w-full max-sm:text-white max-sm:px-5"
          >
            Just Get Visible ensures your brand shines alongside your website,
            allowing you to stand out from the crowd through experience,
            knowledge, and creativity. Just Get Visible is always at hand in the
            moments when most needed. Being reliableand trustworthy ensures our
            customers will never leave us.
          </span>
        </div>
      </div>
    </div>
  );
};

export default AboutPageSection;
