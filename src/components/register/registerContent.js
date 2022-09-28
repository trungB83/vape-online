import "./registerContent.scss";
import { Button, Checkbox, Form, Input, notification } from "antd";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { statusNotification } from "coreAuthent/constants/constant";
import { pathApi } from "coreAuthent/constants/pathApi";
import routes from "coreAuthent/constants/routes";
import { renderContentNoti } from "coreAuthent/utils/utils";
import { CheckCircleFilled, CloseCircleFilled } from "@ant-design/icons";
import { httpClient } from "axiosClient";

function RegisterContent() {
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log(values);
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

  const openNotification = (content) => {
    notification.open({
      message: content.message,
      description: content.description,
      icon: content.icon,
    });
  };

  const handleRegister = async (body) => {
    setIsLoading(true);
    try {
      let contentNoti;
      const response = await httpClient.post(pathApi.auth.regiter, body);
      if (
        response &&
        response.data &&
        response.data.token &&
        response.data.data &&
        response.data.success
      ) {
        setIsLoading(false);
        contentNoti = {
          ...renderContentNoti(statusNotification.register.REGISTER_SUCCESS),
          icon: <CheckCircleFilled style={{ color: "#52c41a" }} />,
        };
        navigate(routes.login);
        openNotification(contentNoti);
      } else {
        setIsLoading(false);
        contentNoti = {
          ...renderContentNoti(),
          icon: <CloseCircleFilled style={{ color: "#ff4d4f" }} />,
        };
        openNotification(contentNoti);
      }
    } catch (error) {
      setIsLoading(false);
      let contentNoti;
      if (
        error &&
        error.response &&
        error.response.data &&
        error.response.data.error &&
        !error.response.data.success
      ) {
        contentNoti = {
          ...renderContentNoti(
            statusNotification.register.REGISTER_FAIL,
            error.response.data.error
          ),
          icon: <CloseCircleFilled style={{ color: "#ff4d4f" }} />,
        };
        openNotification(contentNoti);
      } else {
        contentNoti = {
          ...renderContentNoti(),
          icon: <CloseCircleFilled style={{ color: "#ff4d4f" }} />,
        };
        openNotification(contentNoti);
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
          name="re-password"
          dependencies={["password"]}
          rules={[
            {
              required: true,
              message: "Vui lòng nhập mật khẩu!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
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
