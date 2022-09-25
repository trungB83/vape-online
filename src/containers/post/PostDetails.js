import React from "react";
import Header from "components/header/Header";
import Footer from "components/footer/Footer";
import PostDetail from "components/postDetail/postDetail"
function PostDetails() {
  return (
    <div className="app">
      <Header />
      <PostDetail/>
      <Footer />
    </div>
  );
}

export default PostDetails;
