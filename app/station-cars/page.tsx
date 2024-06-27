import BackImageDecoration from "@/components/common/BackImageDecoration";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import TopHeading from "@/components/common/TopHeading";
import FranzosHero from "@/components/franzos/FranzosHero";
import { stationCarsBrandingHeroData } from "@/components/common/Helper";
import StationCarChallenge from "@/components/station-cars-branding/StationCarChallenge";
import ShortHeadWithParaText from "@/components/common/ShortHeadWithParaText";
import StationCarImageryTypo from "@/components/station-cars-branding/StationCarImageryTypo";
import StationCarColateralCreated from "@/components/station-cars-branding/StationCarColateralCreated";
import RelatedWork from "@/components/franzos/RelatedWork";
import FooterTextDecoration from "@/components/common/FooterTextDecoration";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Station Cars Enfield - Branding and Website',
  description: 'Station Cars Enfield, a local transportation company, approached us to undergo a complete rebranding process. With a desire to modernize their image and better reflect their commitment to reliable and efficient service.',
}

const StationCarsBranding = () => {
  return (
    <>
      <Navbar />
      <div className="bg-[#003465] relative  w-full overflow-hidden font-montserrat">
        <BackImageDecoration />
        {/* Station cars hero */}
        <div className="max-w-[1567px] w-full mx-auto px-4 md:px-7 xl:px-[55px] pt-28 lg:pt-[167px]">
          <div className="w-fit mx-auto relative z-10 mb-[-5%] sm:mb-[-35px] md:mb-[-40px] xl:mb-[-68px]">
            <TopHeading
              heading="STATIONCARS"
              textSize="text-[12.5vw] 2xl:text-[11vw]"
            />
            <p
              className="absolute top-[40%] lg:top-[50%] left-1/2 -translate-x-1/2 font-montserrat font-semibold text-sm 
            sm:text-[18px] md:text-[24px] lg:text-[28px] xl:text-[32px] text-center text-white leading-[93%] uppercase"
            >
              Branding & WEBSITE
            </p>
          </div>
          <p className="max-w-[1110px] w-full mx-auto pt-7 lg:pt-5 xl:pt-12 font-montserrat font-black text-white text-center text-base sm:text-xl md:text-[24px] lg:text-[32px] xl:text-[40px] !leading-[125%] 2xl:!leading-[130%] uppercase z-20 relative">
            A NEW LOOK AND WEBSITE FOR Revving Up Their Branding FOR A MINICAB
            FIRM IN ENFIELD
          </p>
          <FranzosHero data={stationCarsBrandingHeroData} />
        </div>
        <StationCarChallenge />
        {/* INSPIRATION FOR THE LOG0 */}
        <div className="mx-auto bg-white pt-16 mt-[-2px] sm:pt-[110px] lg:pt-[162px] pb-[80px] lg:pb-[100px] px-4 md:px-7 xl:px-[55px] 2xl:px-0">
          <ShortHeadWithParaText
            textColor="#003465"
            maxWidth={757}
            heading="INSPIRATION FOR THE LOG0"
            subHeading="Our inspiration for the Stationcars Enfield logo drew on two key elements: canine symbolism, reflecting the loyalty, reliability, and trustworthiness the company offers its customers, and the circular shape, representing both a continuous service cycle and a sense of community, inclusiveness, and customer focus often associated with circles in branding."
          />
        </div>
        <StationCarImageryTypo />
        <StationCarColateralCreated />
        {/* Visit Website */}
        <div
          className="w-full flex items-center justify-center pt-[105px] sm:pt-[340px] 
          md:pt-[380px] lg:pt-[630px] px-4 md:px-7 xl:px-[55px] 2xl:px-0 max-lg:pb-8"
        >
          <a
            href="https://stationcarsenfield.com/"
            target="_blank"
            className="max-w-[196px] sm:max-w-[296px] lg:max-w-[396px] w-full h-10 sm:h-[63px] flex items-center justify-center rounded-xl bg-[#F9DD00] text-[#003465] uppercase text-base font-bold leading-[93.083%] hover:bg-transparent hover:text-[#F9DD00] box-border border border-[#F9DD00] duration-300"
          >
            <span>VISIT WEBSITE</span>
          </a>
        </div>
        <RelatedWork />
        <FooterTextDecoration translate="ml-[730px]" />
      </div>
      <Footer />
    </>
  );
};
export default StationCarsBranding;
