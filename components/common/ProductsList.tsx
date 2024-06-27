"use client";
import React, { useRef, useState } from "react";
import styles from "../styles/component/carouselProducts.module.css";
import OurWork from "./OurWork";
export default function ProductsList({}) {
  const portfoliosRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragStartX, setDragStartX] = useState<number>(0);
  const [scrollLeft, setScrollLeft] = useState<number>(0);
  const portfolioData = [
    {
      data: {
        Title: "Franzos",
        PresentationText:
          "A fresh new brand identity for a grilled-chicken restaurant that sizzles",
        listTechnologyes: "",
        ImgPresentation: "fronzos-portfolio-img.jpg",
        link: "/franzos",
      },
    },
    {
      data: {
        Title: "THE FOODITY",
        PresentationText:
          "A new brand identity and strategy for a charity that makes a difference with every bite",
        listTechnologyes: "",
        ImgPresentation: "foodity-portfolio-img.jpg",
        link: "/foodity",
      },
    },
    {
      data: {
        Title: "ALL PALLY",
        PresentationText:
          "Shaping a sharp new image for a hair salon in Alexander Palace",
        listTechnologyes: "",
        ImgPresentation: "ally-portfolio-img.svg",
        link: "/ally-pally",
      },
    },
    {
      data: {
        Title: "STATION CARS ENFIELD",
        PresentationText:
          "A new look and website for revving up their branding for a minicar firm in Enfield",
        listTechnologyes: "",
        ImgPresentation: "station-car-portfolio-img.svg",
        link: "/station-cars",
      },
    },
    {
      data: {
        Title: "INGUBO APP",
        PresentationText:
          "Design and development of a custom T-shirt printing mobile application",
        listTechnologyes: "",
        ImgPresentation: "ingubo-app.png",
        link: "/ingubo-app",
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
      className="portfolios flex flex-row overflow-scroll max-w-[100vw]  p-[0_12px] sm:p-[0_20px] md:p-[0_30px] gap-9 lg:p-[0_56px] 2xl:p-[0_calc((100vw-1500px)/2)] cursor-auto select-none transition-all ease-in-out duration-200"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      ref={portfoliosRef}
    >
      {portfolioData.map((info, index) => (
        <OurWork key={index} data={info.data} />
      ))}
    </div>
  );
}
