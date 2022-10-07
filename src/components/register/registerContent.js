import "./registerContent.scss";
import { Button, Checkbox, Form, Input, notification } from "antd";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { statusNotification } from "core-authent/constants/constant";
import { pathApi } from "core-authent/constants/pathApi";
import routes from "core-authent/constants/routes";
import { renderContentNoti } from "core-authent/utils/utils";
import { httpClient } from "axiosClient";

function RegisterContent() {
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const onFinish = (values) => {
    if (
      values &&
      values.ten_tai_khoan &&
      values.ten_nhan_vien &&
      values.email &&
      values.mat_khau &&
      values.xac_nhan_mat_khau
    ) {
      const body = {
        ten_tai_khoan: values.ten_tai_khoan.trim(),
        ten_nhan_vien: values.ten_nhan_vien.trim(),
        email: values.email.trim(),
        mat_khau: values.mat_khau.trim(),
        xac_nhan_mat_khau: values.xac_nhan_mat_khau.trim(),
      };
      handleRegister(body);
    } else {
      return;
    }
  };

  const onFinishFailed = (errorInfo) => {};

  const handleRegister = async (body) => {
    setIsLoading(true);
    try {
      const response = await httpClient.post(pathApi.auth.regiter, body);
      if (
        response &&
        response.data &&
        response.data.token &&
        response.data.data &&
        response.data.success
      ) {
        setIsLoading(false);
        navigate(routes.login);
        notification.success({
          ...renderContentNoti(statusNotification.register.REGISTER_SUCCESS),
        });
      } else {
        setIsLoading(false);
        notification.success({ ...renderContentNoti() });
      }
    } catch (error) {
      setIsLoading(false);
      if (
        error &&
        error.response &&
        error.response.data &&
        error.response.data.error &&
        !error.response.data.success &&
        error.response.status !== 500 &&
        error.response.status !== 401
      ) {
        notification.success({
          ...renderContentNoti(
            statusNotification.register.REGISTER_FAIL,
            error.response.data.error
          ),
        });
      }
    }
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
          <Button type="primary" htmlType="submit" onClick={handleRegister}>
            Đăng ký
          </Button>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="secondary" htmlType="submit" loading={isLoading} block>
            <Link to={routes.login}>Đăng nhập</Link>
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
export default RegisterContent;
