"use client";
import React, { useState, Suspense } from "react";
import Head from "next/head";
import FooterTextDecoration from "@/components/common/FooterTextDecoration";
import Navbar from "@/components/common/Navbar";
import BackImageDecoration from "@/components/common/BackImageDecoration";
import OurWorkComponent from "@/components/franzos/OurWorkComponent";
import WeAreComponent from "@/components/All-branding/WeAreComponent";
import Footer from "@/components/common/Footer";

interface SectionData {
  filters: {
    option: string;
  }[];
  Title: string;
  WeAre: any;
}

interface PortfolioData {
  id: number;
  attributes: {
    Title: string;
    PresentationText: string;
    listTechnologyes: string;
    Img: any;
    positionNumber: number;
    WebSite: boolean | null;
    Ecommerce: boolean | null;
    Branding: boolean | null;
  };
}

interface Props {
  portfolio: { data: PortfolioData[] };
  data: SectionData;
}

const data = {
  Title: "Our Work",
  bottomText: "TVISIBLE",
  filters: [
    {
      option: "ALL WORKS",
    },
    {
      option: "WEB SITE",
    },
    {
      option: "ECOMMERCE",
    },
    {
      option: "BRANDING",
    },
  ],
  WeAre: {
    Title: "WE ARE ALWAYS ON THE LOOKOUT FOR NEW PROBLEMS TO SOLVE",
    Description:
      "We have hands-on experience with a broad range of sectors and industries – is yours next? We work closely with your business to ensure that we can deliver you results quickly and confidently, every time.",
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

const portfolio = {
  data: [
    {
      id: 1,
      attributes: {
        Title: "STATION CARS ENFIELD",
        PresentationText:
          "A new look and website for revving up their branding for a minicar firm in Enfield",
        listTechnologyes: "Brand Identity\nUI & UX Design\nWeb Development",
        positionNumber: 7,
        WebSite: null,
        Ecommerce: null,
        Branding: null,
        link: "/station-cars",
        homePageFeature: true,
        Img: "/img/station-car-portfolio-img.svg", // Displayed size: 587 x 428
      },
    },
    {
      id: 2,
      attributes: {
        Title: "Franzos",
        PresentationText:
          "A fresh new brand identity for a grilled-chicken restaurant that sizzles",
        listTechnologyes: "eCommerce\nUI & UX Design\nSEO",
        positionNumber: 2,
        WebSite: true,
        Ecommerce: true,
        link: "/franzos",
        Branding: false,
        homePageFeature: true,
        Img: "/img/fronzos-portfolio-img.jpg", // Displayed size: 587 x 428
      },
    },
    {
      id: 3,
      attributes: {
        Title: "ALL PALLY",
        PresentationText:
          "Shaping a sharp new image for a hair salon in Alexander Palace",
        listTechnologyes: "UI & UX Design\nMobile App",
        positionNumber: 6,
        WebSite: null,
        Ecommerce: null,
        Branding: null,
        link: "/ally-pally",
        homePageFeature: true,
        Img: "/img/ally-portfolio-img.svg", // Displayed size: 587 x 428
      },
    },
    {
      id: 4,
      attributes: {
        Title: "THE FOODITY",
        PresentationText:
          "A new brand identity and strategy for a charity that makes a difference with every bite",
        listTechnologyes:
          "Mobile App\neCommerce\nUI & UX Design\nWeb Development",
        positionNumber: 5,
        WebSite: true,
        Ecommerce: null,
        Branding: null,
        link: "/foodity",
        homePageFeature: true,
        Img: "/img/foodity-portfolio-img.jpg", // Displayed size: 587 x 428
      },
    },
    {
      id: 5,
      attributes: {
        Title: "INGUBO APP",
        PresentationText:
          "Design and development of a custom T-shirt printing mobile application",
        listTechnologyes:
          "Mobile App\neCommerce\nUI & UX Design\nWeb Development",
        positionNumber: 6,
        WebSite: true,
        Ecommerce: null,
        Branding: null,
        link: "/ingubo-app",
        homePageFeature: true,
        Img: "/img/ingubo-app.png", // Displayed size: 587 x 428
      },
    },
    {
      id: 6,
      attributes: {
        Title: "SK FOODS",
        PresentationText:
          "A fresh brand idenity and website for a sea food and poultary supplier",
        listTechnologyes:
          "Mobile App\neCommerce\nUI & UX Design\nWeb Development",
        positionNumber: 7,
        WebSite: true,
        Ecommerce: null,
        Branding: true,
        link: "#",
        homePageFeature: true,
        Img: "/img/sk-foods.png", // Displayed size: 587 x 428
      },
    },
  ],
};

const filterConditions: {
  [key: number]: (line: PortfolioData) => boolean | null;
} = {
  0: () => true,
  1: (line) => line.attributes.WebSite,
  2: (line) => line.attributes.Ecommerce,
  3: (line) => line.attributes.Branding,
};

const Portfolio: React.FC = () => {
  const [filterActive, setFilterActive] = useState(0);

  return (
    <>
      <Navbar />
      <div className="bg-[#003465] portfolio_main overflow-hidden relative">
        <Head>
          <title>
            Portfolio | JustGetVisible Showcasing Our Digital Success Stories
          </title>
          <meta
            name="description"
            content="Portfolio of Just Get Visible, your premier digital agency.  Our innovative projects that help businesses stand out in a crowded online marketplace."
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <BackImageDecoration />
          <div className="max-w-[1437px] 2xl:max-w-[1600px] mx-auto lg:px-[55px] px-5 xl:pt-[167px] pt-[120px] sm:pt-[182px]">
            <div className="relative  flex justify-center items-center">
              <h1 className="text-center text-[#03498A] font-black 2xl:text-[13.5vw] text-[15vw] whitespace-nowrap leading-[93.1%] uppercase  w-full  2xl:tracking-[-16px] tracking-[-8px]">
                {data?.Title}
              </h1>
              <div className="grid sm:grid-cols-4 grid-cols-2 gap-1 sm:gap-3 justify-between max-w-[900px] xl:max-w-[1118px] w-full absolute z-1 mx-auto">
                {data?.filters.map((info, index) => (
                  <span
                    key={index}
                    className={`mx-auto text-lg sm:text-[22px] lg:text-[32px] leading-[30px] cursor-pointer ${
                      filterActive === index
                        ? "font-black text-[rgba(249,221,0,1)]"
                        : "text-white font-semibold"
                    }`}
                    onClick={() => setFilterActive(index)}
                  >
                    {info.option}
                  </span>
                ))}
              </div>
            </div>
            <div className="mx-auto grid mt-12 sm:grid-cols-2 gap-6 lg:gap-[52px] justify-center">
              <Suspense fallback={<div>Loading ... </div>}>
                {portfolio.data
                  ?.filter((item) =>
                    filterConditions[filterActive]
                      ? filterConditions[filterActive](item)
                      : true
                  )
                  .sort(
                    (a, b) =>
                      a.attributes.positionNumber - b.attributes.positionNumber
                  )
                  .map((item, index) => (
                    <OurWorkComponent key={index} data={item.attributes} />
                  ))}
              </Suspense>
            </div>
          </div>
          <div className="mt-28">
            {data?.WeAre && <WeAreComponent data={data.WeAre} />}
          </div>
          <FooterTextDecoration translate="ml-[0]" />
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Portfolio;
