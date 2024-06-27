import AboutPageSection from "@/components/about/AboutPageSection";
import OurClient from "@/components/about/ourClient";
import HowWeWork from "@/components/about/HowWeWork";
import React from "react";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import FooterHeading from "@/components/common/FooterHeading";
import WeAreComponent from "@/components/All-branding/WeAreComponent";
import FooterTextDecoration from "@/components/common/FooterTextDecoration";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "About Us: Your Trusted Digital Agency in a Crowded Internet Landscape",
  description:
    "The Internet is overcrowded and millions and millions of companies compete to get noticed.",
};
const data = {
  WeAre: {
    Title: "WE ARE ALWAYS ON THE LOOKOUT FOR NEW PROBLEMS TO SOLVE",
    Description:
      "We have extensive hands-on experience across a wide array of sectors and industries – will yours be next? By collaborating closely with your business, we ensure that we consistently deliver quick and reliable results, every time.",
    ButtonDescText: "Want to know more?",
    button: {
      Title: "GET IN TOUCH",
      href: "/new-project",
      Icon: {
        data: null,
      },
    },
    Image: "we-are-component-section-image.svg",
  },
};

const About = () => {
  return (
    <>
      <Navbar />
      <div className="bg-[#003465]">
        <AboutPageSection />
        <HowWeWork />
        <OurClient />
        <div className="relative w-full overflow-hidden">
          {data?.WeAre && <WeAreComponent data={data.WeAre} />}
        </div>
        <div className="w-full overflow-hidden realtive -mb-1">
          <FooterTextDecoration translate="ml-[730px]" />
        </div>
      </div>
      <Footer />
    </>
  );
};
export default About;
