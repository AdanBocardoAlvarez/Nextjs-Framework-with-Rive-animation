import Image from "next/image";
import React from "react";

const TheChallange = () => {
  return (
    <div className="bg-[url('/img/the-challenge-bg.png')] bg-no-repeat bg-center bg-cover -mt-10 xl:-mt-32  px-4 md:px-7 xl:px-[55px] 2xl:px-0">
      <div className="max-w-[1502px] w-full pt-[200px] xl:pt-[305px] flex max-lg:flex-col items-center justify-between gap-10 md:gap-5 mx-auto">
        <div className="max-w-[757px] w-full flex flex-col gap-[30px] sm:gap-[56px] max-lg:text-center">
          <h2 className="text-[#003465] font-montserrat text-[30px] sm:text-[40px] font-black leading-[93%] uppercase">
            The Challenge
          </h2>
          <div className="text-[#003465] font-montserrat text-[14px] md:text-[16px] xl:text-[18px] font-medium text-start leading-[120%] xl:leading-[160%] flex flex-col gap-3 ">
            <p>
              Franzos had a clear vision of what they wanted to achieve: to
              become a leading franchise in the UK, offering delicious
              flame-grilled piri piri chicken and burgers to customers of all
              ages and backgrounds. But to realize this vision, Franzos needed a
              brand identity that would stand out from the crowd, convey their
              personality and purpose, and appeal to their target audience.
            </p>
            <p>
              Franzos had an existing logo and name, but they were not
              distinctive or memorable enough. They also lacked a consistent
              visual language and communication style across their materials and
              platforms. They needed a brand identity that would capture the
              essence of their cuisine, create a unique and memorable experience
              for their customers, and support their franchise expansion.
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
                <p>Brand Identity</p>
                <p>Brand Strategy</p>
                <p>Brand Collateral</p>
                <p>Brand Guidelines</p>
                <p>Packaging Design</p>
                <p>Website Design</p>
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
      <div className="flex flex-col items-center justify-center max-w-[1502px] w-full mx-auto gap-5 lg:gap-7 translate-y-[60px] sm:translate-y-20 md:translate-y-[100px] lg:translate-y-[133px]">
        <Image
          src="/img/the-challenge-image-1.svg"
          alt="image-1"
          width={1502}
          height={732}
        />
        <div className="flex items-center justify-center w-full max-sm:flex-col max-sm:gap-5">
          <Image
            src="/img/the-challenge-image-2.svg"
            alt="image-1"
            width={751}
            height={732}
            className="max-sm:w-[100%] max-2xl:w-[50%] max-sm:h-auto max-sm:max-h-[400px] rounded-[16px] sm:rounded-[36px_0px_0px_36px]"
          />
          <Image
            src="/img/the-challenge-image-3.svg"
            alt="image-1"
            width={751}
            height={732}
            className="max-sm:w-[100%] max-2xl:w-[50%] max-sm:h-auto max-sm:max-h-[400px]  -ml-1 rounded-[16px]  sm:rounded-[0px_36px_36px_0px]"
          />
        </div>
      </div>
    </div>
  );
};

export default TheChallange;
