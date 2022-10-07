import "./postDetail.scss";
import React from "react";
import asideProductImg from "../../assets/images/nga-360x360-100x100.jpg";
import asidePostImg from "../../assets/images/circle-post.jpg";
import postImg from "../../assets/images/cuahang.jpg";
import { Link } from "react-router-dom";
function postDetail() {
  return (
    <div className="container">
      <div className="postDetail">
        <div className="postDetail__content">
          <Link to="/" className="postDetail__backToPostList">
            Tin tức - bài viết
          </Link>
          <div className="postDetail__title">
            Vị thuốc IQOS nào phù hợp với bạn
          </div>
          <div className="postDetail__image">
            <img src={postImg} alt="" />
          </div>
          <div className="postDetail__postContent">
            Để chiều lòng người sử dụng IQOS, nhà sản xuất đã cho ra mắt các vị
            thuốc khác nhau để thỏa mãn độ “phê” của người sử dụng. Các loại
            thuốc lá dành cho máy IQOS đang chiếm lĩnh thị trường: Marlboro
            (Phân phối trên thị trường Nhật Bản) Heets Âu (Phân phối trên thị
            trường Châu Âu: Nga, Ukraine, armenia…) Heets Hàn (Phân phối trên
            thị trường Hàn) Các dòng trên đều được sản xuất bởi tập đoàn Philip
            Morris tuy nhiên sản xuất cho các thị trường khác nhau nên cảm nhận
            khi hút mỗi dòng đều là một trải nghiệm hoàn toàn mới. Mùi khói
            thuốc Heets dường như đậm mùi khói hơn những dòng thuốc IQOS khác,
            nếu nhạy cảm thì người hút sẽ nhận thấy IQOS Heets giống với thuốc
            lá truyền thống nhất, lưu trọn vẹn hương vị thơm ngon từ đầu đến
            cuối. Bạn là người mới bắt đầu nên lựa chọn Heets Amber để làm quen
            với IQOS Dòng marlboro sẽ phù hợp với các anh đã hút thuốc lá lâu
            năm và hút với số lượng nhiều. Lượng khói thuốc sẽ nhiều hơn dòng
            Heets, vị thuốc có phần gắt cho những anh thích cảm giác ở cổ họng.
            Có 2 vị thuốc cơ bản theo nồng độ nicotin từ nhẹ đến đậm Vị truyền
            thống không bạc hà Vị có bạc hà Vị thuốc truyền thống không bạc hà
            Nếu bạn là một người đơn giản, thích phong cách cổ điển, thích những
            thứ quen thuộc thì đây chính là vị thuốc dành cho bạn. Vị các dòng
            thuốc này hoàn toàn giống với thuốc lá truyền thống. Điểm tên một
            vài loại thuốc có vị truyền thống:
          </div>
        </div>
        <div className="postDetail__aside">
          <aside className="postDetail__aside-block">
            <form className="postDetail__asideSearch">
              <input
                type="search"
                className="postDetail__asideSearch-input"
                placeholder="Tìm kiếm..."
              />
              <input
                type="submit"
                className="postDetail__asideSearch-submit"
                value="Search"
              />
            </form>
          </aside>
          <aside className="postDetail__aside-block">
            <h3 className="postDetail__aside-title">BÀI VIẾT XEM NHIỀU</h3>
            <div className="postDetail__aside-inner">
              <ul className="postDetail__asideMostView">
                <li className="postDetail__asideMostView-item">
                  <div className="postDetail__asideMostView-img">
                    <img src={asidePostImg} alt="" />
                  </div>
                  <Link to="/" className="postDetail__asideMostView-title">
                    Ở Hòa Bình mua iQOS ở đâu chính hãng?
                  </Link>
                </li>
                <li className="postDetail__asideMostView-item">
                  <div className="postDetail__asideMostView-img">
                    <img src={asidePostImg} alt="" />
                  </div>
                  <Link to="/" className="postDetail__asideMostView-title">
                    Ở Hòa Bình mua iQOS ở đâu chính hãng?
                  </Link>
                </li>
                <li className="postDetail__asideMostView-item">
                  <div className="postDetail__asideMostView-img">
                    <img src={asidePostImg} alt="" />
                  </div>
                  <Link to="/" className="postDetail__asideMostView-title">
                    Ở Hòa Bình mua iQOS ở đâu chính hãng?
                  </Link>
                </li>
                <li className="postDetail__asideMostView-item">
                  <div className="postDetail__asideMostView-img">
                    <img src={asidePostImg} alt="" />
                  </div>
                  <Link to="/" className="postDetail__asideMostView-title">
                    Ở Hòa Bình mua iQOS ở đâu chính hãng?
                  </Link>
                </li>
                <li className="postDetail__asideMostView-item">
                  <div className="postDetail__asideMostView-img">
                    <img src={asidePostImg} alt="" />
                  </div>
                  <Link to="/" className="postDetail__asideMostView-title">
                    Ở Hòa Bình mua iQOS ở đâu chính hãng?
                  </Link>
                </li>
              </ul>
            </div>
          </aside>
          <aside className="postDetail__aside-block">
            <h3 className="postDetail__aside-title">DANH MỤC SẢN PHẨM</h3>
            <div className="postDetail__aside-inner">
              <ul className="postDetail__asideCategory">
                <li className="postDetail__asideCategory-item">
                  <Link to="/">Phụ kiện</Link>
                </li>
                <li className="postDetail__asideCategory-item">
                  <Link to="/">Sản phẩm</Link>
                </li>
                <li className="postDetail__asideCategory-item">
                  <Link to="/">Thuốc lá IQOS</Link>
                </li>
              </ul>
            </div>
          </aside>
          <aside className="postDetail__aside-block">
            <h3 className="postDetail__aside-title">SẢN PHẨM NỔI BẬT</h3>
            <div className="postDetail__aside-inner">
              <ul className="postDetail__aside-vertial-list">
                <li className="postDetail__aside-vertial-item">
                  <img src={asideProductImg} alt="" />
                  <div className="postDetail__aside-vertial-text">
                    <h3 className="verticalProduct-title">
                      Thuốc Heets Âu cho IQOS
                    </h3>
                    <div className="verticalProduct-price">
                      <p>Giá:</p>
                      <p className="verticalProduct-price__text">Liên hệ</p>
                    </div>
                  </div>
                </li>
                <li className="postDetail__aside-vertial-item">
                  <img src={asideProductImg} alt="" />
                  <div className="postDetail__aside-vertial-text">
                    <h3 className="verticalProduct-title">
                      Thuốc Heets Âu cho IQOS
                    </h3>
                    <div className="verticalProduct-price">
                      <p>Giá:</p>
                      <p className="verticalProduct-price__text">Liên hệ</p>
                    </div>
                  </div>
                </li>
                <li className="postDetail__aside-vertial-item">
                  <img src={asideProductImg} alt="" />
                  <div className="postDetail__aside-vertial-text">
                    <h3 className="verticalProduct-title">
                      Thuốc Heets Âu cho IQOS
                    </h3>
                    <div className="verticalProduct-price">
                      <p>Giá:</p>
                      <p className="verticalProduct-price__text">Liên hệ</p>
                    </div>
                  </div>
                </li>
                <li className="postDetail__aside-vertial-item">
                  <img src={asideProductImg} alt="" />
                  <div className="postDetail__aside-vertial-text">
                    <h3 className="verticalProduct-title">
                      Thuốc Heets Âu cho IQOS
                    </h3>
                    <div className="verticalProduct-price">
                      <p>Giá:</p>
                      <p className="verticalProduct-price__text">Liên hệ</p>
                    </div>
                  </div>
                </li>
                <li className="postDetail__aside-vertial-item">
                  <img src={asideProductImg} alt="" />
                  <div className="postDetail__aside-vertial-text">
                    <h3 className="verticalProduct-title">
                      Thuốc Heets Âu cho IQOS
                    </h3>
                    <div className="verticalProduct-price">
                      <p>Giá:</p>
                      <p className="verticalProduct-price__text">Liên hệ</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </aside>
          <aside className="postDetail__aside-block">
            <h3 className="postDetail__aside-title">CHIA SẺ FACEBOOK</h3>
            <div className="postDetail__aside-inner">
              <div>fanpage share</div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default postDetail;
