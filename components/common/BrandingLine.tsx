import React from "react";
import Image from "next/image";
interface PrincipalInfoProps {
  data: {
    Title: string;
  }[];
}
const BrandingLine: React.FC<PrincipalInfoProps> = ({ data }) => {
  return (
    <div className=" grid gap-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 justify-between p-[111px_0_50px] w-full relative mb-[45px] sm:mb-[123px]">
      <Image
        alt="decoration"
        width={3640}
        height={163}
        src="img/Frame 92.svg"
        className=" absolute sm:right-[45%] xl:right-[22%] top-[200px] "
      />
      <Image
        alt="decoration"
        width={3640}
        height={163}
        src="img/Frame 92.svg"
        className=" absolute xl:hidden sm:right-[45%] top-[360px] sm:top-[380px]"
      />
      <Image
        alt="decoration"
        width={3640}
        height={163}
        src="img/Frame 92.svg"
        className=" absolute sm:hidden  top-[520px] sm:top-[540px]"
      />
      <Image
        alt="decoration"
        width={3640}
        height={163}
        src="img/Frame 92.svg"
        className=" absolute sm:hidden top-[670px] sm:top-[690px]"
      />
      {data.map((info, index) => (
        <div className="flex flex-col z-10" key={index}>
          <span
            key={index}
            className="text-white whitespace-nowrap  font-black text-[28px] sm:text-[34px] mb-[27px]"
          >
            {info.Title}
          </span>
          <Image
            alt="decoration"
            width={69}
            height={69}
            src="img/Frame 43363 (1).svg"
          />
        </div>
      ))}
    </div>
  );
};
export default BrandingLine;
