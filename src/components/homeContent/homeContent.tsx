import React from "react";
import "./homeContent.scss";
import { Link } from "react-router-dom";
import sliderImg from "../../assets/images/slider.jpg";
import icon1 from "../../assets/images/icon-1.png";
import icon3 from "../../assets/images/icon3.png";
import icon4 from "../../assets/images/icon-4.png";
import prductImg from "../../assets/images/IQOSBLUEgiabanhcm0.jpg";
import chonkDescrpitionImg from "../../assets/images/cuahang.jpg";
import { Carousel } from "antd";

function HomeContent(props: any) {
  console.log("props", props);

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
                    trên thị trường,
                    <a href="/" className="blue-link">
                      <strong>thuốc lá IQOS</strong>
                    </a>
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
          <div className="products__group">
            <div className="products__list">
              {props.products.map((product: any, index: number) => (
                <Link
                  to={`/product/${product.prod_id}`}
                  className="product__item"
                >
                  <img src={product.prod_thumbnail} alt="product-img" />
                  <div className="product-text">
                    <div className="product-title">{product.prod_title}</div>
                    <p className="product-price">{product.prod_price}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="products-list-accessory">
        <div className="container">
          <h1 className="products-title-section">Phụ kiện IQOS</h1>
          <div className="products__group">
            <div className="products__list">
              {props.products.map((product: any, index: number) => (
                <Link
                  to={`/product/${product.prod_id}`}
                  className="product__item" key={product.prod_id}
                >
                  <img src={product.prod_thumbnail} alt="product-img" />
                  <div className="product-text">
                    <div className="product-title">{product.prod_title}</div>
                    <p className="product-price">{product.prod_price}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="products-list-cigarette">
        <div className="container">
          <h1 className="products-title-section">Thuốc lá IQOS</h1>
          <div className="products__group">
            <div className="products__list">
              {props.products.map((product: any, index: number) => (
                <Link
                  to={`/product/${product.prod_id}`}
                  className="product__item"
                >
                  <img src={product.prod_thumbnail} alt="product-img" />
                  <div className="product-text">
                    <div className="product-title">{product.prod_title}</div>
                    <p className="product-price">{product.prod_price}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="big-description">
        <div className="container">
          <div className="big-description-content">
            <div className="big-description__image">
              <img src={chonkDescrpitionImg} alt="" />
            </div>
            <div className="big-description__text">
              <h1 className="big-description__header">IQOS là gì?</h1>
              <p className="big-description__subdescription">
                IQOS là cuộc gặp gỡ giữa thuốc lá truyền thống và khoa học công
                nghệ
              </p>
              <ul className="big-description__list">
                <li className="big-description__item">
                  <p>
                    Được đầu tư hàng tỷ Đô để nghiên cứu và phát triển bởi tập
                    đoàn thuốc lá lớn nhất thế giới – Philip Morris ( Hãng sở
                    hữu các nhãn hiệu thuốc lá nổi tiếng như Marlboro… )
                  </p>
                </li>
                <li className="big-description__item">
                  <p>
                    Nó được coi là cách mạng trong ngành công nghiệp thuốc lá.
                  </p>
                </li>
                <li className="big-description__item">
                  <p>
                    Mặc dù ý tưởng làm nóng thuốc lá (thay vì đốt) đã được hơn
                    hai thập kỷ, nhưng chỉ bây giờ chúng ta mới có thể tìm ra
                    cách để làm nóng thuốc lá, dẫn đến một sản phẩm đáp ứng được
                    cho người hút thuốc lá
                  </p>
                </li>
                <li className="big-description__item">
                  <p>
                    Tại trung tâm của IQOS là các thiết bị điện tử tinh vi nhiệt
                    luyện các đơn vị thuốc lá được đốt nóng đặc biệt. IQOS đun
                    nóng thuốc lá vừa đủ để giải phóng hơi nước có chứa nicotin
                    và vẫn có hương vị mà thậm chí chúng ta không cần phải đốt
                    cháy thuốc.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="post-list">
        <h1 className="products-title-section">Tin tức / Video</h1>
        <div className="post__group">
          <div className="post__list">
          {props.posts.map((post: any, index: number) => (
            <Link
                to={`/post/${post.post_id}`}
                className="post__item"
                key={post.post_id}
              >
                <img src={post.post_thumbnail} alt="post-img" />
                <div className="post-text">
                  <div className="post-title">{post.post_name}</div>

                </div>
              </Link>
          ))}
              
       
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeContent;
