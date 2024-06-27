import Image from "next/image";
import React from "react";

const WebTechnologies = () => {
  const technologiesData = [
    {
      img: "/img/sass-logo-img.png",
    },
    {
      img: "/img/jquery-logo-img.png",
    },
    {
      img: "/img/wordpress-logo-img.png",
    },
    {
      img: "/img/html-logo-img.png",
    },
    {
      img: "/img/css-logo-img.png",
    },
    {
      img: "/img/js-logo-img.png",
    },
  ];
  return (
    <>
      <div className="flex flex-col gap-[44px] max-w-[1140px] w-full mx-auto">
        <h2 className=" font-montserrat font-black text-[20px] sm:text-[32px] md:text-[40px] lg:text-[60px] xl:text-[80px] leading-[93%] uppercase text-center text-[#003465]">
          WE BUILD ON THE LATEST TECHNOLOGIES
        </h2>
        <div className="flex gap-5 max-md:flex-wrap  [&>*:nth-child(3)]:w-[50px] [&>*:nth-child(4)]:w-[60px] [&>*:nth-child(5)]:w-[60px]  [&>*:nth-child(6)]:w-[60px] justify-center md:justify-between items-center max-w-[1094px] w-full mx-auto">
          {technologiesData.map((item, index) => (
            <div key={index}>
              <Image src={item.img} alt="sass image" width={100} height={100} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default WebTechnologies;
