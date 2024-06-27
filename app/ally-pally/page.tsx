import AllyPallyHero from "@/components/allpalley/AllPalleyHero";
import AllyPallyChalange from "@/components/allpalley/AllpalleyChalange";
import AllyHairsalon from "@/components/allpalley/AllyHairsalon";
import AllyProducts from "@/components/allpalley/AllyProducts";
import BrandElements from "@/components/allpalley/BrandElements";
import ImageryTypo from "@/components/allpalley/ImageryTypo";
import Imapct from "@/components/allpalley/Imapct";
import LogoColorpallet from "@/components/allpalley/LogoColorpallet";
import Footer from "@/components/common/Footer";
import FooterHeading from "@/components/common/FooterHeading";
import FooterTextDecoration from "@/components/common/FooterTextDecoration";
import Navbar from "@/components/common/Navbar";
import RelatedWork from "@/components/franzos/RelatedWork";
import React from "react";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Branding Ally Pally Hairdresser | Transforming Identity & Success',
  description: 'Branding Ally Pally Hairdresser with Just Get Visible. Discover how we transformed their identity, helping them stand out in the competitive industry.',
}
const page = () => {
  return (
    <>
      <Navbar />
      <div className="bg-[#003465]">
        <AllyPallyHero
          image="/img/ally-palley-hero.webp"
          leadTime="6 weaks"
          sector="food"
          target="B2C"
          services="Brand Identity & Website"
          text="Ally Pally, a barbershop situated in Alexandra Palace, embarked on a rebranding journey to redefine its identity, aiming to resonate with a wider audience while preserving its distinct character and charm."
          width="max-w-[847px]"
        />
        <AllyPallyChalange />
        <ImageryTypo
          imagerytext="Inspired by the eclectic atmosphere of Alexandra Palace and the rich heritage of barbershop culture, the rebranding initiative centered on vibrant imagery reflecting Ally Pally's dynamic ambiance. Bold visuals were carefully curated to convey style and sophistication, distinguishing the barbershop in a competitive market."
          typographytext="Typography played a pivotal role in shaping Ally Pally's brand identity, with fonts selected to convey modernity and professionalism while maintaining an inviting feel. Clean lines and contemporary typography added an element of refinement, aligning with the barbershop's commitment to precision and quality."
        />
        <AllyHairsalon />
        <LogoColorpallet
          logotext="The cornerstone of the rebranding effort, the logo was crafted from iconic elements found within the barbershop, such as scissors and mustaches. This bespoke design captured the essence of Ally Pally's personality, creating a memorable visual identity rooted in the barbershop's unique offerings and heritage."
          colorpallatetext="The color palette for Ally Pally was intentionally minimalistic, consisting primarily of classic black and crisp white. This choice was made to embody simplicity and timelessness, aligning with the traditional aesthetic of barbershops while conveying professionalism and clarity."
        />
        <BrandElements
          title="Brand Elements"
          text="Secondary elements were introduced with carefully selected colors to add depth and visual interest, complementing the primary palette and enhancing the overall brand experience."
        />
        <AllyProducts />
        <Imapct />
        <div className=" relative w-full overflow-hidden">
          <RelatedWork />
          <FooterTextDecoration translate="ml-[730px]" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
