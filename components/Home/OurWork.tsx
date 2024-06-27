"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import ProductsList from "../common/ProductsList";

interface OurWorkInfoProps {
  data: {
    link: string;
    Title: string;
    secondTitle: string; // Added secondTitle here
    secondDescription: string;
    portfolios: {
      data: {
        positionNumber: number;
        attributes: {
          Title: string;
          PresentationText: string;
          listTechnologyes: string;
          ImgPresentation: any;
          homePageFeature: boolean;
        };
      }[];
    };
    MoreBtn: string;
  };
}

const OurWork: React.FC<OurWorkInfoProps> = ({ data }) => {
  const portfoliosRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragStartX, setDragStartX] = useState<number>(0);
  const [scrollLeft, setScrollLeft] = useState<number>(0);
  const [targetScrollLeft, setTargetScrollLeft] = useState<number>(0);

  // Función para desplazar el scroll suavemente hacia la posición deseada

  return (
    <div
      className="ourWork relative overflow-hidden h-[1300px] 
    sm:h-[1500px] lg:h-[2500px] 2xl:h-[3028px]"
    >
      <div className="fistBack absolute top-0 h-full items-end text-center flex justify-center w-screen">
        <Image
          className="w-auto object-cover h-[1300px] sm:h-[1500px] 
          lg:h-[2500px] 2xl:h-full float-left relative"
          src={require("../../public/img/transforming-visions-background.svg")}
          width={20}
          height={20}
          alt="backImg"
        />
      </div>

      <div
        className="ourWorkContainer max-w-[1600px] p-[150px_12px_0_12px]
      sm:p-[140px_30px_0_30px] md:p-[140px_30px_0_30px] lg:p-[270px_30px_0_273px] m-auto relative"
      >
        <h2
          className="h2 relative z-[1] text-white text-[37px] 
          sm:text-[50px] lg:text-[60px] 2xl:text-[80px] font-black max-lg:min-w-full w-full lg:max-w-[750px] 2xl:ml-[276px] uppercase mb-[40px] sm:mb-[60px] 2xl:mb-[148px] leading-[45px] sm:leading-[74.47px]"
        >
          {data.Title}
        </h2>
      </div>
      <ProductsList />
      <div className="secondData absolute flex flex-col items-center justify-center w-full max-w-[1600px] m-auto left-0 right-0  bottom-[328px]  max-md:bottom-[130px]   max-lg:bottom-[150px] max-2xl:bottom-[200px] max-sm:p-[0_16px] max-2xl:p-[0_30px]">
        <h3
          data-aos="fade-down"
          data-aos-duration="20"
          className="secondTitle font-black text-[25px] sm:text-[40px] lg:text-[96px] 2xl:text-[117.75px] uppercase text-white text-center max-w-[1570px] leading-[23px] sm:leading-[40px] lg:leading-[93%] 2xl:leading-[109.61px] inline-block "
        >
          <span className="text-[#f9dd00]">
            transforming
            <br />
          </span>{" "}
          visions into visibility
        </h3>

        <p
          data-aos="fade-up"
          data-aos-duration="20"
          className="secondDescription font-bold text-sm sm:text-base lg:text-xl m-auto mt-4 sm:mt-5 md:mt-[30px] 2xl:mt-[90px] leading-[20px] sm:leading-[32px] max-w-[1234px] text-white text-center max-sm:px-0 max-md:px-10"
        >
          {data.secondDescription}
        </p>
        <Link href={data.link}>
          <div
            data-aos="fade-up"
            data-aos-duration="20"
            className="MoreBtn border px-3 border-[#F9DD00] hover:bg-transparent hover:text-[#F9DD00] mt-4 sm:mt-5 lg:mt-[65px] cursor-pointer w-full max-sm:max-w-[350px] sm:w-[350px] md:w-[413px] h-10 md:h-[50px] bg-[rgba(249,221,0,1)] rounded-[12px] flex items-center justify-center text-sm sm:text-base font-bold leading-[14.89px] text-[rgba(0,52,101,1)] uppercase"
          >
            {data.MoreBtn}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default OurWork;
