import React from "react";
import Header from "components/header/Header";
import Footer from "components/footer/Footer";
import HomeContent from "components/homeContent/homeContent";
import { useEffect } from "react";
import { useStore } from "../../store";
import { TYPES } from "../../store";
import { fetchPostCates, fetchPosts } from "../../services/post.service";
import {fetchProducts , fetchProductCates} from "../../services/product.service"

function Home() {

  const [state, dispatch] = useStore();
  console.log("state", state);

  useEffect(() => {
    const getNav = async () => {
      let postRes = await fetchPosts();
      dispatch({ type: TYPES.GET_POSTS, payload: postRes });
        console.log("postRes", postRes);
      let postCateRes = await fetchPostCates();
      dispatch({ type: TYPES.GET_POST_CATEGORIES, payload: postCateRes });
        console.log("postCateRes" , postCateRes);


      let productRes = await fetchProducts();
      dispatch({ type: TYPES.GET_PRODUCTS, payload: productRes });
      console.log("productRes", productRes);
      let productCateRes = await fetchProductCates();
      dispatch({ type: TYPES.GET_PRODUCTS_CATEGORIES, payload: productCateRes });
      console.log("productCateRes", productCateRes);
      
      // setCategoryPost(postRes.data.category_list);
      // let productRes = await axios.get("http://localhost:3003/products");
      // setCategoryProducts(productRes.data.category_list);
    };
    getNav();
  }, [dispatch]);

  return (
    <div className="app">
      <Header/>
      <HomeContent />
      <Footer />

    </div>
  );
}

export default Home;
