import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ProductDetails from "../../components/ProductDetail/ProductDetail";
import axios from 'axios';
import { useParams } from "react-router-dom";

function ProductDetail() {
  const [product, setProduct] = useState({});
  const params = useParams();
console.log("params", params);

  useEffect(() => {
    const getData = async () => {
      let productRes = await axios.get("http://localhost:3003/products");
      setProduct(productRes.data);
      console.log("products", product);

      const detailProduct = productRes.data.list.find((prod:any) => prod.prod_id == params.productId )
      console.log("123" , detailProduct);
      setProduct(detailProduct);
    };
    if(params.productId){
      getData();
    }
  }, [params.productId]);
  console.log("product", product);
  


  return (
    <div className="app">
      <Header />
      <ProductDetails product={product}/>
      <Footer />
    </div>
  );
}

export default ProductDetail;
