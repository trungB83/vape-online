import "./Home.scss";
import { Col, Row, Table } from "antd";
import {
  FileSearchOutlined,
  ProfileOutlined,
  RightOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import React from "react";
import { Link } from "react-router-dom";
import routes from "core-authent/constants/routes";
import { useEffect, useState } from "react";
import { pathApi } from "core-authent/constants/pathApi";
import { BASE_URL } from "config";

function Home() {
  const [gridDataPost, SetGridDataPost] = useState([]);
  const [gridDataUser, SetGridDataUser] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const responsePost = await fetch(`${BASE_URL}${pathApi.post.posts}`);
    const responseUser = await fetch(`${BASE_URL}${pathApi.profile.profiles}`);

    const jsonDataPost = await responsePost.json();
    const dataPost = jsonDataPost.data;
    SetGridDataPost(dataPost);

    const jsonDataUser = await responseUser.json();
    const dataUser = jsonDataUser.data;
    SetGridDataUser(dataUser);
  };
  console.log("gridDataPost", gridDataPost);

  const modifiedDataPost = gridDataPost.map(({ body, ...item }) => ({
    ...item,
    key: item.id,
    comment: body,
  }));
  console.log("modifiedDataPost: ", modifiedDataPost);

  const modifiedDataUser = gridDataUser.map(({ body, ...item }) => ({
    ...item,
    key: item.id,
    comment: body,
  }));
  console.log("gridDataUser: ", gridDataUser);

  const columnsPost = [
    {
      title: "Id",
      dataIndex: "tin_tuc_id",
      align: "center",
      editable: false,
    },
    {
      title: "Tiêu đề",
      dataIndex: "tieu_de",
      align: "left",
      editable: false,
    },
    {
      title: "Nhóm bài viết",
      dataIndex: "nhom_tin_tuc_id",
      align: "left",
      editable: true,
    },
    {
      title: "Tác giả",
      dataIndex: "nguoi_tao",
      align: "center",
      editable: true,
      defaultSortOrder: "descend",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Ngày tạo",
      dataIndex: "ngay_tao",
      align: "center",
      editable: false,
    },
    {
      title: "Trạng thái",
      dataIndex: "trang_thai",
      align: "center",
      editable: false,
    },
  ];
  const columnsUser = [
    {
      title: "Id Group",
      dataIndex: "nhom_nhan_vien_id",
      align: "center",
      editable: false,
    },
    {
      title: "Ảnh đại diện",
      dataIndex: "anh_dai_dien",
      align: "center",
      editable: false,
    },
    {
      title: "Họ và tên",
      dataIndex: "ten_nhan_vien",
      align: "left",
      editable: false,
    },
    {
      title: "Email",
      dataIndex: "email",
      align: "center",
      editable: false,
    },
    {
      title: "Địa chỉ",
      dataIndex: "dia_chi",
      align: "center",
      editable: false,
      filters: [
        {
          text: "Hà Nội",
          value: "Hanoi",
        },
        {
          text: "Lào Cai",
          value: "Laocai",
        },
      ],
      onFilter: (value, record) => record.address.indexOf(value) === 0,
    },
    {
      title: "Tuổi",
      dataIndex: "tuoi",
      align: "center",
      editable: true,
      defaultSortOrder: "descend",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Ngày tạo",
      dataIndex: "ngay_tao",
      align: "center",
      editable: false,
    },
  ];

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
                  <Col
                    span={7}
                    className="HomeDashBoard__content-panel user-panel"
                  >
                    <Link to={routes.dashboard}>
                      <div className="HomeDashBoard__content-btn--img">
                        <UsergroupAddOutlined style={{ fontSize: "3em" }} />
                      </div>
                      <div className="HomeDashBoard__content-btn--text">
                        Tài khoản <RightOutlined />
                      </div>
                    </Link>
                  </Col>
                  <Col
                    span={7}
                    className="HomeDashBoard__content-panel post-panel"
                  >
                    <Link to={routes.dashboard}>
                      <div className="HomeDashBoard__content-btn--img">
                        <FileSearchOutlined style={{ fontSize: "3em" }} />
                      </div>
                      <div className="HomeDashBoard__content-btn--text">
                        Bài viết <RightOutlined />
                      </div>
                    </Link>
                  </Col>
                  <Col
                    span={7}
                    className="HomeDashBoard__content-panel product-panel"
                  >
                    <Link to={routes.dashboard}>
                      <div className="HomeDashBoard__content-btn--img">
                        <ProfileOutlined style={{ fontSize: "3em" }} />
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
            <div className="HomeDashBoard__content-box">
              <Table
                itemLayout="horizontal"
                pagination={{
                  onChange: (page) => {
                    console.log(page);
                  },
                  pageSize: 10,
                }}
                columns={columnsUser}
                dataSource={modifiedDataUser}
              />
            </div>
          </Col>
          <Col span={11} className="HomeDashBoard_item">
            <div className="HomeDashBoard__title-box">
              <h1>TIN TỨC MỚI</h1>
            </div>
            <div className="HomeDashBoard__content-box">
              <Table
                itemLayout="horizontal"
                pagination={{
                  onChange: (page) => {
                    console.log(page);
                  },
                  pageSize: 10,
                }}
                columns={columnsPost}
                dataSource={modifiedDataPost}
              />
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Home;
