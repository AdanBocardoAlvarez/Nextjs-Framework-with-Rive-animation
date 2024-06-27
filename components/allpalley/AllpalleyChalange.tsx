import Image from "next/image";
import React from "react";

const AllyPallyChalange = () => {
  return (
    <div className="w-full  mt-[-1px]">
      <div className="bg-[url('/img/the-challenge-bg.png')] bg-no-repeat bg-top bg-cover pt-[110px] sm:pt-[100px] md:pt-[170px] lg:pt-[230px] px-4 sm:px-[30px] lg:px-[55px] 2xl:px-0">
        <div className="max-w-[1502px] w-full flex max-lg:flex-col items-center justify-between gap-10 md:gap-5 mx-auto">
          <div className="max-w-[757px] w-full flex flex-col gap-[16px] sm:gap-[30px] md:gap-[56px] max-lg:text-center">
            <div>
              <h2 className="text-[#003465] max-sm:mt-10  font-montserrat text-[30px] sm:text-[40px] font-black leading-[93%] uppercase">
                The Challenge
              </h2>
              <p className="text-[#003465] text-start font-montserrat text-[14px] md:text-[16px] xl:text-[18px] font-medium leading-[120%] xl:leading-[160%] flex flex-col gap-3 mt-[12px] md:mt-[23px]">
                The existing brand lacked differentiation and failed to
                encapsulate the vibrant essence of Ally Pally. Our task was to
                reimagine the brand, infusing it with personality and
                positioning it as a premier grooming destination in the
                community.
              </p>
            </div>
            <div>
              <h2 className="text-[#003465] max-sm:mt-5 font-montserrat text-[30px] sm:text-[40px] font-black leading-[93%] uppercase">
                The Inspiration
              </h2>
              <p className="text-[#003465] text-start font-montserrat text-[14px] md:text-[16px] xl:text-[18px] font-medium leading-[120%] xl:leading-[160%] flex flex-col gap-3 mt-[12px] md:mt-[23px]">
                We began by doing a thorough research and analysis to understand
                the market situation, the competitors, and the customer
                expectations. We also talked to the founders and staff of
                Franzos to understand their vision, values, and goals. Based on
                our findings, we created a brand strategy that outlined the core
                elements of Franzos’ identity: their mission statement, value
                proposition, brand personality, tone of voice, and target
                audience.
              </p>
            </div>
          </div>
          <div className="bg-[#F9DD00] rounded-[8.267px] max-w-[622px] lg:max-w-[450px] xl:max-w-[622px] w-full h-[270px] md:h-[353px] lg:h-[250px] xl:h-[353px] rotate-2 lg:rotate-[3.219deg] flex items-center justify-center p-3 sm:p-4 2xl:p-[107px_49px_93px_106px]">
            <div className="-rotate-[3.219deg] flex items-start justify-center gap-[8px] md:gap-[29px]">
              <div className="flex flex-col items-start justify-start gap-[16px] md:gap-[25px]">
                <p className="text-[#003465] font-montserrat text-[16px] md:text-[18px] lg:text-[21px] font-black leading-[130%] uppercase">
                  Scope:
                </p>
                <div className="text-[#003465] font-montserrat text-[13px] md:text-[16px] font-normal leading-[130%] max-sm:min-w-[120px] w-full">
                  <p>Logo & Brand identity</p>
                  <p>Signage</p>
                  <p>Barber Apron</p>
                  <p>T-Shirt</p>
                  <p>Business Card</p>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[16px] md:gap-[25px]">
                <p className="text-[#003465] font-montserrat text-[16px] md:text-[18px] lg:text-[21px] font-black leading-[130%] uppercase">
                  Resources:
                </p>
                <div className="text-[#003465] font-montserrat text-[13px] md:text-[16px] font-normal leading-[130%] ">
                  <p>1 x Creative Director</p>
                  <p>2 x Graphic Designer</p>
                  <p>1 x Brand Strategist</p>
                  <p>1 x Digital Marketing Specialist</p>
                  <p>1 x Project Manager</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center mt-[60px] md:mt-10   justify-center max-w-[1502px] w-full mx-auto gap-5 lg:gap-7 translate-y-10 sm:translate-y-20">
          <Image
            src="/img/ally-palley-chalange.svg"
            alt="image-1"
            width={1502}
            height={732}
          />
          <Image
            src="/img/ally-palley-chalange-1.svg"
            alt="image-1"
            width={1502}
            height={732}
          />
        </div>
      </div>
    </div>
  );
};

export default AllyPallyChalange;
