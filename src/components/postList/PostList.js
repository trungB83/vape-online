import "./PostList.scss";
import { Link } from "react-router-dom";
import asideProductImg from "../../assets/images/nga-360x360-100x100.jpg";
import asidePostImg from "../../assets/images/circle-post.jpg";
import postImg from "../../assets/images/cuahang-300x280.jpg";

function PostList() {
  return (
    <div className="container">
      <div className="postCategory">
        <div className="postCategory__content">
          <div className="postCategory__list">
            <Link to="post/:postId" className="postCategory__post">
              <div className="postCategory__post-img">
                <img src={postImg} alt="" />
              </div>
              <div className="postCategory__post-text">
                <div className="postCategory__post-title">
                  Vị thuốc IQOS nào phù hợp với bạn
                </div>
                <div className="postCategory__post-subTitle">
                  Để chiều lòng người sử dụng IQOS, nhà sản xuất đã cho ra mắt
                  các...
                </div>
              </div>
            </Link>
            <Link to="post/:postId" className="postCategory__post">
              <div className="postCategory__post-img">
                <img src={postImg} alt="" />
              </div>
              <div className="postCategory__post-text">
                <div className="postCategory__post-title">
                  Vị thuốc IQOS nào phù hợp với bạn
                </div>
                <div className="postCategory__post-subTitle">
                  Để chiều lòng người sử dụng IQOS, nhà sản xuất đã cho ra mắt
                  các...
                </div>
              </div>
            </Link>
            <Link to="post/:postId" className="postCategory__post">
              <div className="postCategory__post-img">
                <img src={postImg} alt="" />
              </div>
              <div className="postCategory__post-text">
                <div className="postCategory__post-title">
                  Vị thuốc IQOS nào phù hợp với bạn
                </div>
                <div className="postCategory__post-subTitle">
                  Để chiều lòng người sử dụng IQOS, nhà sản xuất đã cho ra mắt
                  các...
                </div>
              </div>
            </Link>
            <Link to="post/:postId" className="postCategory__post">
              <div className="postCategory__post-img">
                <img src={postImg} alt="" />
              </div>
              <div className="postCategory__post-text">
                <div className="postCategory__post-title">
                  Vị thuốc IQOS nào phù hợp với bạn
                </div>
                <div className="postCategory__post-subTitle">
                  Để chiều lòng người sử dụng IQOS, nhà sản xuất đã cho ra mắt
                  các...
                </div>
              </div>
            </Link>
            <Link to="post/:postId" className="postCategory__post">
              <div className="postCategory__post-img">
                <img src={postImg} alt="" />
              </div>
              <div className="postCategory__post-text">
                <div className="postCategory__post-title">
                  Vị thuốc IQOS nào phù hợp với bạn
                </div>
                <div className="postCategory__post-subTitle">
                  Để chiều lòng người sử dụng IQOS, nhà sản xuất đã cho ra mắt
                  các...
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="postCategory__aside">
          <aside className="postCategory__aside-block">
            <form className="postCategory__asideSearch">
              <input
                type="search"
                className="postCategory__asideSearch-input"
                placeholder="Tìm kiếm..."
              />
              <input
                type="submit"
                className="postCategory__asideSearch-submit"
                value="Search"
              />
            </form>
          </aside>
          <aside className="postCategory__aside-block">
            <h3 className="postCategory__aside-title">BÀI VIẾT XEM NHIỀU</h3>
            <div className="postCategory__aside-inner">
              <ul className="postCategory__asideMostView">
                <li className="postCategory__asideMostView-item">
                  <div className="postCategory__asideMostView-img">
                    <img src={asidePostImg} alt="" />
                  </div>
                  <Link to="/" className="postCategory__asideMostView-title">
                    Ở Hòa Bình mua iQOS ở đâu chính hãng?
                  </Link>
                </li>
                <li className="postCategory__asideMostView-item">
                  <div className="postCategory__asideMostView-img">
                    <img src={asidePostImg} alt="" />
                  </div>
                  <Link to="/" className="postCategory__asideMostView-title">
                    Ở Hòa Bình mua iQOS ở đâu chính hãng?
                  </Link>
                </li>
                <li className="postCategory__asideMostView-item">
                  <div className="postCategory__asideMostView-img">
                    <img src={asidePostImg} alt="" />
                  </div>
                  <Link to="/" className="postCategory__asideMostView-title">
                    Ở Hòa Bình mua iQOS ở đâu chính hãng?
                  </Link>
                </li>
                <li className="postCategory__asideMostView-item">
                  <div className="postCategory__asideMostView-img">
                    <img src={asidePostImg} alt="" />
                  </div>
                  <Link to="/" className="postCategory__asideMostView-title">
                    Ở Hòa Bình mua iQOS ở đâu chính hãng?
                  </Link>
                </li>
                <li className="postCategory__asideMostView-item">
                  <div className="postCategory__asideMostView-img">
                    <img src={asidePostImg} alt="" />
                  </div>
                  <Link to="/" className="postCategory__asideMostView-title">
                    Ở Hòa Bình mua iQOS ở đâu chính hãng?
                  </Link>
                </li>
              </ul>
            </div>
          </aside>
          <aside className="postCategory__aside-block">
            <h3 className="postCategory__aside-title">DANH MỤC SẢN PHẨM</h3>
            <div className="postCategory__aside-inner">
              <ul className="postCategory__asideCategory">
                <li className="postCategory__asideCategory-item">
                  <Link to="/">Phụ kiện</Link>
                </li>
                <li className="postCategory__asideCategory-item">
                  <Link to="/">Sản phẩm</Link>
                </li>
                <li className="postCategory__asideCategory-item">
                  <Link to="/">Thuốc lá IQOS</Link>
                </li>
              </ul>
            </div>
          </aside>
          <aside className="postCategory__aside-block">
            <h3 className="postCategory__aside-title">SẢN PHẨM NỔI BẬT</h3>
            <div className="postCategory__aside-inner">
              <ul className="postCategory__aside-vertial-list">
                <li className="postCategory__aside-vertial-item">
                  <img src={asideProductImg} alt="" />
                  <div className="postCategory__aside-vertial-text">
                    <h3 className="verticalProduct-title">
                      Thuốc Heets Âu cho IQOS
                    </h3>
                    <div className="verticalProduct-price">
                      <p>Giá:</p>
                      <p className="verticalProduct-price__text">Liên hệ</p>
                    </div>
                  </div>
                </li>
                <li className="postCategory__aside-vertial-item">
                  <img src={asideProductImg} alt="" />
                  <div className="postCategory__aside-vertial-text">
                    <h3 className="verticalProduct-title">
                      Thuốc Heets Âu cho IQOS
                    </h3>
                    <div className="verticalProduct-price">
                      <p>Giá:</p>
                      <p className="verticalProduct-price__text">Liên hệ</p>
                    </div>
                  </div>
                </li>
                <li className="postCategory__aside-vertial-item">
                  <img src={asideProductImg} alt="" />
                  <div className="postCategory__aside-vertial-text">
                    <h3 className="verticalProduct-title">
                      Thuốc Heets Âu cho IQOS
                    </h3>
                    <div className="verticalProduct-price">
                      <p>Giá:</p>
                      <p className="verticalProduct-price__text">Liên hệ</p>
                    </div>
                  </div>
                </li>
                <li className="postCategory__aside-vertial-item">
                  <img src={asideProductImg} alt="" />
                  <div className="postCategory__aside-vertial-text">
                    <h3 className="verticalProduct-title">
                      Thuốc Heets Âu cho IQOS
                    </h3>
                    <div className="verticalProduct-price">
                      <p>Giá:</p>
                      <p className="verticalProduct-price__text">Liên hệ</p>
                    </div>
                  </div>
                </li>
                <li className="postCategory__aside-vertial-item">
                  <img src={asideProductImg} alt="" />
                  <div className="postCategory__aside-vertial-text">
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
          <aside className="postCategory__aside-block">
            <h3 className="postCategory__aside-title">CHIA SẺ FACEBOOK</h3>
            <div className="postCategory__aside-inner">
              <div>fanpage share</div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default PostList;
