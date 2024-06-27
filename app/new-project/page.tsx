import React from "react";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import BackImageDecoration from "@/components/common/BackImageDecoration";
import TopHeading from "@/components/common/TopHeading";
import RequestQuoteMain from "@/components/request-quote/RequestQuoteMain";
import FooterTextDecoration from "@/components/common/FooterTextDecoration";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Request a Quotation | Just Get Visible',
  description: 'Get a custom quote for your digital needs with Just Get Visible. Fill out our form for tailored solutions, enhancing your online presence.',
}

const RequestQuote = () => {
  return (
    <>
      <Navbar />
      <PrimeReactProvider>
        <div className="bg-[#003465] w-full relative font-montserrat overflow-hidden">
          <BackImageDecoration />
          <div className="max-w-[1567px] w-full mx-auto px-4 md:px-7 xl:px-[55px] pt-[110px] md:pt-[182px] xl:pt-[167px]">
            {/* Top heading */}
            <div
              className="w-fit mx-auto relative z-10 mb-[-5%] sm:mb-[-35px] md:mb-10 
          xl:mb-[-68px]"
            >
              <TopHeading
                heading="Request a Quotation"
                textSize="text-[15vw] 2xl:text-[13.5vw]"
              />
            </div>
            <RequestQuoteMain />
          </div>
          <FooterTextDecoration translate="-ml-[0] 2xl:-ml-[400px]" />
        </div>
      </PrimeReactProvider>
      <Footer />
    </>
  );
};

export default RequestQuote;
