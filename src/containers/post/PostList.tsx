import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import PostListContent from '../../components/postList/PostList';
import axios from "axios";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { get } from "lodash";

function PostList(props:any) {

  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getDatas = async () => {
      let productRes = await axios.get("http://localhost:3003/products");
      console.log("productRes", productRes);
      
      setProducts(productRes.data.list);
    };
    getDatas();
  }, []);

  const params = useParams();
  const configApp = useSelector((state: any) => state.config);
  const config = get(configApp, "list.result.data");
  const HOT_POSTS = get(configApp, 'list.result.data.HOT_POSTS', []);
  if (props.hidden) return null;

  

  return (
    <div className="app">
      <Header appConfig={config}/>
      <PostListContent products={products}  HOT_POSTS={HOT_POSTS}/>
      <Footer />
    </div>
  );
}

export default PostList;
