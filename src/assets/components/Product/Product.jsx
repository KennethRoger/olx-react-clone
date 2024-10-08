import React from "react";
import ProductDetails from "./ProductDetails/ProductDetails";
import QuickLinks from "../Home/Footer/FooterComponents/QuickLinks";
import PartnerSection from "../Home/Footer/FooterComponents/PartnerSection";
import Header from "../Home/Header/Header";
import { useParams } from "react-router-dom";

function Product() {
  const { id } = useParams();
  return (
    <>
      <Header />
      <main className="flex justify-center">
        <div className="w-[65%]">
          <ProductDetails id={id} />
        </div>
      </main>
      <QuickLinks />
      <PartnerSection />
    </>
  );
}

export default Product;
