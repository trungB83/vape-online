import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import PostListContent from '../../components/postList/PostList';
import axios from "axios";
import { useParams } from "react-router-dom";

function PostList() {
  const [posts, setPosts] = useState([]);
  const [categoryPosts, setCategoryPost] = useState([]);
  const [currentCategory, setCurrentCategory] = useState({});
  const params = useParams();
  
  useEffect(() => {
    const getPosts = async () => {
      let postRes = await axios.get("http://localhost:3003/posts");
      console.log("postRes", postRes);
      const currentPosts = postRes.data.list.filter((item:any) => item.post_category_id == params.postCategoryId);
      console.log("currentPosts", currentPosts);
      setPosts(currentPosts);
      setCategoryPost(postRes.data.category_list);
      const currentCate = postRes.data.category_list.find((item:any) => item.post_category_id == params.postCategoryId);
      setCurrentCategory(currentCate);
      console.log("currentCategory", currentCategory);
    };
    if (params.postCategoryId) {
      getPosts()
    }
  }, [params]);

  return (
    <div className="app">
      <Header />
      <PostListContent posts={posts}/>
      <Footer />
    </div>
  );
}

export default PostList;
