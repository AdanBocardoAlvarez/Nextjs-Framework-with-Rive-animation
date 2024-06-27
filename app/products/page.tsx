import Products from "@/components/Product/Products";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import React from "react";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Products | Just Get Visible - Innovative Digital Solutions',
  description: 'Our innovative digital solutions are designed to enhance your online presence, streamline operations, and drive success in a competitive digital market.',
}

const Product = () => {
  return (
    <>
      <Navbar />
      <Products />
      <Footer />
    </>
  );
};

export default Product;
