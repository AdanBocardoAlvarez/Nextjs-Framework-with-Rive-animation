import React from "react";
import Image from "next/image";
interface PrincipalInfoProps {
  data: {
    Title: string;
    tag: string;
  }[];
}
const Processline: React.FC<PrincipalInfoProps> = ({ data }) => {
  return (
    <div className=" grid gap-8 sm:gap-1 sm:[&>*:nth-child(8)]:mt-[19px] xl:[&>*:nth-child(9)]:mt-[-19px] [&>*:nth-child(11)]:mt-[19px]  xl:[&>*:nth-child(12)]:mt-[65px] sm:[&>*:nth-child(12)]:mt-[95px] sm:[&>*:nth-child(14)]:ml-[-55px]  sm:[&>*:nth-child(14)]:mt-[55px] sm:[&>*:nth-child(13)]:mt-[45px]  sm:[&>*:nth-child(12)]:!flex-col-reverse sm:[&>*:nth-child(14)]:!flex-col-reverse  sm:[&>*:nth-child(10)]:!flex-col-reverse sm:[&>*:nth-child(10)]:mt-[100px] xl:[&>*:nth-child(10)]:mt-[107px] grid-cols-1 sm:grid-cols-2 xl:grid-cols-7 justify-between pt-10 sm:p-[111px_0_0px] w-full relative  ">
      <Image
        alt="decoration"
        width={3640}
        height={163}
        src="img/process-line.svg"
        className=" absolute sm:right-[45%] -left-[10%] xl:right-[0] top-[100px] sm:top-[200px] "
      />
      <Image
        alt="decoration"
        width={3640}
        height={163}
        src="img/process-line.svg"
        className=" absolute xl:hidden -left-[10%] sm:right-[0%] top-[260px] sm:top-[380px]"
      />
      <Image
        alt="decoration"
        width={3640}
        height={163}
        src="img/process-line.svg"
        className=" absolute xl:hidden  -left-[10%]  top-[410px] sm:top-[640px]"
      />
      <Image
        alt="decoration"
        width={3640}
        height={163}
        src="img/process-line.svg"
        className=" absolute xl:hidden -left-[10%] top-[590px] sm:top-[850px]"
      />
      <Image
        alt="decoration"
        width={3640}
        height={163}
        src="img/process-line.svg"
        className=" absolute  -left-[10%] top-[740px] sm:hidden"
      />
      <Image
        alt="decoration"
        width={3640}
        height={163}
        src="img/process-line.svg"
        className=" absolute  -left-[10%] top-[870px] sm:hidden"
      />
      <Image
        alt="decoration"
        width={3640}
        height={163}
        src="img/process-line.svg"
        className=" absolute  -left-[10%] top-[1000px] sm:hidden"
      />
      {data.map((info, index) => (
        <div
          className="flex flex-col h-fit gap-1 sm:gap-5 sm:items-center z-10"
          key={index}
        >
          <span
            key={index}
            className="text-[#003465] uppercase leading-[90%] flex flex-col whitespace-nowrap  font-black text-[28px] sm:text-[34px]"
          >
            {info.Title}
            <p className="text-[20px]">{info.tag}</p>
          </span>
          <Image
            alt="decoration"
            width={69}
            height={69}
            src="/img/processcircle.png"
          />
        </div>
      ))}
    </div>
  );
};
export default Processline;
