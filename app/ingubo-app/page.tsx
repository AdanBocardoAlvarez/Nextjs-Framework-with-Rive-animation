import BackImageDecoration from "@/components/common/BackImageDecoration";
import Footer from "@/components/common/Footer";
import FooterHeading from "@/components/common/FooterHeading";
import FooterTextDecoration from "@/components/common/FooterTextDecoration";
import { inguboAppHeroData } from "@/components/common/Helper";
import Navbar from "@/components/common/Navbar";
import ShortHeadWithParaText from "@/components/common/ShortHeadWithParaText";
import TopHeading from "@/components/common/TopHeading";
import FranzosHero from "@/components/franzos/FranzosHero";
import RelatedWork from "@/components/franzos/RelatedWork";
import InguboAppChallenge from "@/components/ingubo-app/InguboAppChallenge";
import InguboAppColateralCreated from "@/components/ingubo-app/InguboAppColateralCreated";
import InguboAppImageryTypo from "@/components/ingubo-app/InguboAppImageryTypo";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ingubo Mobile App Design & Development',
  description: 'The challenge involves designing and developing Ingobu a mobile app that seamlessly aligns with the company brand values.',
}

const InguboApp = () => {
  return (
    <>
      <Navbar />
      <div className="bg-[#003465] relative font-montserrat">
        <BackImageDecoration />
        {/* Ingubo app hero */}
        <div className="max-w-[1567px] w-full mx-auto px-4 md:px-7 xl:px-[55px] pt-28 lg:pt-[167px]">
          <div className="w-fit mx-auto relative z-10 mb-[-5%] sm:mb-[-35px] md:mb-[-40px] xl:mb-[-75px]">
            <TopHeading
              heading="INGUBO"
              textSize="text-[22vw] 2xl:text-[17vw]"
            />
            <p
              className="absolute top-[40%] lg:top-[50%] left-1/2 -translate-x-1/2 font-montserrat font-semibold text-sm md:text-[17px] lg:text-[22px] 
            xl:text-[28px] 2xl:text-[32px] text-center text-white leading-[93%] uppercase"
            >
              MOBILE APP DESIGN & DEVELOPMENT
            </p>
          </div>
          <p className="max-w-[900px] -mt-5 w-full mx-auto max-sm:pt-5 font-montserrat font-black text-white text-center text-base sm:text-xl md:text-[24px] lg:text-[32px] xl:text-[40px] !leading-[125%] 2xl:!leading-[130%] uppercase z-20 relative">
            DESIGN & DEVELOPMENT OF A CUSTOM T-SHIRT PRINTING MOBILE APPLICATION
          </p>
          <FranzosHero data={inguboAppHeroData} />
        </div>
        <InguboAppChallenge />
        {/* THE PROCESS */}
        <div className="mx-auto bg-white pt-12 sm:pt-[90px] lg:pt-[150px] 2xl:pt-[305px] pb-20 lg:pb-[140px] px-4 md:px-7 xl:px-[55px] 2xl:px-0">
          <ShortHeadWithParaText
            textColor="#003465"
            maxWidth={757}
            heading="PROTOTYPING"
            subHeading="Our design team initially came out with a prototype for the app that was in line with the company’s brand values. The prototype was sketched before being designed in a way that brought the design to life. We kept the company’s compelling core values intact, while retooling the layout for optimum user engagement.."
          />
        </div>
        <InguboAppImageryTypo />
        <InguboAppColateralCreated />
        {/* Conclusion */}
        <div className="mx-auto pt-[120px] sm:pt-[190px] lg:pt-[270px] pb-14 sm:pb-20 md:pb-[120px] 2xl:pb-[225px] px-4 md:px-7 xl:px-[55px] 2xl:px-0">
          <ShortHeadWithParaText
            textColor="white"
            maxWidth={977}
            heading="Conclusion"
            subHeading="The final product ensured that we came up with an app that allowed users to create a one-of-a-kind apparel. Simply see it, snap it, and wear it. Upload your image here, and we will send you an exclusive garment in full colour, all over apparel print. You’re a few clicks away from bringing your designs to life. If you need help with designing your item, check out our gallery for inspiration. (We’re good at that, by the way)."
          />
        </div>
        <div className="w-full px-4 md:px-[30px] lg:px-[55px] 2xl:px-0">
          <video
            width="1504"
            height="813"
            className="w-full max-w-[1447px] 2xl:w-[1504px] max-h-[813px] h-full mx-auto"
            controls
          >
            <source
              className="w-full max-h-[813px] h-full mx-auto"
              src="/video/InguboMobileApp.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <RelatedWork />
        <div className="w-full overflow-hidden">
          <FooterTextDecoration translate="ml-[750px]" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default InguboApp;
