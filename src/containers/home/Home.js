import React from "react";
import Header from "components/header/Header";
import Footer from "components/footer/Footer";
import HomeContent from "components/homeContent/homeContent";
import { useEffect, useState } from "react";
import { useStore } from "store";
import axios from "axios";
import { API_URL } from "config";
import { TYPES } from "store";

function Home() {
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [categoryPosts, setCategoryPost] = useState([]);

  const [state, dispatch] = useStore();
  console.log("state", state);

  useEffect(() => {
    const getNav = async () => {
      let postRes = await axios.get(`${API_URL}/api/posts`);
      dispatch({ type: TYPES.GET_POSTS, payload: postRes.data });

      let postCateRes = await axios.get(`${API_URL}/api/post-categories`);
      console.log("postCateRes", postCateRes);

      // setCategoryPost(postRes.data.category_list);
      // let productRes = await axios.get("http://localhost:3003/products");
      // setCategoryProducts(productRes.data.category_list);
    };
    getNav();
  }, []);

  return (
    <div className="app">
      <Header />
      <HomeContent
        category_list={categoryProducts}
        categoryPosts={categoryPosts}
      />
      <Footer />
    </div>
  );
}

export default Home;
