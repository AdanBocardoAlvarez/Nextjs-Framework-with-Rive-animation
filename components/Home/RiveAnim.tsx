// components/RiveAnimation.tsx
"use client";
import React from "react";
import { Fit, Alignment, useRive, Layout } from "rive-react";


const filenames = [ 'pen.riv','smiley_face.riv', 'spanner.riv',  'box.riv'];
// Define a type for the component props
type RiveAnimationProps = {
  riveFilePath: string;
  animationName: string;
};

const RiveAnimator: React.FC<RiveAnimationProps> = ({
  riveFilePath,
  animationName,
}) => {
  const STATE_MACHINE_NAME = "State Machine 1";
  riveFilePath += filenames[parseInt(animationName)-1];
  const { rive, RiveComponent } = useRive({
    src: riveFilePath,
    autoplay: true,
    stateMachines: STATE_MACHINE_NAME,
    layout: new Layout({
      fit: Fit.Contain,
      alignment: Alignment.TopCenter,
    }),
  });
  if( animationName === "3"){
    return (
      <div className="w-auto sm:w-[40%] xl:w-[50%] h-[230px] max-sm:mx-auto max-sm:mb-[10px]">
        <RiveComponent className=" w-full sm:h-[100%] xl:h-[100%]"/>
      </div>
    );
  }else{
    return (
      <div className="w-auto sm:w-[29%] xl:w-[40%] h-[230px] max-sm:mx-auto max-sm:mb-[10px]">
        <RiveComponent className=" w-full sm:h-[100%] xl:h-[100%]"/>
      </div>
    );
  }  
};

export default RiveAnimator;
