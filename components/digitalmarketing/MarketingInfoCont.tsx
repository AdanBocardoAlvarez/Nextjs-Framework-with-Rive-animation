import React from "react";
import Link from "next/link";
interface MarketingInfoProps {
  Title: string;
  text: string;
  btnText: string;
  href: any;
}
const MarketingInfo: React.FC<MarketingInfoProps> = ({
  Title,
  text,
  btnText,
  href,
}) => {
  return (
    <div
      data-aos-duration="10"
      data-aos="zoom-in"
      className="bg-[rgba(249,221,0,1)]  ease-in-out duration-300 hover:scale-[0.98] justify-between transition-[0.2s] text-[rgba(0,52,101,1)] flex flex-col rounded-[12px] w-full max-w-[426px] p-5 sm:p-12 md:p-[78px_39px] relative h-[350px] sm:h-[523px] "
    >
      <h3 className="xl:text-[34px] uppercase text-[26px] lg:text-[30px] font-black leading-[93%] xl:h-[91px] mt-0 ">
        {Title}
      </h3>
      <p className="text-[17px] leading-[160%] text-[rgba(0,52,101,1)] xl:h-[146px] font-medium">
        {text}
      </p>
      <Link href={href}>
        <button className="h-[55px] transition ease-in-out duration-300 w-full rounded-[10px] text-[14px] sm:text-[16px] font-medium sm:font-bold leading-[14.89px] flex items-center justify-center text-white bg-[rgba(0,52,101,1)] border border-[rgba(0,52,101,1)] hover:bg-transparent hover:text-[rgba(0,52,101,1)]  sm:bottom-[78px]">
          {btnText}
        </button>
      </Link>
    </div>
  );
};
export default MarketingInfo;
