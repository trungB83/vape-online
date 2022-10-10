import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ProductCategories from "../../components/productCategory/productCategory";
import axios from "axios";

function ProductCategory() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      let productRes = await axios.get("http://localhost:3003/products");
      setProducts(productRes.data.list);
      console.log("products", products);
    };
    getProducts();
  }, []);

  return (
    <div className="app">
      <Header />
      <ProductCategories products={products} />
      <Footer />
    </div>
  );
}

export default ProductCategory;
