import React from "react";
import Image from "next/image";
interface brandingPresentationProps {
  data: {
    Title: string;
    text: string;
  };
}
const BrandingPresentation: React.FC<brandingPresentationProps> = ({
  data,
}) => {
  return (
    <div className=" relative flex xl:flex-row flex-col-reverse items-center gap-4 justify-between xl:items-end">
      <h3 className=" leading-[93.1%] text-[22px] sm:text-[48px] md:text-[5vw] 2xl:text-[4.5vw] font-black text-white uppercase w-fit">
        {data.Title}
      </h3>
      <div className=" relative max-w-[704px] w-full">
        <Image alt="" width={704} height={481} src="/img/Frame 90.svg" />
        <p className="md:text-[36px] text-[4vw] sm:text-[28px] text-[rgba(0,52, 101,1);] font-black max-w-[130px] sm:max-w-[200px] md:max-w-[269px] text-[#003465] leading-[110%] uppercase absolute w-full left-7  md:left-12 top-[20vw] sm:top-[130px]  2xl:top-[140px]  z-10">
          {data.text}
        </p>
      </div>
    </div>
  );
};
export default BrandingPresentation;
