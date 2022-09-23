import React from "react";
import "./homeContent.scss";
import { Row, Col } from "antd";
import sliderImg from '../../assets/images/slider.jpg'

function homeContent() {
  return (
    <>
      <section class="slider">
        <img src={sliderImg} alt="" height="100%" />
      </section>
      <section class="policy">
        <div class="container">
          <div class="policy-content">
            <div class="policy-item">
              <img src="./imgs/icon-1.png" alt="" />
              <h3 class="policy-item-title">
                KHÔNG ẢNH HƯỞNG NGƯỜI XUNG QUANH
              </h3>
              <div class="policy-item-description">
                Bạn đang muốn tìm hiểu và mua sản phẩm IQOS để chăm sóc sức khỏe
                của mình và những người xung quanh!
              </div>
            </div>
            <div class="policy-item">
              <img src="./imgs/icon3.png" alt="" />
              <h3 class="policy-item-title">KHÔNG CÓ MÙI ÁM MÙI</h3>
              <div class="policy-item-description">
                Bạn đang muốn tìm hiểu và mua sản phẩm IQOS để chăm sóc sức khỏe
                của mình và những người xung quanh!
              </div>
            </div>
            <div class="policy-item">
              <img src="./imgs/icon-4.png" alt="" />
              <h3 class="policy-item-title">
                GIẢM 95% ĐỘC TỐ LÀM HẠI CƠ THỂ BẠN
              </h3>
              <div class="policy-item-description">
                Bạn đang muốn tìm hiểu và mua sản phẩm IQOS để chăm sóc sức khỏe
                của mình và những người xung quanh!
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="introduce">
        <div class="container">
          <div class="introduce-content">
            <h1 class="introduce-title">Giới thiệu về IQOS Việt Nam</h1>
            <div class="introduce-text">
              <div class="introduce-text-left">
                <p>
                  <strong>
                    Với chất lượng đã được khẳng định cùng mức giá cạnh tranh
                    trên thị trường,{" "}
                    <a href="/" class="blue-link">
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
              <div class="introduce-text-right">
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
                <div class="introduce-button-group">
                  <a href="/" class="introduce-btn more-btn">
                    Tìm hiểu thêm
                  </a>
                  <a href="/" class="introduce-btn video-btn">
                    Video giới thiệu
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="products-list"></section>
      <section class="products-list-accessory"></section>
      <section class="products-list-cigarette"></section>
      <section class="big-description"></section>
      <section class="post-list"></section>
    </>
  );
}

export default homeContent;
