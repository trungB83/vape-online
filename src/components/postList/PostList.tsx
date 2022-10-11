import "./PostList.scss";
import { Link } from "react-router-dom";

import { get } from "lodash";
import CONFIGS from "configs";
import { removeHtmlTag } from "helpers/common";
function PostList(props: any) {
  console.log("props", props);

  return (
    <div className="container">
      <div className="postCategory">
        <div className="postCategory__content">
          <div className="postCategory__list">
            {get(props, "HOT_POSTS", []).map((post: any, index: number) => (
              <Link
                to={`/post/${post.tin_tuc_id}`}
                className="postCategory__post"
              >
                <div className="postCategory__post-img">
                  <img
                    src={`${CONFIGS.UPLOAD_API_URL}/${post.anh_dai_dien}`}
                    alt=""
                  />
                </div>
                <div className="postCategory__post-text">
                  <div className="postCategory__post-title">{post.tieu_de}</div>
                  <div className="postCategory__post-subTitle">
                    {removeHtmlTag(post.mo_ta)}
                  </div>
                </div>
              </Link>
            ))}
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
                {get(props, "HOT_POSTS", []).map((post: any, index: number) => (
                  <li className="postCategory__asideMostView-item" key={index}>
                    <div className="postCategory__asideMostView-img">
                      <img
                        src={`${CONFIGS.UPLOAD_API_URL}/${post.anh_dai_dien}`}
                        alt=""
                      />
                    </div>
                    <Link to="/" className="postCategory__asideMostView-title">
                      Ở Hòa Bình mua iQOS ở đâu chính hãng?
                    </Link>
                  </li>
                ))}
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
                {get(props, "products", []).map((product: any, index: number) => (
                  <li className="postCategory__aside-vertial-item">
                    <img src={product.prod_thumbnail} alt="" />
                    <div className="postCategory__aside-vertial-text">
                      <h3 className="verticalProduct-title">
                        {product.prod_title}
                      </h3>
                      <div className="verticalProduct-price">
                        <p>Giá:</p>
                        <p className="verticalProduct-price__text">{product.prod_price}</p>
                      </div>
                    </div>
                  </li>
                ))}
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
