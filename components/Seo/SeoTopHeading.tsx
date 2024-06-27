import React from "react";
interface TopHeadingProps {
  heading: string;
  textSize: string;
}
const SeoTopHeading: React.FC<TopHeadingProps> = ({ heading, textSize }) => {
  return (
    <>
      <h1
        className={` font-montserrat font-black ${textSize}  leading-[74%] tracking-[-3px] sm:tracking-[-4px] md:tracking-[-7.24px] uppercase text-[#03498A]`}
      >
        {heading}
      </h1>
    </>
  );
};

export default SeoTopHeading;
