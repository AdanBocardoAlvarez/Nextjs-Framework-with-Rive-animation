import Image from "next/image";
import React from "react";
import { PcStandIcon, PencilIcon } from "../common/Icons";

const CyberSecurity = () => {
  return (
    <>
      <div className="bg-[#FDDD00] max-md:flex-col max-md:items-center w-full pt-[40px] sm:pt-[70px] md:pt-[100px] lg:pt-[140px] xl:pt-[177px] 2xl:pt-[227px] flex justify-center max-2xl:px-4 sm:gap-[30px] md:gap-[50px]  lg:gap-[80px] xl:gap-[132px] pl-0 xl:pl-[150px]">
        <div className="md:max-w-[366px] w-full h-full flex flex-col items-center justify-center md:mt-[76px]">
          <div className="flex flex-col gap-2.5 md:items-start md:justify-start">
            <h2 className="text-[#003465] max-md:text-center font-montserrat uppercase text-[30px] lg:text-[40px] font-black leading-[93%] lg:h-[50px] xl:h-[78px]">
              Cybersecurity
            </h2>
            <p className="text-[#003465] max-md:text-center font-montserrat text-[15px] lg:text-[17px] font-normal leading-[160%] lg:h-[93px]">
              We provide comprehensive cybersecurity solutions for schools to
              ensure they stay cyber safe and meet DfE standards.
            </p>
            <button
              type="submit"
              className="w-[265px] h-[50px] flex justify-center items-center border border-[#F9DD00] rounded-[12px] bg-white font-montserrat font-bold leading-[93%] text-[16px] text-[#003465]  hover:border-[#003465] transition duration-300 ease-in-out mt-5 lg:mt-[63px] hover:bg-transparent max-md:mx-auto "
            >
              More About securiwiser
            </button>
          </div>
        </div>
        <div className="flex items-end">
          <div className="flex items-center flex-col -mb-[15px]">
            <div className="bg-[#003465] p-[20px_12px_25px_12px] xl:p-[26px_17px_49px_14px] rounded-[10px] translate-y-2">
              <Image
                src="/img/cyber-security.png"
                width={771}
                height={371}
                alt="pc-image"
              />
            </div>
            <PcStandIcon />
          </div>
          <span>
            <PencilIcon />
          </span>
        </div>
      </div>
    </>
  );
};

export default CyberSecurity;
