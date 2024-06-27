import React from "react";
import TopHeading from "../common/TopHeading";
import Image from "next/image";
import CyberSecurity from "./CyberSecurity";
import Ecommerce from "./Ecommerce";
import OurExpertise from "./OurExpertise";
import LetsTalks from "./LetsTalks";
import FooterHeading from "../common/FooterHeading";
import FooterTextDecoration from "../common/FooterTextDecoration";

const Products = () => {
  return (
    <div className="bg-[#003465]  relative overflow-hidden">
      <div className="hero_bg_img h-[500px] xl:h-[959px] w-full top-12 lg:top-28 absolute z-10"></div>
      <div className="max-w-[1505px] relative z-20  w-full mx-auto px-4 md:px-7 xl:px-[55px] 2xl:px-0 pt-[120px] md:pt-[182px] xl:pt-[167px]">
        <div className="w-fit mx-auto relative">
          <Image
            src="/img/fish-img.png"
            width={362}
            height={128}
            alt="fish image"
            className=" absolute top-[35%] lg:top-[52%] left-1/2 -translate-x-1/2 ml-2 w-[262px] md:w-[362px] h-[100px] md:h-[128px] max-sm:hidden"
          />
          <TopHeading
            heading="products"
            textSize="text-[15.5vw] 2xl:text-[13.5vw]"
          />
        </div>

        <p className="max-w-[1190px] w-full mx-auto text-center font-montserrat font-black text-[14px] sm:text-[22px] md:text-[32px] lg:text-[40px] leading-[110%] uppercase text-white mt-5">
          We provide high-performance digital solutions by blending creative
          ideas, strategic planning, and flawless execution
        </p>
        <div className="flex max-md:flex-col-reverse ml-0 2xl:ml-[150px] gap-7 md:gap-10 lg:gap-[100px] xl:gap-[168px] justify-center mt-6 sm:mt-10 md:mt-[68px]">
          <div>
            <Image
              src="/img/monitraing-group-img.png"
              width={802}
              height={638}
              alt="monitraing group image"
            />
            <button
              type="submit"
              className="w-[265px] h-[50px] flex justify-center items-center border border-[#F9DD00] rounded-[12px] bg-[#F9DD00] font-montserrat font-bold leading-[93%] text-[16px] text-[#003465] hover:text-[#F9DD00] transition duration-300 ease-in-out mt-5 lg:mt-[84px] hover:bg-transparent max-md:mx-auto md:hidden mb-5"
            >
              More About Sitemoni
            </button>
          </div>

          <div className="md:max-w-[392px] w-full md:mt-[38px] lg:mt-[84px] xl:mt-[158px]">
            <h3 className=" font-montserrat font-black text-[22px] sm:text-[32px] md:text-[40px] leading-[43px] uppercase text-white max-md:text-center ">
              Website Monitoring
            </h3>
            <p className="sm:pt-4 lg:pt-7 font-montserrat font-normal text-[14px] sm:text-[17px] text-white leading-[160%] max-md:text-center ">
              The swiss army knife of monitoring tools for your online business.
            </p>
            <button
              type="submit"
              className="w-[265px] h-[50px] flex justify-center items-center border border-[#F9DD00] rounded-[12px] bg-[#F9DD00] font-montserrat font-bold leading-[93%] text-[16px] text-[#003465] hover:text-[#F9DD00] transition duration-300 ease-in-out mt-5 lg:mt-[84px] hover:bg-transparent max-md:mx-auto max-md:hidden"
            >
              More About Sitemoni
            </button>
          </div>
        </div>
      </div>
      <CyberSecurity />
      <Ecommerce />
      <OurExpertise />
      <LetsTalks />
      <FooterTextDecoration translate="ml-[730px]" />
    </div>
  );
};

export default Products;
