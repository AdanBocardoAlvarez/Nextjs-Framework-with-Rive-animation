import BackImageDecoration from "@/components/common/BackImageDecoration";
import Footer from "@/components/common/Footer";
import FooterHeading from "@/components/common/FooterHeading";
import FooterTextDecoration from "@/components/common/FooterTextDecoration";
import { franzosHeroData } from "@/components/common/Helper";
import Navbar from "@/components/common/Navbar";
import TopHeading from "@/components/common/TopHeading";
import FranzosHero from "@/components/franzos/FranzosHero";
import Illustration from "@/components/franzos/Illustration";
import RelatedWork from "@/components/franzos/RelatedWork";
import TheChallange from "@/components/franzos/TheChallange";
import TheOutCome from "@/components/franzos/TheOutCome";
import TheProcess from "@/components/franzos/TheProcess";
import React from "react";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Branding Franzos | Revamping Identity & Driving Growth',
  description: 'Discover our case study on branding Franzos. Learn how we revitalised their identity, fuelling growth and success in the competitive fast-food industry.',
}

const Franzos = () => {
  return (
    <>
      <Navbar />
      <div className="bg-[#003465] w-full overflow-hidden relative bg-hero_bg bg-no-repeat">
        <BackImageDecoration />
        <div className="max-w-[1567px] w-full mx-auto px-4 md:px-7 xl:px-[55px] 2xl:px-0 pt-[110px] md:pt-[182px] xl:pt-[167px]">
          <div className="w-fit mx-auto relative z-10 mb-[-5%] sm:mb-[-35px] md:mb-[-40px] xl:mb-[-68px]">
            <TopHeading
              heading="Franzos"
              textSize="text-[18vw] 2xl:text-[15.5vw]"
            />
            <p className=" absolute top-[40%] lg:top-[50%] left-1/2 -translate-x-1/2 font-montserrat font-semibold text-[14px] sm:text-[18px] md:text-[24px] lg:text-[28px] xl:text-[32px] text-center text-white leading-[93%] uppercase ml-2">
              Branding
            </p>
          </div>
          <p className="max-w-[1019px] w-full mx-auto font-montserrat font-black text-white text-center text-[16px] sm:text-[20px] md:text-[24px] lg:text-[32px] xl:text-[40px] leading-[130%] uppercase z-20 relative">
            A fresh brand identity for a flame grilled chicken restaurant that
            sizzles
          </p>
          <FranzosHero data={franzosHeroData} />
        </div>
        <TheChallange />
        <TheProcess />
        <Illustration />
        <TheOutCome />
        <RelatedWork />
        <FooterTextDecoration translate="ml-[730px]" />
      </div>
      <Footer />
    </>
  );
};

export default Franzos;
