import React from "react";
import Link from "next/link";
import Image from "next/image";
interface WeAreComponentProps {
  data: {
    Title: string;
    Description: string;
    ButtonDescText: string;
    button: any;
    Image: any;
  };
}
const WeAreComponent: React.FC<WeAreComponentProps> = ({ data }) => {
  return (
    <div className="bg-[#003465] relative">
      <div className="max-w-[1437px] 2xl:max-w-[1600px] w-full mx-auto px-5 sm:px-[30px] lg:px-[55px] pt-10 sm:pt-16 lg:pt-[110px] pb-[60px]">
        <div className="flex max-sm:flex-col max-sm:justify-center gap-5">
          <div data-aos="fade-right" className="h-fit w-full max-w-[905px]">
            <h3 className="2xl:text-[80px] lg:text-[60px] md:text-[46px] sm:text-[32px] text-xl leading-[120%] sm:leading-[93%] font-black text-white mb-5 md:mb-10">
              {data.Title}
            </h3>
            <span className="sm:text-xl text-sm font-medium leading-[130%] text-white max-w-[728px] w-full">
              {data.Description}
            </span>
            <div
              className="flex gap-4 max-lg:flex-col lg:gap-20 max-sm:items-center lg:items-center md:mt-20 mt-10"
              style={{ justifyContent: data.ButtonDescText ? "" : "left" }}
            >
              <span
                className="text-2xl
               2xl:text-[32px] sm:text-[28px] font-semibold text-white leading-[93.1%]"
              >
                {data.ButtonDescText}
              </span>
              <Link
                href={data.button.href}
                className="max-w-[396px] w-full h-8  border-[#F9DD00] border hover:bg-transparent hover:text-[#F9DD00] sm:h-[50px] bg-[#F9DD00] text-[#003465] rounded-xl sm:text-base text-xs px-2 whitespace-nowrap font-semibold leading-[93.1%] flex items-center justify-center"
              >
                {data.button.Title}
              </Link>
            </div>
          </div>
          <div data-aos="fade-left" className="max-xl:mx-auto">
            <Image
              width={457}
              height={544}
              alt="decoration"
              src={`/img/${data.Image}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default WeAreComponent;
