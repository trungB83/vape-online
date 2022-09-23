import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import logoImg from '../../assets/images/logo-giuseart.png'
import hotlineImg from '../../assets/images/hotline.png'

function Header() {
  return (
    <div className="app-header">
      <header className="header">
        <div className="container">
          <div className="header-main">
            <div className="header__logo">
              <Link to="#">
                <img src={logoImg} alt="" />
              </Link>
            </div>
            <nav className="header__navigate">
              <ul className="header__navigate-list">
                <li className="header__navigate-item">
                  <Link to="/">Trang chủ</Link>
                </li>
                <li className="header__navigate-item">
                  <Link to="/">Giới thiệu</Link>
                </li>
                <li className="header__navigate-item">
                  <Link to="/">Sản phẩm</Link>
                </li>
                <li className="header__navigate-item">
                  <Link to="/">Tin Tức</Link>
                </li>
                <li className="header__navigate-item">
                  <Link to="/">Hỏi đáp</Link>
                </li>
                <li className="header__navigate-item">
                  <Link to="/">Ý kiến khách hàng</Link>
                </li>
                <li className="header__navigate-item">
                  <Link to="/">Liên hệ</Link>
                </li>
              </ul>
            </nav>
            <div className="header__hotline">
              <img src={hotlineImg} alt="" />
              <div className="header__hotline-text">
                <h6 className="header__hotline-title">HOTLINE</h6>
                <p>0999.999.999</p>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
