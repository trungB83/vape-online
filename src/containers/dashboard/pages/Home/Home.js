import "./Home.scss";
import { Col, Row } from "antd";
import { FileSearchOutlined, ProfileOutlined, RightOutlined, UsergroupAddOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import routes from "coreAuthent/constants/routes";

function Home() {
  return (
    <>
      <div className="pageHome">
        <Row className="father-panel HomeDashBoard">
          <Col span={24} className="HomeDashBoard_item">
            <div className="HomeDashBoard__title-box">
              <h1>THỐNG KÊ CHUNG</h1>
            </div>
            <div className="HomeDashBoard__content-box">
              <h1>CHÀO MỪNG BẠN ĐẾN VỚI HỆ THỐNG QUẢN LÝ THI ONLINE</h1>
              <div className="HomeDashBoard__content-text">
                <Row>
                  <Col span={7} className="HomeDashBoard__content-panel user-panel">
                    <Link to={routes.dashboard}>
                      <div className="HomeDashBoard__content-btn--img">
                        <UsergroupAddOutlined style={{ fontSize: '3em'}} />
                      </div>
                      <div className="HomeDashBoard__content-btn--text">
                         Tài khoản <RightOutlined />
                      </div>
                    </Link>
                  </Col>
                  <Col span={7} className="HomeDashBoard__content-panel post-panel">
                    <Link to={routes.dashboard} >
                      <div className="HomeDashBoard__content-btn--img">
                        <FileSearchOutlined style={{ fontSize: '3em'}}/>
                      </div>
                      <div className="HomeDashBoard__content-btn--text">
                        Bài viết <RightOutlined />
                      </div>
                    </Link>
                  </Col>
                  <Col span={7} className="HomeDashBoard__content-panel product-panel">
                  <Link to={routes.dashboard}>
                      <div className="HomeDashBoard__content-btn--img">
                      <ProfileOutlined style={{ fontSize: '3em'}}/>
                      </div>
                      <div className="HomeDashBoard__content-btn--text">
                        Sản phẩm <RightOutlined />
                      </div>
                    </Link>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="child-panel HomeDashBoard">
          <Col span={11} className="HomeDashBoard_item">
            <div className="HomeDashBoard__title-box">
              <h1>TÀI KHOẢN MỚI</h1>
            </div>
            <div className="HomeDashBoard__content-box">contnent</div>
          </Col>
          <Col span={11} className="HomeDashBoard_item">
            <div className="HomeDashBoard__title-box">
              <h1>TIN TỨC MỚI</h1>
            </div>
            <div className="HomeDashBoard__content-box">
              <h1>THỐNG KÊ CHUNG</h1>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Home;
