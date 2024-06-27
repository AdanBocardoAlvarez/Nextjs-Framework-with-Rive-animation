import Image from "next/image";
import React from "react";

interface TwoCardWithImgYellowTextProps {
  logotext: string;
  colorpallatetext: string;
  logotextImgUrl: any;
  colorpallatetextImgUrl: any;
}

const TwoCardWithImgYellowText: React.FC<TwoCardWithImgYellowTextProps> = ({
  logotext,
  colorpallatetext,
  logotextImgUrl,
  colorpallatetextImgUrl,
}) => {
  return (
    <div className="max-w-[1501px] w-full mx-auto flex max-sm:flex-col gap-4 lg:gap-[27px] text-[#003465]">
      {/* Logo section  */}
      <div className="max-w-[737px] w-full rounded-xl bg-[#F9DD00] max-lg:mx-auto overflow-hidden">
        <Image
          src={logotextImgUrl}
          alt="ally_hair_salon"
          width={737}
          height={361}
        />
        <div className="p-4 sm:p-5 lg:p-[50px_40px_20px_40px] 2xl:p-[85px_70px_58px_71px]">
          <h2 className="font-Montserrat text-[18px] sm:text-[22px] md:text-2xl lg:text-[32px] font-black uppercase leading-[93.083%]">
            Logo
          </h2>

          <p className="w-full font-Montserrat font-normal text-sm lg:text-lg leading-[160%] pt-5 lg:pt-[30px]">
            {logotext}
          </p>
        </div>
      </div>

      {/* Colour Palette section  */}
      <div className="max-w-[736px] w-full rounded-xl bg-[#F9DD00] max-lg:mx-auto">
        <Image
          src={colorpallatetextImgUrl}
          alt="ally_colourpallte"
          width={736}
          height={361}
        />
        <div className="p-4 sm:p-5 lg:p-[50px_40px_20px_40px] 2xl:p-[85px_70px_58px_71px]">
          <h2 className="font-Montserrat text-[22px] sm:text-2xl lg:text-[32px] font-black uppercase leading-[93.083%]">
            Colour palette
          </h2>

          <p className="w-full font-Montserrat font-normal text-sm lg:text-lg leading-[160%] pt-5 lg:pt-[30px]">
            {colorpallatetext}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TwoCardWithImgYellowText;
