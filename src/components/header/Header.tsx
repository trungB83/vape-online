import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import logoImg from "../../assets/images/logogiuseart.png";
import hotlineImg from "assets/images/hotline.png";
import routes from "constants/routes";
import CONFIGS from 'configs';
import { get } from 'lodash';

function Header(props: any) {
  return (
    <div className="app-header">
      <header className="header">
        <div className="container">
          <div className="header-main">
            <div className="header__logo">
         
              <img src={`${CONFIGS.UPLOAD_API_URL}/${get(props, 'appConfig.CONFIG_CLIENT.value.client_logo', '')}`} className="app-logo" />
      
            </div>
            <nav className="header__navigate">
              <ul className="header__navigate-list">
                <li className="header__navigate-item">
                  <Link to="/">Trang chủ</Link>
                </li>
                <li className="header__navigate-item">
                  <Link to="/introduce">Giới thiệu</Link>
                </li>
                <li className="header__navigate-item">
                  <Link to="/product-category/:productCategoryId">
                    Sản phẩm
                  </Link>
                </li>
                <li className="header__navigate-item">
                  <Link to="/post-category/1">Tin Tức</Link>
                </li>
                <li className="header__navigate-item">
                  <Link to="/post-category/2">Hỏi đáp</Link>
                </li>
                <li className="header__navigate-item">
                  <Link to="/">Ý kiến khách hàng</Link>
                </li>
                <li className="header__navigate-item">
                  <Link to="/contact">Liên hệ</Link>
                </li>
                <li className="header__navigate-item">
                  <Link to={routes.login}>Đăng nhập</Link>
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
