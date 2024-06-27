import React from "react";
import Image from "next/image";
interface PrincipalInfoProps {
  data: {
    Title: string;
    tag: string;
  }[];
}
const Seoline: React.FC<PrincipalInfoProps> = ({ data }) => {
  return (
    <div className=" grid gap-8 sm:gap-1  grid-cols-1 md:grid-cols-2 xl:grid-cols-5 justify-between pt-10 sm:p-[111px_0_0px] w-full relative 2xl:[&>*:nth-child(10)]:ml-3 [&>*:nth-child(10)]:mt-[50px] [&>*:nth-child(9)]:mt-1 xl:[&>*:nth-child(9)]:-mt-[25px] 2xl:[&>*:nth-child(9)]:-mt-[5px] 2xl:[&>*:nth-child(8)]:mt-[38px] xl:[&>*:nth-child(8)]:mt-[50px] [&>*:nth-child(8)]:mt-[25px] [&>*:nth-child(7)]:mt-5 xl:[&>*:nth-child(7)]:-mt-[13px] xl:[&>*:nth-child(odd)]:!flex-col-reverse [&>*:nth-child(6)]:mt-6">
      <Image
        alt="decoration"
        width={1200}
        height={163}
        src="img/seo-line.svg"
        className=" absolute  left-0 xl:left-[54px]  sm:right-[0%]  top-[110px] sm:top-[213px]"
      />
      <Image
        alt="decoration"
        width={3640}
        height={163}
        src="img/seo-line.svg"
        className=" absolute xl:hidden left-0 sm:right-[0%] top-[305px] sm:top-[480px] md:top-[460px] xl:top-[473px] md:-rotate-3 lg:-rotate-2"
      />
      <Image
        alt="decoration"
        width={3640}
        height={163}
        src="img/seo-line.svg"
        className=" absolute xl:hidden  left-0 top-[485px]  sm:top-[724px] md:top-[755px]"
      />
      <Image
        alt="decoration"
        width={3640}
        height={163}
        src="img/seo-line.svg"
        className=" absolute md:hidden left-0 top-[630px] sm:top-[950px] "
      />
      <Image
        alt="decoration"
        width={3640}
        height={163}
        src="img/seo-line.svg"
        className=" absolute  left-0 top-[820px] sm:top-[1222px] md:hidden"
      />

      {data.map((info, index) => (
        <div className="flex flex-col h-fit gap-1 sm:gap-5  z-10" key={index}>
          <span
            key={index}
            className="text-white uppercase leading-[90%] flex flex-col whitespace-nowrap  font-black text-[26px] sm:text-[32px]"
          >
            {info.tag}
          </span>
          <Image
            alt="decoration"
            width={69}
            height={69}
            src="img/Frame 43363 (1).svg"
            className="max-sm:w-10"
          />
          <span
            key={index}
            className="text-white max-w-[208px] w-full uppercase leading-[90%] flex flex-col   font-black text-[20px] sm:text-[29px] 2xl:text-[32px]"
          >
            {info.Title}
          </span>
        </div>
      ))}
    </div>
  );
};
export default Seoline;
