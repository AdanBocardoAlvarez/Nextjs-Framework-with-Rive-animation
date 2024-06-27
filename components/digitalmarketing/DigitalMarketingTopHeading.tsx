import React from "react";
interface TopHeadingProps {
  heading: string;
  textSize: string;
}
const DigitalMarketingTopHeading: React.FC<TopHeadingProps> = ({
  heading,
  textSize,
}) => {
  return (
    <>
      <h1
        className={` font-montserrat font-black ${textSize} leading-[75%] tracking-[-3px] sm:tracking-[-4px] 2xl:tracking-[-27.467px] uppercase text-[#03498A]`}
      >
        {heading}
      </h1>
    </>
  );
};

export default DigitalMarketingTopHeading;
