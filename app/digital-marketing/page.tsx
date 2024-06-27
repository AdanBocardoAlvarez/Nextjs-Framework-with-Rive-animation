import React from "react";
import Head from "next/head";
import BackImageDecoration from "@/components/common/BackImageDecoration";
import TextwhDecoration from "@/components/digitalmarketing/TextwhDecoration";
import MarketingInfo from "@/components/digitalmarketing/MarketingInfoCont";
import FooterTextDecoration from "@/components/common/FooterTextDecoration";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing Services | Elevate Your Online Presence",
  description:
    "Discover the power of digital marketing with Just Get Visible. Our expert services enhance your online presence, drive engagement, and deliver results",
};

export default function DigitalMarketing() {
  return (
    <>
      <Navbar />
      <div className=" bg-[rgba(0,52,101,1)] overflow-hidden w-full relative">
        <BackImageDecoration />
        <div className="w-full max-w-[1437px] 2xl:max-w-[1615px] mx-auto   px-4 sm:px-7  xl:px-[55px] pt-[120px] md:pt-[182px] xl:pt-[167px]">
          <TextwhDecoration />
          <div className="grid md:grid-cols-2 w-fit mx-auto xl:grid-cols-3 gap-4 2xl:gap-[100px] justify-between">
            <MarketingInfo
              Title="Search Engine Optimisation"
              text="Creating and delivering customized strategies that work for your unique business needs requires a structured approach, disciplined execution, and a deep understanding of SEO."
              btnText="View our SEO Solutions"
              href="/seo"
            />{" "}
            <MarketingInfo
              Title="Social Media"
              text="Drive the online conversation about your business by cultivating lasting relationships with your customers through strategic engagement and meaningful interactions."
              btnText="About Social Media"
              href="/social-media"
            />{" "}
            <MarketingInfo
              Title="Pay Per Click"
              text="Google PPC campaigns provide immediate visibility and attract targeted traffic, seamlessly complementing your SEO to enhance authority and industry leadership."
              btnText="About PPC"
              href="#"
            />
            <Head>
              <title>
                Digital Marketing Services | Elevate Your Online Presence
              </title>
              <meta
                name="description"
                content="Discover the power of digital marketing with Just Get Visible. Our expert services enhance your online presence, drive engagement, and deliver results in today's competitive digital landscape."
              />
            </Head>
          </div>
          <h3
            data-aos-duration="10"
            data-aos="fade-up"
            className="text-center uppercase font-black text-[16px] sm:text-[24px] md:text-[40px] leading-[130%] text-white max-w-[850px] w-full mx-auto my-20 lg:mt-[199px] lg:mb-[268px]"
          >
            Increase lead generation and sales with our proven strategies and
            cross-sector insights
          </h3>
        </div>
        <FooterTextDecoration translate="ml-0 2xl:-ml-[400px]" />
      </div>
      <Footer />
    </>
  );
}
