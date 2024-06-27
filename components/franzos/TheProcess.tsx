import Image from "next/image";
import React from "react";

const TheProcess = () => {
  return (
    <div className=" pt-32 lg:pt-[172px] xl:pt-[305px] px-4 md:px-7 xl:px-[55px] 2xl:px-0">
      {/* the Process section  */}

      <p className="text-white text-center font-Montserrat text-[22px] sm:text-3xl lg:text-[40px] font-black uppercase leading-[93.083%]">
        The Process
      </p>

      {/* here the description  */}

      <div className="max-w-[1033px] w-full mx-auto pt-8 md:pt-14 lg:pt-[104px] flex flex-col gap-6 sm:gap-10 lg:gap-[45px]">
        <p className="text-white  font-Montserrat font-medium text-sm md:text-lg leading-[150%] ">
          We began by doing a thorough research and analysis to understand the
          market situation, the competitors, and the customer expectations. We
          also talked to the founders and staff of Franzos to understand their
          vision, values, and goals. Based on our findings, we created a brand
          strategy that outlined the core elements of Franzos’ identity: their
          mission statement, value proposition, brand personality, tone of
          voice, and target audience.
        </p>

        <p className="text-white  font-Montserrat font-medium text-sm md:text-lg leading-[150%] ">
          The brand strategy involved creating a brand identity that was warm,
          friendly, playful, and authentic, reflecting the delightful experience
          customers have when dining at Franzos. We then proceeded to the
          creative phase, where we tried different concepts and directions for
          Franzos’ visual identity. We played with various colors, fonts,
          shapes, symbols, and styles to find the best fit for their brand
          essence.
        </p>

        <p className="text-white  font-Montserrat font-medium text-sm md:text-lg leading-[150%] ">
          We designed custom lettering for their logo, resulting in a logo that
          exudes warmth and charm and symbolizing the core offering of Franzos.
          The logo also incorporates subtle curves and angles that suggest
          movement and dynamism, conveying the passion and energy of Franzos.
        </p>
      </div>

      {/* illustration image  */}

      <Image
        src="/img/flame_grilled_chicken.svg"
        alt="flame_grilled_chicken"
        width={1501}
        height={732}
        className="mx-auto pt-10 md:pt-24 lg:pt-[173px] "
      />
    </div>
  );
};

export default TheProcess;
