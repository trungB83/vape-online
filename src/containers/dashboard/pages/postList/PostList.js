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
import React, { useState } from "react";
import { DownOutlined, PlusOutlined } from "@ant-design/icons";
import Search from "antd/lib/input/Search";
import { TreeNode } from "antd/lib/tree-select";

// const data = Array.from({
//   length: 23,
// }).map((_, i) => ({
//   href: "https://ant.design",
//   title: `ant design part ${i}`,
//   avatar: "https://joeschmoe.io/api/v1/random",
//   description:
//     "Ant Design, a design language for background applications, is refined by Ant UED Team.",
//   content:
//     "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
// }));

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

const onChange = (e) => {
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
                  <Checkbox onChange={onChange}></Checkbox>
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
                  <Checkbox onChange={onChange}></Checkbox>
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
                  <Checkbox onChange={onChange}></Checkbox>
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
