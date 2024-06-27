import React from "react";
import Image from "next/image";
import Head from "next/head";
import TopHeading from "@/components/common/TopHeading";
import BackImageDecoration from "@/components/common/BackImageDecoration";
import WebDesignCards from "@/components/Web-design/WebDesignCards";
import CarouselProducts2 from "@/components/Web-design/CarouselProducts2";
import Processline from "@/components/Web-design/Processline";
import WebTechnologies from "@/components/Web-design/WebTechnologies";
import LetsTalks from "@/components/Product/LetsTalks";
import FooterTextDecoration from "@/components/common/FooterTextDecoration";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import ProductsList from "@/components/common/ProductsList";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Design Services | Just Get Visible - Expert Digital Agency",
  description:
    "Elevate your online presence with Just Get Visible web design services. Our expert team crafts stunning, user-friendly websites that captivate.",
};

const Webdesign = () => {
  return (
    <>
      <Navbar />
      <div className=" bg-[rgba(0,52,101,1)] overflow-hidden relative">
        <BackImageDecoration />
        <div className="max-w-[1437px] 2xl:max-w-[1600px] w-full  mx-auto md:px-[30px] px-4 pt-[120px] sm:pt-[182px] xl:pt-[167px] xl:px-[55px]">
          <TopHeading
            heading="Web Design"
            textSize="sm:text-[13.5vw] text-[13vw] 2xl:text-[11vw]"
          />
          <div className=" relative  flex max-w-[1405px] mx-auto w-full xl:flex-row lg:-mt-16 2xl:mt-[-120px] flex-col-reverse items-center gap-4 justify-between">
            <div className="max-w-[771px] pt-20 w-full">
              <h3 className=" leading-[110%]  text-[20px] sm:text-[34px] 2xl:text-[40px]  font-bold sm:font-black text-white uppercase w-fit">
                We build high-performance websites that transform our clients
                into market leaders.
              </h3>
              <p className="text-white mt-3 sm:mt-[57px] font-montserrat max-w-[700px] w-full text-[14px]  sm:text-[20px] font-medium leading-[160%]">
                As a full-service agency, we turn ideas into advanced digital
                solutions for brands that share our drive for success.
              </p>
            </div>
            <div className=" relative max-w-[656px]  w-full">
              <Image
                alt="web-img"
                width={704}
                height={508}
                src="/img/web-hero.png"
                className="xl:h-[30vw] 2xl:h-[508px] w-full"
              />
            </div>
          </div>
          <div className="max-sm:mt-16 max-xl:mt-5">
            {" "}
            <WebDesignCards />
          </div>
          <h2
            className=" mt-16 sm:mt-[179px] relative z-[1] text-white text-[30px]
          sm:text-[50px] lg:text-[60px] 2xl:text-[80px] font-black max-lg:min-w-full w-full lg:max-w-[750px]  uppercase mb-[10px] sm:mb-[60px] 2xl:mb-[148px] leading-[45px] sm:leading-[74.47px]"
          >
            Proud to have delivered
          </h2>
        </div>
        <>
          <ProductsList />
        </>
        <div className=" bg-[url('/img/our-bg.png')] px-4 bg-bottom bg-no-repeat bg-cover pt-16 sm:pt-[136px] pb-[13vw] mt-20  sm:mt-[252px] w-full">
          <TopHeading
            heading="OUR PROCESS"
            textSize="sm:text-[12.5vw] text-[13vw] 2xl:text-[11.5vw]"
          />
          <div className="max-w-[1437px] 2xl:max-w-[1600px] w-full  mx-auto ">
            <Processline
              data={[
                { Title: "RESEARCH", tag: "" },
                { Title: "Sketch", tag: "ideas" },
                { Title: "prototyping", tag: "rapid" },
                { Title: "feedback", tag: "collate" },
                { Title: "concepts", tag: "refine" },
                { Title: "develop", tag: "" },
                { Title: "support", tag: "" },
              ]}
            />
          </div>
          <div className="flex max-md:flex-col gap-8 md:gap-20 lg:gap-[102px] justify-center pt-12 sm:pt-16 md:pt-[90px] lg:pt-[113px]">
            <p className="max-w-[607px] w-full font-montserrat font-semibold text-[14px] sm:text-[18px] leading-[160%] text-[#003465]">
              After the consultation process, our creative team conducts a
              technical audit of your current site. Then, we begin developing
              the next evolution of your business. Our website development is
              customized to fit your business model, focusing on conversion rate
              optimization and integrating various sales channels.
            </p>
            <p className="max-w-[607px] w-full font-montserrat font-semibold text-[14px] sm:text-[18px] leading-[160%] text-[#003465]">
              We offer comprehensive ongoing support because we believe
              exceptional customer care is just as crucial as our technological
              expertise. Our extensive experience enables us to be competitive
              and distinctive while preserving your brand's integrity. Whatever
              your web design needs, we have you covered.
            </p>
          </div>
          <div className="pt-12 md:pt-[100px] lg:pt-[130px] xl:pt-[177px]">
            <WebTechnologies />
          </div>
        </div>
        <>
          <LetsTalks />
        </>
        <Head>
          <title>
            Branding Services | Define Your Identity in the Digital World
          </title>
          <meta
            name="description"
            content="Elevate your brand with branding services. Our expert solutions help you define your identity and stand out in the competitive digital landscape."
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <FooterTextDecoration translate="" />
      </div>
      <Footer />
    </>
  );
};
export default Webdesign;
