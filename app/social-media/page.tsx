import Footer from "@/components/common/Footer";
import FooterTextDecoration from "@/components/common/FooterTextDecoration";
import Navbar from "@/components/common/Navbar";
import SocialMediaCard from "@/components/socialmedia/SocialMediaCard";
import SocialMediaEntertainingCard from "@/components/socialmedia/SocialMediaEntertainingCard";
import SocialMediaHero from "@/components/socialmedia/SocialMediaHero";
import SocialMediaLastSection from "@/components/socialmedia/SocialMediaLastSection";
import SocialMediaMiddleText from "@/components/socialmedia/SocialMediaMiddleText";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Social Media Services: Just Get Visible Leading Digital Agency',
  description: 'Boost online engagement with Just Get Visible social media service. Our experts create compelling content and strategies to enhance your presence & results',
}

const SocialMedia = () => {
  return (
    <>
      <Navbar />
      <div className="bg-[#003465]">
        <SocialMediaHero />
        <SocialMediaEntertainingCard />
        <SocialMediaMiddleText />
        <SocialMediaCard />
        <SocialMediaLastSection />
        <div className="relative w-full overflow-hidden -mb-[2px]">
          <FooterTextDecoration translate="ml-[10px]" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SocialMedia;
