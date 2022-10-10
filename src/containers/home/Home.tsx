import React, { useEffect, useState } from "react";
import Header from "components/header/Header";
import Footer from "components/footer/Footer";
import HomeContent from "components/homeContent/homeContent";
import axios from "axios";

function Home () {
  const [products, setProducts] = useState([]);
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [categoryPosts, setCategoryPost] = useState([]);
  const [posts, setPosts] = useState([]);


  useEffect(() => {
    const getDatas = async () => {
      let productRes = await axios.get("http://localhost:3003/products");
      console.log("productRes", productRes);
      setProducts(productRes.data.list);
      console.log("products", products);

      setCategoryProducts(productRes.data.category_list);
      console.log("categoryProducts", categoryProducts);

      let postRes = await axios.get("http://localhost:3003/posts");
      setCategoryPost(postRes.data.category_list);
      console.log("categoryPosts", categoryPosts);
      setPosts(postRes.data.list);
      console.log("posts", posts);
    };
    getDatas();

  }, []);

  return (
    <div className="app">
      <Header categoryPosts={categoryPosts} categoryProducts={categoryProducts}/>
      <HomeContent products={products} posts={posts}/>
      <Footer />
    </div>
  );
}

export default Home;
