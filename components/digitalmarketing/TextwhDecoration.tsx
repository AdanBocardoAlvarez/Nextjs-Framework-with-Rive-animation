import React from "react";
import Image from "next/image";
import DigitalMarketingTopHeading from "./DigitalMarketingTopHeading";
const TextwhDecoration: React.FC = () => {
  return (
    <div className=" relative flex flex-col  pb-[90px] sm:pb-[100px]">
      <div className="w-full">
        <DigitalMarketingTopHeading
          heading="Digital Marketing"
          textSize="text-[14.5vw]  2xl:text-[13.8vw]"
        />
        <Image
          width={2904}
          height={56}
          alt="pen decoration"
          src="/img/arrow.svg"
          className=" absolute bottom-[90px] right-[58%]"
        />
      </div>
      <div className="w-full flex justify-end xl:absolute ">
        <div className=" leading-[23px] sm:leading-[31.2px] text-white z-10 relative max-w-[581px] pt-2 xl:pt-[42px] text-[14px] sm:text-[18px] 2xl:text-[24px] font-bold">
          We know the digital marketing landscape can be complex, but we
          simplify it for you. Success online hinges on how you present your
          business. We create integrated campaigns that deliver tangible
          results, ensuring your satisfaction and helping your business grow,
          thrive, and stand out.
        </div>
      </div>
    </div>
  );
};
export default TextwhDecoration;
