import SeoCards from "@/components/Seo/SeoCards";
import SeoTopHeading from "@/components/Seo/SeoTopHeading";
import Seobg from "@/components/Seo/Seobg";
import Seoline from "@/components/Seo/Seoline";
import Footer from "@/components/common/Footer";
import FooterTextDecoration from "@/components/common/FooterTextDecoration";
import { RingIcon } from "@/components/common/Icons";
import Navbar from "@/components/common/Navbar";
import SocialMediaLastSection from "@/components/socialmedia/SocialMediaLastSection";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO Services | Just Get Visible - Top Digital Agency",
  description:
    "Boost your online visibility with Just Get Visible SEO service. We employ proven strategies to improve search rankings, drive organic traffic, and results.",
};

const Seo = () => {
  return (
    <>
      <Navbar />
      <div className=" bg-[rgba(0,52,101,1)]  overflow-hidden relative">
        <Seobg />
        <div className="max-w-[1437px] 2xl:max-w-[1600px] w-full  mx-auto p-[106px_20px_0] sm:p-[167px_55px_0]">
          <div className=" relative flex flex-col gap-10">
            <SeoTopHeading
              heading="Search Engine Optimisation"
              textSize="sm:text-[11.5vw] text-[12vw] 2xl:text-[10.5vw]"
            />
            <span className="max-sm:[&>*:nth-child(1)]:w-[80px] absolute sm:top-5 -top-7 xl:top-[38%] left-[60%] xl:left-[40%] 2xl:left-[46%]">
              <RingIcon />
            </span>
            <div className="flex flex-col lg:flex-row xl:flex-col xl:max-w-[608px] w-full 2xl:gap-8 xl:absolute -right-14 2xl:-right-9 top-0  xl:-top-0">
              <h3 className=" w-full text-[18px] sm:text-[38px] font-black leading-[130%] text-white text-left uppercase">
                Aimed at getting large volume and quality traffic to your site.
              </h3>
              <p className=" w-full text-[14px] sm:text-[24px] font-bold  text-white leading-[154%]">
                If you’re not optimising for your Google positions, you’re
                simply not competing.
              </p>
            </div>
          </div>
          <div className="flex lg:flex-row z-20 relative flex-col mt-10 justify-between lg:items-center">
            <h3 className="lg:max-w-[53%] w-full text-[18px] sm:text-[40px] font-black leading-[25px] sm:leading-[52px] text-white text-left uppercase">
              We collaborate with our clients to comprehend their current
              business status and their future positioning goals
            </h3>
            <p className="lg:max-w-[37%] w-full text-[14px] sm:text-[24px] font-bold text-white leading-[154%]">
              We analyze both their existing competitors and potential future
              competitors. This enables us to deliver a clear, long-term, and
              measurable campaign strategy.
            </p>
          </div>
          <Seoline
            data={[
              {
                Title: "STRATEGY & ANALYSIS COMPETITOR BENCHMARKING",
                tag: "01",
              },
              { Title: "CONTENT MARKETING & SEEDING", tag: "02" },
              { Title: "ON-SITE & MOBILE OPTIMISATION", tag: "03" },
              { Title: "SOCIAL MEDIA INTEGRATION", tag: "04" },
              { Title: "LINK BUILDING & LINK MARKETING", tag: "05" },
            ]}
          />
          <SeoCards />
          <SocialMediaLastSection />
        </div>
        <FooterTextDecoration translate="ml-[730px]" />
      </div>
      <Footer />
    </>
  );
};
export default Seo;
