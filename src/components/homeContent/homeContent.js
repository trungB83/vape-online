import React from "react";
import "./homeContent.scss";
import { Row, Col } from "antd";
import sliderImg from "../../assets/images/slider.jpg";
import icon1 from "../../assets/images/icon-1.png";
import icon3 from "../../assets/images/icon3.png";
import icon4 from "../../assets/images/icon-4.png";
import prductImg from "../../assets/images/IQOS-BLUE-gia-ban-hcm-0.jpg";

function homeContent() {
  return (
    <>
      <section className="slider">
        <img src={sliderImg} alt="" height="100%" />
      </section>
      <section className="policy">
        <div className="container">
          <div className="policy-content">
            <div className="policy-item">
              <img src={icon1} alt="" />
              <h3 className="policy-item-title">
                KHÔNG ẢNH HƯỞNG NGƯỜI XUNG QUANH
              </h3>
              <div className="policy-item-description">
                Bạn đang muốn tìm hiểu và mua sản phẩm IQOS để chăm sóc sức khỏe
                của mình và những người xung quanh!
              </div>
            </div>
            <div className="policy-item">
              <img src={icon3} alt="" />
              <h3 className="policy-item-title">KHÔNG CÓ MÙI ÁM MÙI</h3>
              <div className="policy-item-description">
                Bạn đang muốn tìm hiểu và mua sản phẩm IQOS để chăm sóc sức khỏe
                của mình và những người xung quanh!
              </div>
            </div>
            <div className="policy-item">
              <img src={icon4} alt="" />
              <h3 className="policy-item-title">
                GIẢM 95% ĐỘC TỐ LÀM HẠI CƠ THỂ BẠN
              </h3>
              <div className="policy-item-description">
                Bạn đang muốn tìm hiểu và mua sản phẩm IQOS để chăm sóc sức khỏe
                của mình và những người xung quanh!
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="introduce">
        <div className="container">
          <div className="introduce-content">
            <h1 className="introduce-title">Giới thiệu về IQOS Việt Nam</h1>
            <div className="introduce-text">
              <div className="introduce-text-left">
                <p>
                  <strong>
                    Với chất lượng đã được khẳng định cùng mức giá cạnh tranh
                    trên thị trường,{" "}
                    <a href="/" className="blue-link">
                      <strong>thuốc lá IQOS</strong>
                    </a>{" "}
                    đã và đang trở thành sự lựa chọn hàng đầu của đông đảo khách
                    hàng khi có nhu cầu về sản phẩm thuốc lá IQOS và máy hút
                    thuốc IQOS.
                  </strong>
                </p>
                <p>
                  Bạn đang có nhu cầu về <strong>thuốc lá IQOS</strong> và máy
                  hút thuốc <strong>IQOS</strong>?
                </p>
                <p>
                  Bạn phân vân chưa biết nên tìm mua sản phẩm tại địa chỉ cung
                  cấp nào nhằm đảm bảo uy tín, chất lượng và giá cả?
                </p>
              </div>
              <div className="introduce-text-right">
                <p>
                  Hãy đến với <strong>IQOS Sài Gòn</strong> của chúng tôi ngay
                  hôm nay. Sở hữu rất nhiều ưu điểm nổi bật so với các đối thủ
                  cạnh tranh, IQOS Sài Gòn ngày càng được rất nhiều khách hàng
                  yêu thích và lựa chọn sử dụng.
                </p>
                <p>
                  <strong>
                    – Mẫu mã đa dạng, chủng loại phong phú, đáp ứng nhu cầu của
                    đông đảo khách hàng
                  </strong>
                </p>
                <p>
                  Nhằm đáp ứng yêu cầu của khách hàng, IQOS Sài Gòn cung ứng các
                  sản phẩm thuốc lá và máy hút thuốc IQOS với mẫu mã đa dạng,
                  chủng loại phong phú. Tùy theo từng yêu cầu và điều kiện mà
                  quý khách hoàn toàn có thể lựa chọn cho mình một sản phẩm phù
                  hợp.
                </p>
                <div className="introduce-button-group">
                  <a href="/" className="introduce-btn more-btn">
                    Tìm hiểu thêm
                  </a>
                  <a href="/" className="introduce-btn video-btn">
                    Video giới thiệu
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="products">
        <div className="container">
          <h1 className="products-title-section">Sản phẩm IQOS</h1>
          <div clasName="products__group">
            <ul className="products__list">
              <li className="product__item">
                <img src={prductImg} width="960" height="960" />
                <div className="product-text">
                  <div className="product-title">IQOS 2.4 Limited Blue</div>
                  <p className="product-price">5.000.000 VNĐ</p>
                </div>
              </li>
              <li className="product__item">
                <img src={prductImg} width="960" height="960" />
                <div className="product-text">
                  <div className="product-title">IQOS 2.4 Limited Blue</div>
                  <p className="product-price">5.000.000 VNĐ</p>
                </div>
              </li>
              <li className="product__item">
                <img src={prductImg} width="960" height="960" />
                <div className="product-text">
                  <div className="product-title">IQOS 2.4 Limited Blue</div>
                  <p className="product-price">5.000.000 VNĐ</p>
                </div>
              </li>
              <li className="product__item">
                <img src={prductImg} width="960" height="960" />
                <div className="product-text">
                  <div className="product-title">IQOS 2.4 Limited Blue</div>
                  <p className="product-price">5.000.000 VNĐ</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="products-list-accessory">
        <div className="container">
          <h1 className="products-title-section">Phụ kiện IQOS</h1>
          <div clasName="products__group">
            <ul className="products__list">
              <li className="product__item">
                <img src={prductImg} width="960" height="960" />
                <div className="product-text">
                  <div className="product-title">IQOS 2.4 Limited Blue</div>
                  <p className="product-price">5.000.000 VNĐ</p>
                </div>
              </li>
              <li className="product__item">
                <img src={prductImg} width="960" height="960" />
                <div className="product-text">
                  <div className="product-title">IQOS 2.4 Limited Blue</div>
                  <p className="product-price">5.000.000 VNĐ</p>
                </div>
              </li>
              <li className="product__item">
                <img src={prductImg} width="960" height="960" />
                <div className="product-text">
                  <div className="product-title">IQOS 2.4 Limited Blue</div>
                  <p className="product-price">5.000.000 VNĐ</p>
                </div>
              </li>
              <li className="product__item">
                <img src={prductImg} width="960" height="960" />
                <div className="product-text">
                  <div className="product-title">IQOS 2.4 Limited Blue</div>
                  <p className="product-price">5.000.000 VNĐ</p>
                </div>
              </li>
              <li className="product__item">
                <img src={prductImg} width="960" height="960" />
                <div className="product-text">
                  <div className="product-title">IQOS 2.4 Limited Blue</div>
                  <p className="product-price">5.000.000 VNĐ</p>
                </div>
              </li>
              <li className="product__item">
                <img src={prductImg} width="960" height="960" />
                <div className="product-text">
                  <div className="product-title">IQOS 2.4 Limited Blue</div>
                  <p className="product-price">5.000.000 VNĐ</p>
                </div>
              </li>
              <li className="product__item">
                <img src={prductImg} width="960" height="960" />
                <div className="product-text">
                  <div className="product-title">IQOS 2.4 Limited Blue</div>
                  <p className="product-price">5.000.000 VNĐ</p>
                </div>
              </li>
              <li className="product__item">
                <img src={prductImg} width="960" height="960" />
                <div className="product-text">
                  <div className="product-title">IQOS 2.4 Limited Blue</div>
                  <p className="product-price">5.000.000 VNĐ</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="products-list-cigarette">
        <div className="container">
          <h1 className="products-title-section">Thuốc lá IQOS</h1>
          <div clasName="products__group">
            <ul className="products__list">
              <li className="product__item">
                <img src={prductImg} width="960" height="960" />
                <div className="product-text">
                  <div className="product-title">IQOS 2.4 Limited Blue</div>
                  <p className="product-price">5.000.000 VNĐ</p>
                </div>
              </li>
              <li className="product__item">
                <img src={prductImg} width="960" height="960" />
                <div className="product-text">
                  <div className="product-title">IQOS 2.4 Limited Blue</div>
                  <p className="product-price">5.000.000 VNĐ</p>
                </div>
              </li>
              <li className="product__item">
                <img src={prductImg} width="960" height="960" />
                <div className="product-text">
                  <div className="product-title">IQOS 2.4 Limited Blue</div>
                  <p className="product-price">5.000.000 VNĐ</p>
                </div>
              </li>
              <li className="product__item">
                <img src={prductImg} width="960" height="960" />
                <div className="product-text">
                  <div className="product-title">IQOS 2.4 Limited Blue</div>
                  <p className="product-price">5.000.000 VNĐ</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="big-description"></section>
      <section className="post-list"></section>
    </>
  );
}

export default homeContent;
