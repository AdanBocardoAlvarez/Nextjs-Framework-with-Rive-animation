import React from "react";
import { relatedWorkData } from "../common/Helper";
import OurWorkComponent from "./OurWorkComponent";
const RelatedWork = () => {
  return (
    <>
      <div className="pt-12 md:pt-[100px] max-sm:mb-10 lg:pt-[150px] xl:pt-[200px]  px-4 md:px-7 xl:px-[55px] 2xl:px-0 max-w-[1505px] w-full mx-auto">
        <h2 className="text-white font-montserrat font-black text-[28px] sm:text-[32px] md:text-[50px] lg:text-[80px] leading-[93%] uppercase">
          Related work
        </h2>
        <div className="grid w-full grid-cols-1 gap-9  mx-auto sm:grid-cols-2 pt-5 lg:py-20 2xl:p-[87px_0_231px_0]">
          {relatedWorkData.map((info, index) => (
            <OurWorkComponent key={index} data={info.data} />
          ))}
        </div>
      </div>
    </>
  );
};

export default RelatedWork;
