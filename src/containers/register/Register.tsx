import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import RegisterContent from "components/register/RegisterContent";

function Register() {
  return (
    <div className="app">
      <Header />
      <RegisterContent/>
      <Footer />
    </div>
  );
}

export default Register;
