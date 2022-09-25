import React from "react";
import Header from "components/header/Header";
import Footer from "components/footer/Footer";
import ProductDetails from "components/ProductDetail/ProductDetail";

function ProductDetail() {
  return (
    <div className="app">
      <Header />
      <ProductDetails />
      <Footer />
    </div>
  );
}

export default ProductDetail;
