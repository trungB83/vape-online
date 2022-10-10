import "./registerContent.scss";
import { Button, Checkbox, Form, Input, notification } from "antd";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import routes from "constants/routes";


function RegisterContent() {
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const onFinish = (values: any) => {
   
  };

  const onFinishFailed = (errorInfo: any) => {};

  const handleRegister = async () => {
   
  };

  return (
    <div className="main">
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="on"
        className="formLogin"
      >
        <h1 className="formLogin__title">Đăng ký</h1>
        <Form.Item
          name="ten_tai_khoan"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập tên đăng nhập!",
            },
          ]}
        >
          <Input placeholder="Tên đăng nhập " />
        </Form.Item>

        <Form.Item
          name="ten_nhan_vien"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập tên nhân viên!",
            },
          ]}
        >
          <Input placeholder="Tên nhân viên " />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[
            {
              type: "email",
              message: "Vui lòng nhập đúng định dạng email!",
            },
            {
              required: true,
              message: "Vui lòng nhập Email!",
            },
          ]}
        >
          <Input placeholder="Email " />
        </Form.Item>
        <Form.Item
          name="mat_khau"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập mật khẩu!",
            },
          ]}
        >
          <Input.Password placeholder="Mật khẩu" />
        </Form.Item>
        <Form.Item
          name="xac_nhan_mat_khau"
          dependencies={["password"]}
          rules={[
            {
              required: true,
              message: "Vui lòng nhập mật khẩu!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("mat_khau") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("Không trùng khớp mật khẩu!"));
              },
            }),
          ]}
        >
          <Input.Password placeholder="Xác nhận mật khẩu" />
        </Form.Item>
        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
          className="group-cb-forgot"
        >
          <Checkbox>Tự động đăng nhập</Checkbox>
          <Link to="/user/forgot" className="group-cb-forgot__link">
            Quên mật khẩu
          </Link>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            loading={isLoading}
            block
          >
            Đăng ký
          </Button>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button htmlType="submit" loading={isLoading} block>
            <Link to={routes.login}>Đăng nhập</Link>
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
export default RegisterContent;
