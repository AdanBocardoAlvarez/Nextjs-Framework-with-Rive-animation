"use client";
import React, { useRef, useState } from "react";
import OurWorkComponent from "./OurWorkComponent2";

export default function CarouselProducts2({}) {
  const portfoliosRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragStartX, setDragStartX] = useState<number>(0);
  const [scrollLeft, setScrollLeft] = useState<number>(0);

  const portfolioData = [
    {
      data: {
        Title: "Franzos",
        PresentationText: "Restuarant Re-branding",
        listTechnologyes: "",
        ImgPresentation: "image 2.svg",
      },
    },
    {
      data: {
        Title: "Duronic",
        PresentationText: "Restuarant Re-branding",
        listTechnologyes: "",
        ImgPresentation: "image 3.svg",
      },
    },
    {
      data: {
        Title: "SK FOODS",
        PresentationText:
          "A fresh brand idenity and website for a sea food and poultry supplier",
        listTechnologyes: "",
        ImgPresentation: "image 5.svg",
      },
    },
    {
      data: {
        Title: "STATION CARS ENFIELD",
        PresentationText: "Restuarant Re-branding",
        listTechnologyes: "",
        ImgPresentation: "Mini-Cooper-2 1.svg",
      },
    },
  ];
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setDragStartX(e.clientX);
    setScrollLeft(portfoliosRef.current?.scrollLeft || 0);
  };
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const deltaX = e.clientX - dragStartX;
    portfoliosRef.current!.scrollLeft = scrollLeft - deltaX;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };
  return (
    <div
      className=" flex flex-row overflow-auto example  w-[100vw]  p-[0_12px] sm:p-[0_20px] md:p-[0_30px] gap-4 sm:gap-9 lg:p-[0_80px] 2xl:p-[0_calc((100vw-1500px)/2)] cursor-auto select-none transition-all ease-in-out duration-200"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      ref={portfoliosRef}
    >
      {portfolioData.map((info, index) => (
        <OurWorkComponent key={index} data={info.data} />
      ))}
    </div>
  );
}
