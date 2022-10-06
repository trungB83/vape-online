import "./profileList.scss";
import {
  Button,
  Checkbox,
  Col,
  DatePicker,
  Dropdown,
  List,
  Menu,
  message,
  notification,
  Row,
  Select,
  Space,
  TreeSelect,
} from "antd";
import { Link } from "react-router-dom";
import routes from "coreAuthent/constants/routes";
import React, { useEffect, useState } from "react";
import { CloseCircleFilled, DownOutlined, PlusOutlined } from "@ant-design/icons";
import Search from "antd/lib/input/Search";
import { TreeNode } from "antd/lib/tree-select";
import { httpClient } from "axiosClient";
import { pathApi } from "coreAuthent/constants/pathApi";
import { renderContentNoti } from "coreAuthent/utils/utils";
import { statusNotification } from "coreAuthent/constants/constant";
import { BASE_URL } from "config";

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

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
  getCheckboxProps: (record) => ({
    disabled: record.name === "Disabled User",
    // Column configuration not to be checked
    name: record.name,
  }),
};

const { Option } = Select;

function ProfileList() {
  const [value, setValue] = useState();
  const [userData, setUserData] = useState({});

  useEffect(() => {
    getGitHubUserWithFetch();
  }, []);

  const getGitHubUserWithFetch = async () => {
    const response = await fetch(`${BASE_URL}${pathApi.profile.profiles}`);
    const jsonData = await response.json();
    setUserData(jsonData);
  };
  console.log("userData", userData);

  const handleCategories = (newValue) => {
    console.log(newValue);
    setValue(newValue);
  };

  const handleStatus = (value) => {
    console.log(`selected ${value}`);
  };

  // const openNotification = (content) => {
  //   notification.open({
  //     message: content.message,
  //     description: content.description,
  //     icon: content.icon,
  //   });
  // };

  // useEffect(() => {
  //   const handleGetProfiles = async (body) => {
  //     try {
  //       let contentNoti;
  //       const response = await httpClient.get(pathApi.profile.profiles);
  //       console.log("profile POST response:", response);
  //       if (
  //         response &&
  //         response.data &&
  //         response.data.token &&
  //         response.data.data &&
  //         response.data.success
  //       ) {
  //         contentNoti.success({...renderContentNoti(statusNotification.login.LOGIN_SUCCESS)});
  //         setUserData(response.data);
          
  //       } else {
  //         contentNoti.error({...renderContentNoti()});
  //       }
  //     } catch (error) {
  //       let contentNoti;
  //       if (
  //         error &&
  //         error.response &&
  //         error.response.data &&
  //         error.response.data.error &&
  //         error.response.status !== 500 &&
  //         error.response.status !== 401
  //       ) {
  //         contentNoti = {
  //           ...renderContentNoti(statusNotification.login.LOGIN_FAIL),
  //           icon: <CloseCircleFilled style={{ color: "#ff4d4f" }} />,
  //         };
  //       }
  //       else {
  //         contentNoti = {
  //           ...renderContentNoti(),
  //           icon: <CloseCircleFilled style={{ color: "#ff4d4f" }} />,
  //         };
  //         openNotification(contentNoti);
  //       }
  //     }
  //   };
  //   console.log("userData",userData);
  //   handleGetProfiles();
  // }, []);
  
    

  const data =  [
    {
      key:1,
      avatar: "https://joeschmoe.io/api/v1/random",
      ho_va_ten: "John",
      tuoi: 32,
      dia_chi: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
      trang_thai: "active",
      ngay_tao: "2022",
    },
    {
      key: "2",
      avatar: "https://joeschmoe.io/api/v1/random",
      ho_va_ten: "Mike",
      tuoi: 32,
      dia_chi: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
      trang_thai: "active",
      ngay_tao: "2022",
    },
    {
      key: "3",
      avatar: "https://joeschmoe.io/api/v1/random",
      ho_va_ten: "Nick",
      tuoi: 32,
      dia_chi: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
      trang_thai: "active",
      ngay_tao: "2022",
    },
    {
      key: "4",
      avatar: "https://joeschmoe.io/api/v1/random",
      ho_va_ten: "John",
      tuoi: 32,
      dia_chi: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
      trang_thai: "active",
      ngay_tao: "2022",
    },
  ];

  return (
    <>
      <div className="pagePostList">
        <Row gutter={16} className="first-row">
          <Col className="gutter-row" span={8}>
            <h2>Người dùng</h2>
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
              <Link to={`${routes.dashboard}${routes.adduser}`}>
                Thêm mới người dùng
              </Link>
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
                  Ảnh người dùng
                </Col>
                <Col className="header-list_item text-left" span={6}>
                  Tên người dùng
                </Col>
                <Col className="header-list_item text-left" span={3}>
                  Tuổi
                </Col>
                <Col className="header-list_item text-left" span={3}>
                  Địa chỉ
                </Col>
                <Col className="header-list_item text-left" span={2}>
                  Tags
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
                  Ảnh người dùng
                </Col>
                <Col className="header-list_item text-left" span={6}>
                  Tên người dùng
                </Col>
                <Col className="header-list_item text-left" span={3}>
                  Tuổi
                </Col>
                <Col className="header-list_item text-left" span={3}>
                  Địa chỉ
                </Col>
                <Col className="header-list_item text-left" span={2}>
                  Tags
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
                <Col className="listUsers__avatar" span={3}>
                  <img src={item.avatar} alt=""/>
                </Col>
                <Col className="text-left" span={6}>
                  {item.ho_va_ten}
                </Col>
                <Col className="text-left" span={3}>
                  {item.tuoi}
                </Col>
                <Col className="text-left" span={3}>
                  {item.dia_chi}
                </Col>
                <Col className="text-left" span={2}>
                  {item.tags}
                </Col>
                <Col className="text-left" span={3}>
                  {item.trang_thai}
                </Col>
                <Col className="text-left" span={3}>
                  {item.ngay_tao}
                </Col>
              </List.Item>
            )}
          />
        </div>
      </div>
    </>
  );
}

export default ProfileList;
