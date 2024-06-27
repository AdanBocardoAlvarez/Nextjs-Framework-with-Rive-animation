import BackImageDecoration from "@/components/common/BackImageDecoration";
import Footer from "@/components/common/Footer";
import FooterHeading from "@/components/common/FooterHeading";
import Navbar from "@/components/common/Navbar";
import TopHeading from "@/components/common/TopHeading";
import FranzosHero from "@/components/franzos/FranzosHero";
import RelatedWork from "@/components/franzos/RelatedWork";
import { foodityHeroData } from "@/components/common/Helper";
import FoodityBrandPurposeComponent from "@/components/foodity/FoodityBrandPurposeComponent";
import FoodityImageryTypo from "@/components/foodity/FoodityImageryTypo";
import ShortHeadWithParaText from "@/components/common/ShortHeadWithParaText";
import FoodityColateralCreated from "@/components/foodity/FoodityColateralCreated";
import FooterTextDecoration from "@/components/common/FooterTextDecoration";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Branding Foodity | Revamping Identity & Driving Growth',
  description: 'Fooditys purpose is to revolutionise charity by offering customers the opportunity to make a difference with every bite. Combining food with meaningful charity.',
}

const Foodity = () => {
  return (
    <>
      <Navbar />
      <div className="bg-[#003465] relative font-montserrat">
        <BackImageDecoration />
        {/* Foodity hero */}
        <div
          className="max-w-[1567px] w-full mx-auto px-4 md:px-7 xl:px-[55px] pt-28 
        lg:pt-[167px]"
        >
          <div
            className="w-fit mx-auto relative z-10 mb-[-5%] sm:mb-[-35px] md:mb-[-40px] 
          xl:mb-[-68px]"
          >
            <TopHeading
              heading="Foodity"
              textSize="text-[18vw] 2xl:text-[16vw]"
            />
            <p
              className="absolute top-[40%] lg:top-[50%] left-1/2 -translate-x-1/2 font-montserrat font-semibold text-sm 
            sm:text-[18px] md:text-[24px] lg:text-[28px] xl:text-[32px] text-center text-white leading-[93%] uppercase ml-2"
            >
              Branding
            </p>
          </div>
          <p className="max-w-[751px] w-full mx-auto font-montserrat font-black text-white text-center text-[16px] sm:text-[20px] md:text-[24px] lg:text-[32px] xl:text-[40px] leading-[130%] uppercase z-20 relative">
            Brand strategy and identity for a new charity
          </p>
          <FranzosHero data={foodityHeroData} />
        </div>
        <FoodityBrandPurposeComponent />
        {/* The challenge */}
        <div className="mx-auto bg-white pt-16 sm:pt-[90px] md:pt-[110px] pb-[100px] lg:pt-[121px] lg:pb-[115px] px-4 md:px-7 xl:px-[55px] 2xl:px-0">
          <ShortHeadWithParaText
            textColor="#003465"
            maxWidth={757}
            heading="The Challenge"
            subHeading="Despite its noble mission, The Foodity lacked a cohesive brand
            identity that effectively communicated its purpose and values to its
            audience. Our challenge was to create a branding strategy that would
            capture the essence of The Foodity's mission and elevate its
            visibility in the marketplace."
          />
        </div>
        <FoodityImageryTypo />
        <FoodityColateralCreated />
        {/* Conclusion */}
        <div className="mx-auto pt-[120px] sm:pt-[155px] md:pt-[180px] lg:pt-[220px] px-4 md:px-7 xl:px-[55px] 2xl:px-0">
          <ShortHeadWithParaText
            textColor="white"
            maxWidth={977}
            heading="Conclusion"
            subHeading="Franzos has proven that a well-crafted brand identity coupled with exceptional cuisine can create an irresistible combination that resonates with customers and fuels franchise growth. With its flame-grilled piri piri chicken and burgers, Franzos continues to leave a lasting impression on food enthusiasts, setting new standards for culinary excellence and memorable dining experiences. We are happy to have helped Franzos achieve their goals and express their passion through their brand identity"
          />
        </div>
        <RelatedWork />
        <div className="w-full overflow-hidden">
          <FooterTextDecoration translate="ml-[730px]" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Foodity;
