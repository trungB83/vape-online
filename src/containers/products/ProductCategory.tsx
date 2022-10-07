import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ProductCategories from "../../components/productCategory/productCategory";

function ProductCategory() {
  return (
    <div className="app">
      <Header />
      <ProductCategories />
      <Footer />
    </div>
  );
}

export default ProductCategory;
