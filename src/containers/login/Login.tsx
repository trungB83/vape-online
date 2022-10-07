import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import LoginContent from '../../components/login/loginContent';

function Login() {
  return (
    <div className="app">
      <Header />
      <LoginContent/>
      <Footer />
    </div>
  );
}

export default Login;
