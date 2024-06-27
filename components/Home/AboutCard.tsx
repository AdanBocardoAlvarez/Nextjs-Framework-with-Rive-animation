import React from "react";

interface AboutCardProps {
  index: number;
  activeIndex: number;
  data: { Data: { Title: string; Info: string }[] };
  handleItemClick: (index: number) => void;
  line: { Title: string; Info: string };
}

const AboutCard: React.FC<AboutCardProps> = ({
  index,
  activeIndex,
  data,
  handleItemClick,
  line,
}) => {
  return (
    <div
      key={index}
      className={`${`infocont bg-[#f9dd00] text-[#003465] transform rotate-[-1.94deg] rounded-[68px] absolute top-[171px] left-0 
      z-[3] w-[1400px] 2xl:w-[1656.76px] transition-all duration-1000 rounded-tl-[0]`} ${
        index === activeIndex
          ? `first !left-0 !top-[171px]`
          : index === (activeIndex + 1) % data.Data.length
          ? `second !left-[0px] sm:!left-[100px] xl:!left-[470px] 2xl:!left-[575px] !top-[90px] rotate-[0.65deg] !z-[2] translate-y-5`
          : `third !left-[0px] sm:!left-[190px] xl:!left-[900px] 2xl:!left-[1118px] !z-[1] !top-0 rotate-[-1.94deg]`
      }`}
      onClick={() => handleItemClick(index)}
    >
      <div className="titleCont h-0 overflow-visible z-[1] flex items-start">
        <h3 className="Title max-sm:min-w-[200px] max-xl:min-w-[300px] max-2xl:min-w-[500px] max-2xl:text-center text-[30px] sm:text-[50px] xl:text-[70px] 2xl:text-[80px] font-black text-[#003465] p-[20px_40px] xl:p-[60px_70px] 2xl:p-[64px_127px] max-2xl:mb-[-20px] bg-[#f9dd00] transform translate-y-[-75%] rounded-[30px] xl:rounded-[68px] flex duration-1000 leading-[74px] max-2xl:justify-center items-start cursor-pointer relative">
          <p className="transform rotate-[1.94px] uppercase duration-1000 m-0">
            {line.Title}
          </p>
        </h3>
      </div>
      <div className="textCont w-full !rotate-[-1.94px] max-xl:max-w-[90vw] uppercase p-[50px_30px] sm:p-[70px] xl:p-[100px] 2xl:p-[130px_127px] z-[1] relative flex justify-start xl:justify-between max-xl:flex-wrap">
        {line.Info?.split("\n").map((infoLine, infoIndex) => (
          <p
            className="text max-md:block text-[20px] sm:text-[25px] xl:text-[26px] leading-[30px] font-bold max-md:m-[15px_0] max-xl:m-[10px_0]"
            key={infoIndex}
          >
            {infoLine}
            <span className="inline xl:hidden max-md:hidden max-xl:m-[0_10px]">
              |
            </span>
          </p>
        ))}
      </div>
    </div>
  );
};

export default AboutCard;
