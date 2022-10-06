import {
  Button,
  Col,
  DatePicker,
  Dropdown,
  Menu,
  message,
  Popconfirm,
  Row,
  Select,
  Space,
  Table,
  TreeSelect,
} from "antd";
import "./PostList.scss";
import { Link } from "react-router-dom";
import routes from "coreAuthent/constants/routes";
import React, { useEffect, useState } from "react";
import { DownOutlined, PlusOutlined } from "@ant-design/icons";
import Search from "antd/lib/input/Search";
import { TreeNode } from "antd/lib/tree-select";
import { pathApi } from "coreAuthent/constants/pathApi";
import { BASE_URL } from "config";

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

function PostList() {
  const [gridData, SetGridData] = useState([]);
  const [value, setValue] = useState();
  const [selectionType, setSelectionType] = useState("checkbox");
  const [editingKey, setEditingKey] = useState("");
  const [editRow, setEditRow] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const response = await fetch(`${BASE_URL}${pathApi.post.posts}`);
    const jsonData = await response.json();
    const data = jsonData.data;
    SetGridData(data);
  };
  console.log("gridData", gridData);
  
  const modifiedData = gridData.map(({ body, ...item }) => ({
    ...item,
    key: item.id,
    comment: body,
  }));
  console.log("modifiedData", modifiedData);

  // const handleDelete = (value) => {
  //   const dataSuorce = [...modifiedData];
  //   const filteredData = dataSuorce.filter(item => item.id !== value.id)
  //   SetGridData(filteredData)
  // }


  const handleCategories = (newValue) => {
    console.log(newValue);
    setValue(newValue);
  };

  const handleStatus = (value) => {
    console.log(`selected ${value}`);
  };

  const columns = [
    {
      title: "Id",
      dataIndex: "tin_tuc_id",
      align: "center",
      editable: false,
    },
    // {
    //   title: "Ảnh đại diện",
    //   dataIndex: <img src="anh_dai_dien" width={100} alt="" />,
    //   align: "center",
    //   editable: false,
    // },
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
    {
      title: "Hành động",
      dataIndex: "action",
      align: "center",
      render: (_, record) =>
        modifiedData.length > 1 ? (
          <Space>
            <Popconfirm
              title="Xác nhận xóa ?"
              onConfirm={() => record}
              // handleDelete
            >
              <Button type="primary" danger>
                Xóa
              </Button>
            </Popconfirm>
            {editRow ? (
              <span>
                <Button
                  onClick={(e) => console.log(e)}
                  type="primary"
                  style={{ marginBottom: 8 }}
                >
                  Lưu
                </Button>
                <Popconfirm
                  title="Hủy chỉnh sửa?"
                  onConfirm={() => setEditRow(false)}
                >
                  <Button type="primary" danger>
                    Hủy
                  </Button>
                </Popconfirm>
              </span>
            ) : (
              <Button 
                onClick={() => setEditRow(true)} 
                type="primary"
              >
                Sửa
              </Button>
            )}
          </Space>
        ) : null,
    },
  ];
  const isEditing = (record) => {
    return record.key === editingKey
  }

  const mergeColumns = columns.map((col) => {
    if(!col.editable) {
      return col;
    }
    else {
      return {
        ...col,
        onCell: (record) => ({
          record,
          dataIndex: col.dataIndex,
          title: col.title,
          editing: isEditing(record),
        })
      } 
    }
  })

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
              <Link to={`${routes.dashboard}${routes.addpost}`}>Thêm mới bài viết</Link>
            </Button>
          </Col>
        </Row>
        <div>
          <Table
            rowSelection={{
              type: selectionType,
              ...rowSelection,
            }}
            itemLayout="horizontal"
            pagination={{
              onChange: (page) => {
                console.log(page);
              },
              pageSize: 10,
            }}
            columns={columns}
            dataSource={modifiedData}
            rowKey='tin_tuc_id'
          />
        </div>
      </div>
    </>
  );
}

export default PostList;
