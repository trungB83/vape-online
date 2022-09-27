import "./loginContent.scss";
import { Button, Checkbox, Form, Input } from "antd";
import React from "react";
import { Link } from "react-router-dom";

function loginContent() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
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
          name="username"
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
          name="password"
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
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
          className="group-cb-forgot"
        >
          <Checkbox>Tự động đăng nhập</Checkbox>
          <Link to="/user/forgot" className="group-cb-forgot__link">Quên mật khẩu</Link>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Đăng nhập
          </Button>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="secondary" htmlType="submit">
            <Link to="/user/register">Đăng ký</Link>
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
export default loginContent;
