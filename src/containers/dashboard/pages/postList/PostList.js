import {
  Button,
  Checkbox,
  Col,
  DatePicker,
  Dropdown,
  List,
  Menu,
  message,
  Row,
  Select,
  Space,
  TreeSelect,
} from "antd";
import "./PostList.scss";
import { Link } from "react-router-dom";
import routes from "coreAuthent/constants/routes";
import React, { useEffect, useState } from "react";
import { DownOutlined, PlusOutlined } from "@ant-design/icons";
import Search from "antd/lib/input/Search";
import { TreeNode } from "antd/lib/tree-select";
import { httpClient } from "axiosClient";
import { pathApi } from "coreAuthent/constants/pathApi";





const data = [
  {
    title: "Ant Design Title 1",
  },
  {
    title: "Ant Design Title 2",
  },
  {
    title: "Ant Design Title 3",
  },
  {
    title: "Ant Design Title 4",
  },
];

const onCheckAllChange = (e) => {
  console.log(`checked = ${e.target.checked}`);
};

const onSearch = (value) => console.log(value);

const { RangePicker } = DatePicker;

const handleMenuClick = (e) => {
  message.info("Click on menu item.");
  console.log("click", e);
};

const menucheckbox = (
  <Menu
    onClick={handleMenuClick}
    items={[
      {
        label: "1st menu item",
        key: "1",
      },
      {
        label: "2nd menu item",
        key: "2",
      },
      {
        label: "3rd menu item",
        key: "3",
      },
    ]}
  />
);

const { Option } = Select;

function PostList() {

  const [value, setValue] = useState();

  const handleCategories = (newValue) => {
    console.log(newValue);
    setValue(newValue);
  };

  const handleStatus = (value) => {
    console.log(`selected ${value}`);
  };

  useEffect(() => {
    
    const handleGetProfiles = async () => {
      try {
        const response = await httpClient.get(pathApi.post.posts)
        console.log("post POST response:", response)
        if (
          response &&
          response.data &&
          response.data.token &&
          response.data.data &&
          response.data.success
        ) {
          // notification.success({...renderContentNoti(statusNotification.login.LOGIN_SUCCESS)});
        } else {
          // notification.error({...renderContentNoti()});
        }
      } catch (error) {
        if (
          error &&
          error.response &&
          error.response.data &&
          error.response.data.error &&
          error.response.status !== 500 &&
          error.response.status !== 401
        ) {
          // notification.error({...renderContentNoti(statusNotification.login.LOGIN_FAIL, error.response.data.error)});
        }
      }
    }
    handleGetProfiles()
  }, [])

  return (
    <>
      <div className="pagePostList">
        <Row gutter={16} className="first-row">
          <Col className="gutter-row" span={8}>
            <h2>Bài viết</h2>
          </Col>
          <Col className="gutter-row" span={16}>
            <Row gutter={16}>
              <Col span={6}>
                <TreeSelect
                  showSearch
                  style={{
                    width: "100%",
                  }}
                  value={value}
                  dropdownStyle={{
                    maxHeight: 400,
                    overflow: "auto",
                  }}
                  placeholder="Danh mục dữ liệu"
                  allowClear
                  multiple
                  treeDefaultExpandAll
                  onChange={handleCategories}
                >
                  <TreeNode value="1" title="Tin tức" />
                  <TreeNode value="2" title="Hỏi đáp" />
                </TreeSelect>
              </Col>
              <Col span={6}>
                <Select
                  defaultValue="working"
                  style={{ width: 120 }}
                  onChange={handleStatus}
                >
                  <Option value="tosting">Tất cả trạng thái</Option>
                  <Option value="working">Đang hoạt động</Option>
                  <Option value="blocked">Bị khóa</Option>
                </Select>
              </Col>
              <Col span={6}>
                <RangePicker />
              </Col>
              <Col span={6}>
                <Search
                  placeholder="Tìm kiếm...."
                  onSearch={onSearch}
                  style={{
                    width: 200,
                  }}
                />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row gutter={16} className="select-action-group second-row">
          <Col className="gutter-row" span={12}>
            <Dropdown overlay={menucheckbox}>
              <Button>
                <Space>
                  Chọn hành động
                  <DownOutlined />
                </Space>
              </Button>
            </Dropdown>
          </Col>
          <Col className="right-actions" span={12}>
            <Button className="button-add-post ant-btn-round">
            <PlusOutlined />
              <Link to={routes.posts}>Thêm mới bài viết</Link>
            </Button>
          </Col>
        </Row>
        <div>
          <List
            header={
              <Row className="header-list">
                <Col className="header-list_item" span={1}>
                  <Checkbox onChange={onCheckAllChange}></Checkbox>
                </Col>
                <Col className="header-list_item" span={3}>
                  Ảnh bài viết
                </Col>
                <Col className="header-list_item text-left" span={6}>
                  Tiêu đề
                </Col>
                <Col className="header-list_item text-left" span={3}>
                  Nhóm bài viết
                </Col>
                <Col className="header-list_item text-left" span={3}>
                  Tin nổi bật
                </Col>
                <Col className="header-list_item text-left" span={2}>
                  Tin mới
                </Col>
                <Col className="header-list_item text-left" span={3}>
                  Trạng thái
                </Col>
                <Col className="header-list_item text-left" span={3}>
                  Ngày tạo
                </Col>
              </Row>
            }
            footer={
              <Row className="header-list">
                <Col className="header-list_item" span={1}>
                  <Checkbox onChange={onCheckAllChange}></Checkbox>
                </Col>
                <Col className="header-list_item" span={3}>
                  Ảnh bài viết
                </Col>
                <Col className="header-list_item text-left" span={6}>
                  Tiêu đề
                </Col>
                <Col className="header-list_item text-left" span={3}>
                  Nhóm bài viết
                </Col>
                <Col className="header-list_item text-left" span={3}>
                  Tin nổi bật
                </Col>
                <Col className="header-list_item text-left" span={2}>
                  Tin mới
                </Col>
                <Col className="header-list_item text-left" span={3}>
                  Trạng thái
                </Col>
                <Col className="header-list_item text-left" span={3}>
                  Ngày tạo
                </Col>
              </Row>
            }
            itemLayout="horizontal"
            pagination={{
              onChange: (page) => {
                console.log(page);
              },
              pageSize: 3,
            }}
            dataSource={data}
            renderItem={(item) => (
              <List.Item id="listUsers">
                <Col className="" span={1}>
                  <Checkbox onChange={onCheckAllChange}></Checkbox>
                </Col>
                <Col className="" span={3}>
                  Ảnh bài viết
                </Col>
                <Col className="text-left" span={6}>
                  Tiêu đề
                </Col>
                <Col className="text-left" span={3}>
                  Nhóm bài viết
                </Col>
                <Col className="text-left" span={3}>
                  Tin nổi bật
                </Col>
                <Col className="text-left" span={2}>
                  Tin mới
                </Col>
                <Col className="text-left" span={3}>
                  Trạng thái
                </Col>
                <Col className="text-left" span={3}>
                  Ngày tạo
                </Col>
              </List.Item>
            )}
          />
        </div>
      </div>
    </>
  );
}

export default PostList;
