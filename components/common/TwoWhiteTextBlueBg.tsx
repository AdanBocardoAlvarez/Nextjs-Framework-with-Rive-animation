import React from "react";

interface TwoWhiteTextBlueBgProps {
  imagerytext: any;
  typographytext: any;
}

const TwoWhiteTextBlueBg: React.FC<TwoWhiteTextBlueBgProps> = ({
  imagerytext,
  typographytext,
}) => {
  return (
    <div className="flex max-md:flex-col justify-center gap-5 xl:gap-[55px] 2xl:gap-[161px] font-Montserrat text-white">
      {/* Imagery */}
      <div className="md:max-w-[645px] w-full">
        <h2 className="text-[22px] sm:text-3xl lg:text-[40px] font-black uppercase leading-[93.083%]">
          The Imagery
        </h2>

        <p className="font-medium text-sm lg:text-lg leading-[160%] pt-2 md:pt-4 lg:pt-8 xl:pt-14">
          {imagerytext}
        </p>
      </div>

      {/* Typography */}
      <div className="md:max-w-[695px] w-full">
        <h2 className="text-white  font-Montserrat text-[22px] sm:text-3xl lg:text-[40px] font-black uppercase leading-[93.083%]">
          Typography
        </h2>
        <p className=" w-full text-white  font-Montserrat font-medium text-sm lg:text-lg leading-[160%] pt-2 md:pt-4 lg:pt-8 xl:pt-14 ">
          {typographytext}
        </p>
      </div>
    </div>
  );
};

export default TwoWhiteTextBlueBg;
