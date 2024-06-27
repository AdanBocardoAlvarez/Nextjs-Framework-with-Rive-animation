import React from "react";
import RiveAnimation from "./RiveAnimation";
import RiveAnim from "./RiveAnim";

interface HeroProps {
  data: any;
}

function PrincipalSection({ data }: HeroProps) {
  return (
    <div className="relative max-md:bg-[url('/img/mobile-hero-image.svg')] bg-cover bg-center h-[560px] lg:h-[702px] xl:h-[640px] 2xl:h-[830px]">
      <h1
        style={{
          background: "transparent",
          color: "white",
          textAlign: "center",
          position: "absolute",
          width: "100%",
          top: "20%",
          fontSize: "4.5vw",
          fontWeight: 800,
        }}
      >
        STAND OUT FROM THE <i>CROWD</i>
      </h1>
      <div className="w-full h-full max-md:hidden">
        <RiveAnimation
          riveFilePath={"/img/hero_animation.riv"}
          animationName={""}
        />
      </div>
    </div>
  );
}

export default PrincipalSection;
