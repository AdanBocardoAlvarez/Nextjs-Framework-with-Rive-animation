import React from "react";
import WhatWeComponent from "./WhatWeComponent";
// import styles from "../styles/index.module.css";

interface WhatWeDoInfoProps {
  data: {
    Title: string;
    data: {
      Icon: string;
      Title: string;
      Description: string;
      link: string;
    }[];
  };
}

const WhatWeDo: React.FC<WhatWeDoInfoProps> = ({ data }) => {
  return (
    <div
      className="wedo pt-[60px] py-5 sm:py-[100px] px-4 sm:p-[164px_20px_65px] 
      md:p-[164px_60px_86px] 2xl:p-[164px_55px_86px] flex justify-center max-w-[1437px] 2xl:max-w-[1600px] m-auto"
    >
      <div className="wedoContainer max-w-[1437px] 2xl:max-w-[1600px]">
        <h2>{data.Title}</h2> {/* Ensure the Title is rendered */}
        <div className="wedoContainerCont h-auto flex flex-col lg:grid  sm:grid-cols-2 gap-[60px] sm:gap-[90px]">
          {data.data.map((info, index) => (
            <WhatWeComponent
              key={index}
              img={info.Icon}
              title={info.Title}
              text={info.Description}
              link={info.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
