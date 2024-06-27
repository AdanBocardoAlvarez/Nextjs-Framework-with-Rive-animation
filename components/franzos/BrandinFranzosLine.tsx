import React from "react";
import Image from "next/image";
interface PrincipalInfoProps {
  data: {
    Title: string;
    desc: string;
    img: any;
  }[];
}
const BrandinFranzosLine: React.FC<PrincipalInfoProps> = ({ data }) => {
  return (
    <div className=" grid gap-16 sm:gap-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 justify-between pt-10 md:pt-[178px] w-full relative ">
      <Image
        alt="decoration"
        width={3640}
        height={163}
        src="/img/Frame-illustration.svg"
        className=" absolute sm:right-[45%] xl:right-[20%] top-[205px] sm:top-[200px] md:top-[350px] lg:top-[330px] xl:top-[340px]  "
      />
      <Image
        alt="decoration"
        width={3640}
        height={163}
        src="/img/Frame-illustration.svg"
        className=" absolute xl:hidden sm:right-[45%] top-[700px] sm:top-[700px] md:top-[830px]  lg:top-[775px]"
      />
      <Image
        alt="decoration"
        width={3640}
        height={163}
        src="/img/Frame-illustration.svg"
        className=" absolute sm:hidden  top-[1170px] sm:top-[700px] md:top-[830] lg:top-[540px]"
      />

      {data.map((info, index) => (
        <div className="flex flex-col z-10" key={index}>
          <span
            key={index}
            className="text-white xl:max-w-[240px] w-full font-black text-[28px] sm:text-[34px] leading-[93%] mb-[45px]"
          >
            {info.Title}
          </span>
          <div className=" bg-white overflow-hidden rounded-full w-[215px] h-[215px] flex items-center justify-center">
            <Image
              alt="box"
              width={195}
              height={72}
              src={info.img}
              className=" object-cover"
            />
          </div>
          <p className="text-white mt-[26px] font-montserrat font-normal leading-[160%] text-[17px] max-w-[315px] w-full">
            {info.desc}
          </p>
        </div>
      ))}
    </div>
  );
};
export default BrandinFranzosLine;
