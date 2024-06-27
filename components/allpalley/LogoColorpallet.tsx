import Image from "next/image";
import React from "react";

interface LogoColorpalletProps {
  logotext: string;
  colorpallatetext: string;
}

const LogoColorpallet: React.FC<LogoColorpalletProps> = ({
  logotext,
  colorpallatetext,
}) => {
  return (
    <div className="w-full  px-[16px] sm:px-[30px] lg:px-[55px] 2xl:px-0">
      <div className="max-w-[1500px] w-full mx-auto flex gap-[16px] lg:gap-[27px] max-sm:flex-col pt-10 sm:pt-16 lg:pt-28 2xl:pt-[173px]">
        {/* logo section  */}
        <div className="max-w-[737px] w-full 2xl:h-[772px] rounded-xl bg-[#F9DD00] max-lg:mx-auto">
          <Image
            src="/img/ally_hair_salon.svg"
            alt="ally_hair_salon"
            width={737}
            height={361}
          />
          <div className="p-4 sm:p-5 lg:p-[50px_40px_20px_40px] 2xl:p-[85px_70px_58px_71px]">
            <h2 className="text-[#003465] font-Montserrat text-[18px] sm:text-[22px] md:text-2xl lg:text-[32px] font-black uppercase leading-[93.083%]">
              Logo
            </h2>

            <p className="w-full text-[#003465] font-Montserrat font-normal text-sm lg:text-lg leading-[160%] pt-5 md:pt-8 lg:pt-[30px]">
              {logotext}
            </p>
          </div>
        </div>

        {/* Colour Palette section  */}
        <div className="max-w-[736px] w-full 2xl:h-[772px] rounded-xl bg-[#F9DD00] max-lg:mx-auto">
          <Image
            src="/img/main-colors.svg"
            alt="ally_colourpallte"
            width={736}
            height={361}
          />
          <div className="p-4 sm:p-5 lg:p-[50px_40px_20px_40px] 2xl:p-[85px_70px_58px_71px]">
            <h2 className="text-[#003465] font-Montserrat text-[22px] sm:text-2xl lg:text-[32px] font-black uppercase leading-[93.083%]">
              Colour palette
            </h2>

            <p className="w-full text-[#003465] font-Montserrat font-normal text-sm lg:text-lg leading-[160%] pt-5 md:pt-8 lg:pt-[30px]">
              {colorpallatetext}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoColorpallet;
