// components/RiveAnimation.tsx
"use client";
import React from "react";
import { Fit, Alignment, useRive, Layout } from "rive-react";

// Define a type for the component props
type RiveAnimationProps = {
  riveFilePath: string;
  animationName: string;
};

const RiveAnimation: React.FC<RiveAnimationProps> = ({
  riveFilePath,
  animationName,
}) => {
  const STATE_MACHINE_NAME = "State Machine 1";

  const { rive, RiveComponent } = useRive({
    src: riveFilePath,
    autoplay: true,
    stateMachines: STATE_MACHINE_NAME,
    layout: new Layout({
      fit: Fit.Contain,
      alignment: Alignment.TopCenter,
    }),
  });

  return <RiveComponent className="w-full h-full  desk_top" />;
};

export default RiveAnimation;
