import "./loginContent.scss";
import { Button, Checkbox, Form, Input, notification } from "antd";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, statusNotification } from "coreAuthent/constants/constant";
import { pathApi } from "coreAuthent/constants/pathApi";
import routes from "coreAuthent/constants/routes";
import { renderContentNoti } from "coreAuthent/utils/utils";
import { CheckCircleFilled, CloseCircleFilled } from "@ant-design/icons";
import { httpClient } from 'axiosClient';
import { setLocal, setObjectLocal } from "coreAuthent/utils/localStorage";

function LoginContent() {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const navigate = useNavigate();

  // async function loginHandle() {
  //   let item = { username, password };
  //   let result = await fetch(
  //     "https://exam-dev-api.web5days.com:5001/api/user/login",
  //     {
  //       method:'POST',
  //       headers: {
  //         "Content-Type": "application/json",
  //         Accept: "application/json",
  //       },
  //       body: JSON.stringify(item),
  //     }
  //   );
  //   result= await result.json();
  //   localStorage.setItem("user-info",JSON.stringify(result))
  //   // navigate('/admin/dashboard')
  // }

  const [isLoading, setIsLoading] = useState(false)
const navigate = useNavigate()

const onFinish = values => {
  if (values && values.ten_tai_khoan && values.mat_khau) {
    const body = {
      ten_tai_khoan: values.ten_tai_khoan.trim(),
      mat_khau: values.mat_khau.trim()
    }
    handleLogin(body)
  } else {
    return
  }
}

const onFinishFailed = errorInfo => {}

const openNotification = content => {
  notification.open({
    message: content.message,
    description: content.description,
    icon: content.icon
  })
}

const handleLogin = async body => {
  setIsLoading(true)
  try {
    let contentNoti
    const response = await httpClient.post(pathApi.auth.login, body)
    if (
      response &&
      response.data &&
      response.data.token &&
      response.data.data &&
      response.data.success
    ) {
      setIsLoading(false)
      contentNoti = {
        ...renderContentNoti(statusNotification.login.LOGIN_SUCCESS),
        icon: <CheckCircleFilled style={{ color: "#52c41a" }} />
      }
      setLocal(auth.TOKEN, response.data.token)
      setObjectLocal(auth.USER_INFO, response.data.data)
      navigate(routes.dashboard)
      openNotification(contentNoti)
    } else {
      setIsLoading(false)
      contentNoti = {
        ...renderContentNoti(),
        icon: <CloseCircleFilled style={{ color: "#ff4d4f" }} />
      }
      openNotification(contentNoti)
    }
  } catch (error) {
    setIsLoading(false)
    let contentNoti
    if (
      error &&
      error.response &&
      error.response.data &&
      error.response.data.error
    ) {
      contentNoti = {
        ...renderContentNoti(statusNotification.login.LOGIN_FAIL),
        icon: <CloseCircleFilled style={{ color: "#ff4d4f" }} />
      }
      openNotification(contentNoti)
    } else {
      contentNoti = {
        ...renderContentNoti(),
        icon: <CloseCircleFilled style={{ color: "#ff4d4f" }} />
      }
      openNotification(contentNoti)
    }
  }
}


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
          <Input
            placeholder="Tên đăng nhập "
          />
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
          <Input.Password
            placeholder="Mật khẩu"
          />
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
          <Button type="primary" htmlType="submit" onClick={handleLogin} loading={isLoading} block>
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
export default LoginContent;
