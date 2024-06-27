"use client";
import React from "react";

import { getImage } from "../../config/httprouter";
import Link from "next/link";
import Image from "next/image";
interface OurWorkInfoProps {
  data: {
    Title: string;
    PresentationText: string;
    listTechnologyes: string;
    ImgPresentation: string;
    link: string;
  };
}

const OurWork: React.FC<OurWorkInfoProps> = ({ data }) => {
  return (
    <Link
      data-aos-duration="10"
      data-aos="zoom-in"
      href={data.link}
      className=" relative   w-full  mr-0 "
    >
      <div className=" max-w-[723px] aspect-[723/528] portflio_img rounded-[36px] mb-3 sm:mb-[37px]">
        {typeof data.ImgPresentation === "string" ? (
          <Image
            className="w-full h-full hover:scale-[0.98] duration-200 rounded-md lg:rounded-[36px]"
            width={723}
            height={528}
            alt="decoration"
            src={`/img/${data.ImgPresentation}`}
          />
        ) : (
          <img
            className="w-full h-full hover:scale-[0.98] duration-200 rounded-md lg:rounded-[36px]"
            width={723}
            height={528}
            alt="hello"
            src={`/img/${data.ImgPresentation}`}
          />
        )}
      </div>

      <>
        <p className="sm:leading-[37.23px] uppercase leading-5 text-[20px] font-bold sm:text-[28px] md:text-[40px] sm:font-black text-white">
          {data.Title}
        </p>
        <p className="md:text-[20px] text-[15px] mt-2 sm:font-bold text-white leading-5 line-clamp-6 md:leading-[32px]">
          {data.PresentationText}
        </p>
      </>
    </Link>
  );
};

export default OurWork;
