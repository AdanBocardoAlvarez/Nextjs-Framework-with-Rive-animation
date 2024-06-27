import React from "react";
interface para {
  Para: string;
  Para1: string;
}
const SeoPara: React.FC<para> = ({ Para, Para1 }) => {
  return (
    <>
      <p className=" max-w-[568px] w-full max-xl:mx-auto max-xl:text-center max-md:text-[14px] mb-[30px] text-[#003465] text-[17px] font-medium font-Montserrat leading-[160%] max-sm:mb-[15px] ">
        {Para1}
      </p>
      <p className=" max-w-[568px] w-full max-xl:mx-auto max-xl:text-center max-md:text-[14px] text-[#003465] text-[17px] font-medium font-Montserrat leading-[160%] ">
        {Para}
      </p>
    </>
  );
};

export default SeoPara;
