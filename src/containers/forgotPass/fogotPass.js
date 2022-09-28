import React from "react";
import Header from "components/header/Header";
import Footer from "components/footer/Footer";
import ForgotPasswordContent from '../../components/forgotPassword/forgotPasswordContent';

function forgotPass() {
  return (
    <div className="app">
      <Header />
      <ForgotPasswordContent/>
      <Footer />
    </div>
  );
}

export default forgotPass;
