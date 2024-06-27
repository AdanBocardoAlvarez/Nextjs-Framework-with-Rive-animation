import React from "react";

interface ShortHeadWithParaTextProps {
  textColor: string;
  heading: string;
  subHeading: string;
  maxWidth: number;
}

const ShortHeadWithParaText: React.FC<ShortHeadWithParaTextProps> = ({
  textColor,
  heading,
  subHeading,
  maxWidth,
}) => {
  return (
    <div
      style={{ color: textColor }}
      className="w-full flex flex-col items-center justify-center gap-5 sm:gap-7 md:gap-10 
      lg:gap-[56px]"
    >
      <h2
        className="text-2xl sm:text-[40px] font-black leading-[93.083%]
           uppercase"
      >
        {heading}
      </h2>
      <p
        style={{ maxWidth: maxWidth }}
        className="w-full text-sm sm:text-lg font-medium leading-[160%]"
      >
        {subHeading}
      </p>
    </div>
  );
};

export default ShortHeadWithParaText;
