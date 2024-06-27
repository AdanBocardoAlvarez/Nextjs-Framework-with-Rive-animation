import React from "react";
// import styles from "../styles/whatWeComponent.module.css";
import Image from "next/image";
import Link from "next/link";
import { OurWorkArray } from "../common/Icons";
import RiveAnim from "./RiveAnim";
interface OurWorkInfoProps {
  img: string;
  title: string;
  text: string;
  link: string;
}

const WhatWeComponent: React.FC<OurWorkInfoProps> = ({
  img,
  title,
  text,
  link,
}) => {
  // Construye la URL completa de la imagen usando require() de manera dinámica
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="20"
      className="WhatWeComponent  w-full 2xl:p-[0_30px] 2xl:pb-5   max-xl:mb-[3%]"
    >
      <div className="WhatWeComponentContainer flex flex-col w-full   justify-start">
        <h2 className="h1  w-full text-[35px] sm:text-[56px] 2xl:text-[80px] uppercase text-[#003465] mb-5 sm:mb-[30px] block leading-[93%] max-w-full font-black">
          {title}
        </h2>
        <div className="infoCont flex flex-col sm:flex-row items-start justify-start lg:justify-between gap-2 sm:gap-3  2xl:gap-2">
              <RiveAnim
                riveFilePath={"/img/rives/"}
                animationName = {img}
              />
              {/* <Image
                src={`/img/${img}`}
                width={330}
                height={246}
                alt=""
                className="logo w-auto sm:w-[29%] xl:w-[40%] max-sm:h-[150px] max-sm:mx-auto max-sm:mb-[10px]"
              /> */}
            {/* )} */}
          <span
            className="text w-full sm:w-[60%] text-[15px]  sm:text-[17px] 
          leading-5 sm:leading-[27.2px] text-[#061836] flex flex-col 2xl:px-[60px] font-semibold"
          >
            {text}
            <Link href={link} className="arrayBtn max-sm:!mb-0 group">
              <OurWorkArray />
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default WhatWeComponent;
