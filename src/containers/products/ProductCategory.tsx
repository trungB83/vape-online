import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ProductCategories from "../../components/productCategory/productCategory";
import axios from "axios";
import { useSelector } from "react-redux";
import { get } from "lodash";

function ProductCategory() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      let productRes = await axios.get("http://localhost:3003/products");
      setProducts(productRes.data.list);
    };
    getProducts();
  }, []);

  const configApp = useSelector((state: any) => state.config);
  const config = get(configApp, "list.result.data");

  return (
    <div className="app">
      <Header appConfig={config}/>
      <ProductCategories products={products} />
      <Footer />
    </div>
  );
}

export default ProductCategory;
