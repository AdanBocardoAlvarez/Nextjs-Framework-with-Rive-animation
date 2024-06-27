import React from "react";
import Head from "next/head";

import Image from "next/image";
import BackImageDecoration from "../common/BackImageDecoration";
import { identity, portfolioData, strategy } from "../common/Helper";
import WeAreComponent from "./WeAreComponent";
import BrandingPresentation from "../common/BrandingPresentation";
import BrandingLine from "../common/BrandingLine";
import OurWorkComponent from "./OurWorkComponent";
import LetsTalks from "../Product/LetsTalks";
import FooterTextDecoration from "../common/FooterTextDecoration";
export default function AllBranding() {
  return (
    <div className=" bg-[rgba(0,52,101,1)]  overflow-hidden relative">
      <BackImageDecoration />
      <div className="max-w-[1437px] 2xl:max-w-[1600px] w-full  mx-auto pb-24 px-4 md:px-[30px] xl:px-[55px]  pt-[120px] sm:pt-[182px] xl:pt-[167px]">
        <h1 className=" text-center xl:-mb-[100px] text-[#03498A] font-black lg:text-[16.6vw] text-[14vw] 2xl:text-[14.3vw] leading-[100%] 2xl:leading-[93.1%] lg:tracking-[-16px] uppercase ">
          Branding
        </h1>
        <BrandingPresentation
          data={{
            Title: "A highly creative and analytical approach to branding",
            text: "Take your brand to the next level",
          }}
        />
        <BrandingLine
          data={[
            { Title: "RESEARCH" },
            { Title: "LOGO" },
            { Title: "STYLE GUIDE" },
            { Title: "BRAND BIBLE" },
          ]}
        />
        <div className="flex lg:flex-row flex-col justify-between lg:items-end">
          <h3 className="lg:max-w-[61%] w-full text-[18px] sm:text-[40px] font-black leading-[25px] sm:leading-[52px] text-white text-left uppercase">
            Branding is more important than ever for businesses because it
            shapes how customers perceive and remember your company{" "}
          </h3>
          <p className="lg:max-w-[37%] w-full text-[14px] sm:text-[18px] text-white leading-[28.8px] ">
            Your branding should be clearly defined and thoughtfully designed to
            distinguish you from competitors. It needs to create a unique
            identity that resonates with customers, effectively communicating
            your business's values, personality, and mission. When done
            correctly, strong branding fosters trust and loyalty, enhances
            customer relationships, and ultimately drives business success and
            growth.
          </p>
        </div>
        <div className="grid w-full grid-cols-1 gap-9 max-sm:mt-10   mx-auto sm:grid-cols-2 pb-[166px] sm:p-[166px_0]">
          {portfolioData.map((info, index) => (
            <OurWorkComponent key={index} data={info.data} />
          ))}
        </div>
        <div className="bg-white rounded-lg sm:rounded-[68px] p-6 sm:p-10 xl:p-[112px_10px_112px_112px] text-[#003465] relative rotate-[1.9deg]">
          <h3 className="xl:text-[80px] text-[32px] sm:text-[54px] font-black leading-[93.1%] max-w-[658px] sm:mb-[70px] sm:absolute top-[-22px] xl:top-[-85px] bg-white sm:p-[30px_40px] max-xl:rotate-[-1.9deg] xl:p-[85px_100px] rounded-[68px] left-0 ">
            <p className=" xl:rotate-[-1.9deg]">{identity.Title}</p>
          </h3>
          <div className="flex flex-col lg:flex-row justify-between rotate-[-1.9deg]">
            <div>
              <p className="xl:text-[18px] text-[16px] font-medium leading-[160%] mb-[35px] xl:mb-[65px] pt-4 sm:pt-10  xl:pt-[70px]">
                {identity.Text}
              </p>
              <div className="flex text-[18px] font-bold">
                <ul className="pl-0">
                  {identity.firstList.map((item, index) => (
                    <div className="mb-[10px] leading-[20px]" key={index}>
                      - {item.Text}
                    </div>
                  ))}
                </ul>
                <ul className="pl-[41px]">
                  {identity.secondList.map((item, index) => (
                    <div className="mb-[10px] leading-[20px]" key={index}>
                      - {item.Text}
                    </div>
                  ))}
                </ul>
              </div>
            </div>
            <Image
              src="img/Frame 92 (1).svg"
              width={582}
              height={404}
              alt="frangoz"
            />
          </div>
        </div>
        <div className="bg-[#3D7BB5] px-4 py-8 sm:p-20 rounded-lg sm:rounded-[68px] lg:p-[230px_112px_122px] lg:rotate-[-0.92deg] relative mt-[100px] 2xl:mt-[70px]">
          <Image
            src="/img/branding-border-line.png"
            width={5}
            height={633}
            alt="line"
            className="absolute top-[430px] xl:top-[400px] max-xl:hidden xl:left-[17%] 2xl:left-[15%] z-[-1] max-xl:h-[47%] max-2xl:h-[50%]  lg:rotate-[0.92deg] max-lg:hidden"
          />
          <h3 className="lg:max-w-[933.24px] max-w-[600px] sm:absolute top-[-90px] lg:top-[-100px] left-0 font-black leading-[93.1%] text-[28px] sm:text-[44px] lg:text-[50px] xl:text-[60px] 2xl:text-[80px] text-white bg-[#3D7BB5] rounded-[68px] sm:p-[40px_80px] lg:p-[60px_116px_0]">
            <p className=" lg:rotate-[0.92deg]">{strategy.Title}</p>
          </h3>
          <div className="mt-10 lg:rotate-[0.92deg]">
            <p className="max-w-[569px] leading-[160%] font-medium text-[#fff] mb-3 lg:absolute lg:top-[-200px] right-[-20px] text-[14px] lg:text-[16px] xl:text-[18px]">
              {strategy.Text}
            </p>
            <>
              {strategy.phaseList.map((data, index) => {
                console.log(data, "trategy.phaseList");
                return (
                  <div
                    key={index}
                    className="flex max-lg:flex-col max-2xl:mt-4 text-white"
                  >
                    <div className=" w-full lg:max-w-[346px] max-lg:flex max-lg:flex-col-reverse items-start justify-start h-full">
                      <h3 className="text-[27px] sm:text-[30px] lg:text-[40px] font-black text-[#F9DD00] leading-[93.3%] lg:mb-[12px] uppercase  lg:z-50 max-lg:order-2">
                        PHASE {index + 1}
                      </h3>
                      <h4 className="text-[30px] sm:text-[35px] lg:text-[48px] font-black text-[#fff] leading-[93.3%] lg:mb-[12px] uppercase  lg:z-50 max-lg:order-1">
                        {data.Title}
                      </h4>
                      <Image
                        alt="decoration"
                        width={69}
                        height={69}
                        src="/img/Frame 43363 (1).svg"
                        className="mb-3 lg:mb-[158px] lg:z-30 lg:ml-[60px] xl:ml-[79px] max-lg:order-3 max-sm:w-10 max-sm:h-10"
                      />
                    </div>
                    <div className="w-full max-lg:flex flex-col gap-2">
                      <div className="max-w-[874px] w-full">
                        <span className="text-white text-[18px] font-bold leading-[160%]">
                          {data.Description}
                        </span>
                      </div>
                      <div className="flex gap-1.5 max-2xl:flex-wrap justify-between w-full mt-[26px]">
                        {data.dataList.map((info, index) => (
                          <div
                            key={index}
                            className="max-lg:flex items-start justify-start flex-col max-w-[323px]  text-white text-[14px] font-bold leading-[160%]"
                          >
                            {info.list.map((list, index) => (
                              <div key={index}>- {list.text}</div>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </>
          </div>
        </div>
        <LetsTalks />
      </div>

      <Head>
        <title>
          Branding Services | Define Your Identity in the Digital World
        </title>
        <meta
          name="description"
          content="Elevate your brand with branding services. Our expert solutions help you define your identity and stand out in the competitive digital landscape."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FooterTextDecoration translate="ml-[730px]" />
    </div>
  );
}
