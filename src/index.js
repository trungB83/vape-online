import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";

import App from "./App";
import reportWebVitals from "reportWebVitals";
import Home from "containers/home/Home";
import Contact from "containers/contact/Contact";
import ProductDetail from 'containers/products/ProductDetail';
import ProductCategory from 'containers/products/ProductCategory';

import "antd/dist/antd.css";
import "assets/styles/styles.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="product-category/:productCategoryId" element={<ProductCategory />} />
        <Route path="product/:productId" element={<ProductDetail />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
