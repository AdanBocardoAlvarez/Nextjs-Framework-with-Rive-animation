import Footer from "@/components/common/Footer";
import FooterHeading from "@/components/common/FooterHeading";
import { CookiesMapData } from "@/components/common/Helper";
import Navbar from "@/components/common/Navbar";
import TopHeading from "@/components/common/TopHeading";
import React from "react";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookies Policy | Understanding Our Website Cookie Usage',
  description: 'Learn about the cookies used on Just Get Visible website. Our cookies policy explains how we utilise cookies to enhance user experience and improve site.',
}

const CookiesPrivacyPolicy = () => {
  return (
    <>
      <Navbar />
      <div className="bg-[#003465] relative bg-[url(/img/cookiesbg.png)] bg-no-repeat">
        <div className="max-w-[1615px] w-full mx-auto xl:pt-[167px] sm:mt-[182px] pt-[120px] px-4 sm:px-7 xl:px-[55px]">
          <h1 className="text-[#03498A] text-center font-montserrat text-[9vw] xl:text-[11.5vw] 2xl:text-[9.5vw] whitespace-nowrap font-black leading-[75%]  uppercase  lg:tracking-[-10px] xl:tracking-[-15px]">
            Cookies Policy
          </h1>
          {/* <TopHeading heading="Cookies Policy" /> */}
          <div className="flex flex-col gap-6 sm:gap-8 lg:gap-[105px] pt-10 md:pt-[61px]">
            {CookiesMapData.map((item, index) => (
              <div
                key={index}
                className="flex max-lg:flex-col gap-3  sm:gap-5 justify-between"
              >
                <h1 className="text-white font-montserrat text-xl sm:text-[24px] md:text-[28px] lg:text-[40px] font-semibold sm:font-black leading-[130%] uppercase max-w-[537px] w-full sm:py-3">
                  {item.heading}
                </h1>
                <div className="text-white font-montserrat text-base sm:text-lg font-normal leading-[160%] flex flex-col gap-4 max-w-[849px] w-full sm:py-2">
                  {item.description.map((desc: any, descIndex: number) => (
                    <div key={descIndex}>
                      <p>{desc.text}</p>
                      {desc.details && (
                        <ul className="list-disc max-lg:list-inside">
                          {desc.details.map(
                            (detail: any, detailIndex: number) => (
                              <li key={detailIndex}>{detail}</li>
                            )
                          )}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <FooterHeading />
      </div>
      <Footer />
    </>
  );
};

export default CookiesPrivacyPolicy;
