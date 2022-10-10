import "./loginContent.scss";
import { Button, Checkbox, Form, Input, notification } from "antd";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import routes from "constants/routes";


function LoginContent() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = (): void => {
    
  };

  const onFinishFailed = (errorInfo: any) => {};

  const openNotification = (content: any) => {
    notification.open({
      message: content.message,
      description: content.description,
      icon: content.icon,
    });
  };

  const handleLogin = async () => {
    
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
        autoComplete="off"
        className="formLogin"
      >
        <h1 className="formLogin__title">Đăng nhập</h1>
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
            Đăng nhập
          </Button>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button htmlType="submit">
            <Link to={routes.register}>Đăng ký</Link>
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
export default LoginContent;
