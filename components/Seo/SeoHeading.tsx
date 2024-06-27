import React from "react";
interface head {
  Heading: string;
}
const SeoHeading: React.FC<head> = ({ Heading }) => {
  return (
    <div>
      <h1
        className="  text-[#003465] text-[35px] uppercase font-black leading-[93.083%] 
        pb-[43px] font-Montserrat max-xl:text-center max-md:text-[14px] max-sm:pb-[20px] "
      >
        {Heading}
      </h1>
    </div>
  );
};

export default SeoHeading;
