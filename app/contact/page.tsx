import React from "react";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import BackImageDecoration from "@/components/common/BackImageDecoration";
import TopHeading from "@/components/common/TopHeading";
import ContactMain from "@/components/contact/ContactMain";
import FooterTextDecoration from "@/components/common/FooterTextDecoration";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | Reach Out for Expert Digital Solutions',
  description: 'Connect with Just Get Visible via our contact form. Reach out to discuss your digital needs and explore how our expert solutions can help you.',
}

const Contact = () => {
  return (
    <>
      <Navbar />
      <PrimeReactProvider>
        <div className="bg-[#003465] relative font-montserrat overflow-hidden">
          <BackImageDecoration />
          <div className="max-w-[1567px] w-full mx-auto px-4 md:px-7 xl:px-[55px] pt-[110px] md:pt-[182px] xl:pt-[167px]">
            {/* Top heading */}
            <div
              className="w-fit mx-auto relative z-10 mb-[-5%] sm:mb-[-35px] md:mb-10 
          xl:mb-[-68px]"
            >
              <TopHeading
                heading="Contact"
                textSize="text-[18vw] 2xl:text-[15.5vw]"
              />
            </div>
            <ContactMain />
          </div>

          <div className="w-full overflow-hidden realtive -mb-1">
            <FooterTextDecoration translate="ml-[730px]" />
          </div>
        </div>
      </PrimeReactProvider>
      <Footer />
    </>
  );
};

export default Contact;
