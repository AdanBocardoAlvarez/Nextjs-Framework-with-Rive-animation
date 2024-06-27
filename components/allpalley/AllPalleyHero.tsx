import React from "react";
import Franzos from "../common/Franzos";
import AllyPallyHeroHeading from "./AllpalleyHeroHeading";

interface HeroProps {
  image: string;
  target: string;
  sector: string;
  leadTime: string;
  services: string;
  text: string;
  width: string;
}

const AllyPallyHero: React.FC<HeroProps> = ({
  image,
  leadTime,
  target,
  sector,
  services,
  text,
  width,
}) => {
  return (
    <div className="w-full  px-4 sm:px-[30px] lg:px-[55px] 2xl:px-0">
      <AllyPallyHeroHeading />
      <Franzos
        image={image}
        leadTime={leadTime}
        sector={sector}
        target={target}
        services={services}
        text={text}
        width={width}
      />
    </div>
  );
};

export default AllyPallyHero;
