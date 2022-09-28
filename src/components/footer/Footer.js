import React from "react";
import { Link } from "react-router-dom";
import './Footer.scss'
import emailImg from '../../assets/images/email.png';
import phoneImg from '../../assets/images/phone.png';
import locationImg from '../../assets/images/location.png'

function Footer() {
  return <div className="app-footer">
    <footer className="footer">
        <div className="container">
          <div className="footer-main">
            <div className="footer__infor">
              <h3 className="footer-title">Thông tin công ty</h3>
              <div className="footer__infor-list">
                <div className="footer__infor-item">
                  <img src={locationImg} alt="" />
                  <p>Phạm Văn Bạch, P.15, Q.Tân Bình, Tp. HCM</p>
                </div>
                <Link to="tel:+0999.999.999" className="footer__infor-item">
                  <img src={phoneImg} alt="" />
                  <p>
                    0999.999.999</p>
                </Link>
                <Link to="mailto:email@gmail.com" className="footer__infor-item">
                  <img src={emailImg} alt="" />
                  <p>Địa chỉ email:
                    email@gmail.com</p>
                </Link>
              </div>
            </div>
            <div className="footer__form-contact">
              <h3 className="footer-title">Liên hệ với chúng tôi</h3>
              <form action>
                <input type="text" name className="footer__form-input" placehoder="Họ và tên..." />
                <input type="tel" name className="footer__form-input" placehoder="Số điện thoại..." />
                <input type="text" name className="footer__form-input" placehoder="Địa chỉ của bạn..." />
                <input type="email" name className="footer__form-input" placehoder="Địa chỉ emaill..." />
                <textarea name className="footer__form-text-area" placeholder="Ghi chú thêm..." cols={30} rows={2} defaultValue={""} />
                <input type="submit" value="Liên hệ ngay" className="footer__form-button" />
              </form>
            </div>
            <div className="footer__map">
              <h3 className="footer-title">
                Bản đồ chỉ dẫn đường đi
              </h3>
              <div className="footer__map-google">
                <iframe title="google" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.7758248635732!2d106.63896631411689!3d10.828460261193747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175297083300d87%3A0xdeb22a0102c21304!2zMTUgUGjhuqFtIFbEg24gQuG6oWNoLCBQaMaw4budbmcgMTUsIFTDom4gQsOsbmgsIEjhu5MgQ2jDrSBNaW5oLCBWaWV0bmFt!5e0!3m2!1sen!2s!4v1558877243555!5m2!1sen!2s" width="100%" height={250} frameBorder={0} style={{border: 0}} allowFullScreen />
              </div>
            </div>
          </div>
        </div>
      </footer>
  </div>;
}

export default Footer;
