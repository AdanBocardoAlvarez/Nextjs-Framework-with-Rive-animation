import AllBranding from "@/components/All-branding/AllBranding";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import React from "react";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Branding Services | Define Your Identity in the Digital World',
  description: 'Elevate your brand with branding services. Our expert solutions help you define your identity and stand out in the competitive digital landscape.',
}

const page = () => {
  return (
    <>
      <Navbar />
      <AllBranding />
      <Footer />
    </>
  );
};

export default page;
