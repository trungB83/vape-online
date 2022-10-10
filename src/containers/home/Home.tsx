import React from "react";
import Header from "components/header/Header";
import Footer from "components/footer/Footer";
import HomeContent from "components/homeContent/homeContent";


function Home() {
  return (
    <div className="app">
      <Header/>
      <HomeContent />
      <Footer />
    </div>
  );
}

export default Home;
