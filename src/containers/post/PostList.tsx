import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import PostListContent from '../../components/postList/PostList';

function PostList() {
  return (
    <div className="app">
      <Header />
      <PostListContent />
      <Footer />
    </div>
  );
}

export default PostList;
