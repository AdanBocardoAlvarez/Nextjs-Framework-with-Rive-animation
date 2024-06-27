import React from "react";
import PrincipalSection from "@/components/Home/PrincipalSection";
import WhatWeDo from "@/components/Home/WhatWeDo";
import OurClient from "@/components/common/OurClient";
import About from "@/components/Home/About";
import OurWork from "@/components/Home/OurWork";

interface PageData {
  BackgroundImage: {
    data: {
      attributes: {
        url: string;
      };
    };
  };
  Title: string;
  Subtitle: string;
}

export interface SectionData {
  HeroHome: any;
  WhatWeDo: any;
  OurWork: any;
  OurClients: any;
  About: any;
}
export const renderSections = (data: SectionData) => {
  if (!data) return null;

  const sectionOrder = Object.keys(data) as (keyof SectionData)[];

  return sectionOrder.map((sectionKey, index) => {
    switch (sectionKey) {
      case "HeroHome":
        return <PrincipalSection key={index} data={data.HeroHome} />;
      case "WhatWeDo":
        return <WhatWeDo key={index} data={data.WhatWeDo} />;
      case "OurWork":
        return <OurWork key={index} data={data.OurWork} />;
      case "OurClients":
        return <OurClient key={index} data={data.OurClients} />;
      case "About":
        return <About key={index} data={data.About} />;
      default:
        return null;
    }
  });
};
