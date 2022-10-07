import "./loginContent.scss";
import { Button, Checkbox, Form, Input, notification } from "antd";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  statusNotification,
} from "../../core-authent/constants/constant";
import { pathApi } from "../../core-authent/constants/pathApi";
import routes from "../../core-authent/constants/routes";
import { renderContentNoti } from "../../core-authent/utils/utils";
import { CheckCircleFilled, CloseCircleFilled } from "@ant-design/icons";
import { httpClient } from "../../axiosClient";
import {
  setLocal,
  setObjectLocal,
} from "../../core-authent/utils/localStorage";
import { IInforUser } from "../../core-authent/models/model";

function LoginContent() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = (values: IInforUser): void => {
    if (values && values.ten_tai_khoan && values.mat_khau) {
      const body = {
        ten_tai_khoan: values.ten_tai_khoan.trim(),
        mat_khau: values.mat_khau.trim(),
      };
      handleLogin(body);
    } else {
      return;
    }
  };

  const onFinishFailed = (errorInfo: any) => {};

  const openNotification = (content: any) => {
    notification.open({
      message: content.message,
      description: content.description,
      icon: content.icon,
    });
  };

  const handleLogin = async (body: IInforUser) => {
    setIsLoading(true);
    try {
      const response = await httpClient.post(pathApi.auth.login, body);
      if (
        response &&
        response.data &&
        response.data.token &&
        response.data.data &&
        response.data.success
      ) {
        setIsLoading(false);
        setLocal(auth.TOKEN, response.data.token);
        setObjectLocal(auth.USER_INFO, response.data.data);
        navigate(routes.dashboard);
        notification.success({
          ...renderContentNoti(statusNotification.login.LOGIN_SUCCESS),
        });
      } else {
        setIsLoading(false);
        notification.error({ ...renderContentNoti() });
      }
    } catch (error: any) {
      setIsLoading(false);
      if (
        error &&
        error.response &&
        error.response.data &&
        error.response.data.error &&
        error.response.status !== 500 &&
        error.response.status !== 401
      ) {
        notification.error({
          ...renderContentNoti(
            statusNotification.login.LOGIN_FAIL,
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
