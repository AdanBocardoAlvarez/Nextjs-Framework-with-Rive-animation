import React from "react";
import Para from "./SeoPara";
import Heading from "./SeoHeading";
import { LineIcons } from "../common/Icons";

const SeoCards = () => {
  return (
    <>
      <div className="  relative max-2xl:px-3 py-[180px] flex flex-col lg:gap-[125px] md:gap-[80px] gap-[45px] max-xl:py-[120px] max-lg:py-[80px] max-md:py-[50px] ">
        <div className=" absolute top-[28%] left-[-6%]">
          <LineIcons />
        </div>
        <div
          className={`max-w-[1499px] relative w-full bg-white pl-[65px] max-2xl:pl-[30px] max-md:pl-[30px] max-sm:pl-[10px] pr-[10px] rounded-[12px] flex  gap-[30px] py-[115px] max-lg:py-[90px] max-md:py-[60px] max-sm:py-[30px]  max-xl:flex-col mx-auto`}
        >
          <div className=" max-w-[660px] max-xl:mx-auto w-full ">
            <Heading Heading="1. Digital Marketing Strategy" />
            <Para
              Para=""
              Para1="One of our top digital marketing services, our strategy work equips your team with the necessary tools to propel your marketing efforts forward. While often paired with the launch of a new website, a digital marketing strategy also empowers your marketing team, whether or not a new website is involved."
            />
          </div>
          {/* yellow-card */}
          <div className="xl:absolute max-xl:mx-auto right-5 2xl:right-[80px] lg:py-[117px] sm:py-[70px] py-[40px] md:pr-[48px] px-[25px] lg:pl-[97px] pl-[55px] top-[-79px] max-w-[544px] w-full  bg-[#F9DD00] rounded-[12px]  max-xl:-mt-0 ">
            <p className=" max-w-[398px]  w-full text-[22px] flex flex-col gap-[25px] max-sm:gap-[15px] text-[#003465] font-bold leading-[160%] max-sm:text-[14px] ">
              <span className=" uppercase text-[32px] font-black max-sm:text-[23px] ">
                We'll complete:
              </span>
              - Compteitor analysis <br /> - Benchmark existing SEO performance
              <br /> -Keyword research <br />- Keyword recommendations - Digital
              marketing strategy to achieve business goals
            </p>
          </div>
          {/* yellow-card */}
        </div>
        {/* card2 */}
        <div
          className={`max-w-[1499px]  relative w-full bg-white  pl-[65px] max-2xl:pl-[30px] max-md:pl-[30px] max-sm:pl-[10px] pr-[10px] rounded-[12px] flex  gap-[30px] py-[64px] max-lg:py-[54px] max-md:py-[44px] max-sm:py-[30px]  max-xl:flex-col mx-auto `}
        >
          <div className=" max-w-[660px] max-xl:mx-auto w-full ">
            <Heading Heading="2. SEO Audity" />
            <Para
              Para=""
              Para1="We collaborate closely with your marketing team to conduct a thorough SEO audit, scrutinizing website structure, content, keywords, and backlinks."
            />
            <Para
              Para=""
              Para1="Using the audit findings, we tailor a strategy to boost your search engine visibility and organic traffic, constantly refining our approach for maximum impact and measurable results."
            />
          </div>
          {/* yellow-card */}
          <div className="  xl:absolute max-xl:mx-auto right-5 2xl:right-[80px] flex flex-col justify-center top-[-79px] max-w-[544px] w-full py-[50px]  pl-[75px] lg:pr-[82px] md:pr-[60px] pr-[25px] max-sm:pl-[20px] bg-[#F9DD00] rounded-[12px]  max-xl:-mt-0 ">
            <p className=" max-w-[398px] align-text-top w-full text-[22px] flex flex-col gap-[25px] max-sm:gap-[15px] text-[#003465]  font-bold leading-[160%] max-sm:text-[14px] ">
              <span className="uppercase text-[32px] font-black max-sm:text-[23px] ">
                An SEO audit will typically include:
              </span>
              - A review of existing SEO performance <br /> - On-page SEO
              recommendations <br /> - Technical SEO audit <br /> - Speed & Core
              Web Vitals review <br /> - Actions that can be undertaken to
              improve SEO performance <br /> - Process recommendations to ensure
              compliance with SEO best practice
            </p>
          </div>
          {/* yellow-card */}
        </div>
        {/* card3 */}
        <div
          className={`max-w-[1499px] xl:mt-[120px] relative w-full bg-white  pl-[65px] max-2xl:pl-[30px] max-md:pl-[30px] max-sm:pl-[10px] pr-[10px] rounded-[12px] flex  gap-[30px] py-[79px] max-lg:py-[54px] max-md:py-[44px] max-sm:py-[30px]  max-xl:flex-col m mx-auto `}
        >
          <div className=" max-w-[660px]  max-xl:mx-auto w-full ">
            <Heading Heading="3. Digital Marketing Retainer" />
            <Para
              Para=""
              Para1=" Our strategy work, one of our most popular digital marketing services, equips your team with the tools to advance your marketing efforts."
            />
            <Para
              Para1=""
              Para="We achieve this by utilizing the marketing channels that offer the highest return for your business."
            />
          </div>
          {/* yellow-card */}
          <div className=" xl:absolute max-xl:mx-auto right-5 2xl:right-[80px] py-[68px] pl-[73px] pr-[122px]  top-[-50px] max-w-[544px] w-full  bg-[#F9DD00] rounded-[12px]  max-xl:-mt-0 ">
            <p className=" max-w-[398px] lg:h-[406px] md:h-[306px] sm:h-[206px] h-[150px] align-text-top w-full text-[22px] flex flex-col gap-[25px] max-sm:gap-[15px] text-[#003465] font-bold leading-[160%] max-sm:text-[14px] ">
              <span className="uppercase text-[32px] font-black max-sm:text-[23px] ">
                We'll complete:
              </span>
              - Compteitor analysis
              <br />- Benchmark existing SEO performance
              <br /> - Keyword research
              <br /> - Keyword recommendations
              <br /> - Digital marketing strategy to achieve business goals
            </p>
          </div>
          {/* yellow-card */}
        </div>
      </div>
    </>
  );
};

export default SeoCards;
