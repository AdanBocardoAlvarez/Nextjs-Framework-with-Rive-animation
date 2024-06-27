"use client";
import React, { useState } from "react";
import AboutCard from "./AboutCard";

interface LineInfo {
  Title: string;
  Info: string;
}

interface AboutInfoProps {
  data: {
    Title: string;
    LeftText: string;
    RigthText: string;
    Img: string;
    button: JSX.Element;
    Data: LineInfo[];
    TextDecoration: string;
  };
}

const About: React.FC<AboutInfoProps> = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleItemClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="about relative w-full overflow-hidden p-[120px_30px] max-sm:pb-[230px] sm:p-[160px_66px] sm:pb-[200px] md:p-[190px_66px] xl:p-[280px_66px]">
      <div className="aboutCont w-full h-[500px] max-w-[1600px] m-auto overflow-visible relative">
        {data?.Data?.map((line, index) => (
          <AboutCard
            key={index}
            index={index}
            line={line}
            activeIndex={activeIndex}
            data={data}
            handleItemClick={handleItemClick}
          />
        ))}
      </div>
      <span className="TextDecoration text-[#eeeeee] text-[380px] 2xl:text-[500px] absolute text-center font-extrabold left-[-80px] 2xl:left-[-110px] right-0 m-auto top-[470px] md:top-[410px] xl:top-[475px] 2xl:top-[500px]">
        {data.TextDecoration}
      </span>
    </div>
  );
};

export default About;
