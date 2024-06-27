import React from "react";
interface TopHeadingProps {
  heading: string;
  textSize: string;
}
const TopHeading: React.FC<TopHeadingProps> = ({ heading, textSize }) => {
  return (
    <>
      <h1
        className={` font-montserrat font-black ${textSize} text-center leading-[93%] tracking-[-3px] sm:tracking-[-4px] md:tracking-[-7.24px] uppercase text-[#03498A]`}
      >
        {heading}
      </h1>
    </>
  );
};

export default TopHeading;
