import React from "react";

interface TextProps {
  imagerytext: string;
  typographytext: string;
}

const ImageryTypo: React.FC<TextProps> = ({ imagerytext, typographytext }) => {
  return (
    <div className="w-full  px-[16px] sm:px-[30px] lg:px-[55px] 2xl:px-0">
      {/* the sections of Imagery and typography  */}

      <div className="pt-[90px] sm:pt-[160px] 2xl:pt-[224px]  max-md:flex-col flex justify-center gap-10 sm:gap-5 xl:gap-[55px] 2xl:gap-[161px]">
        {/* imagery section  */}
        <div className="md:max-w-[655px] w-full ">
          <h2 className="text-white  font-Montserrat text-[22px] sm:text-3xl lg:text-[40px] font-black uppercase leading-[93.083%]">
            The Imagery
          </h2>

          <p className="text-white  font-Montserrat font-medium text-sm lg:text-lg leading-[160%] pt-2 md:pt-4 lg:pt-8 xl:pt-14 ">
            {imagerytext}
          </p>
        </div>

        {/* typography section  */}
        <div className="md:max-w-[695px] m w-full">
          <h2 className="text-white  font-Montserrat text-[22px] sm:text-3xl lg:text-[40px] font-black uppercase leading-[93.083%]">
            Typography
          </h2>

          <p className=" w-full text-white  font-Montserrat font-medium text-sm lg:text-lg leading-[160%] pt-2 md:pt-4 lg:pt-8 xl:pt-14 ">
            {typographytext}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImageryTypo;
