import axios from 'axios';
import { notification } from 'antd';

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      if (error.response.status == 401) {
        notification.error({
          message: 'Lỗi đăng nhập tài khoản',
          description: 'Bạn vui lòng đăng nhập lại.',
        });
        setTimeout(() => {
          localStorage.clear();
        }, 5000);
      }
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    }
    return Promise.reject(error);
  }
);

const getHeader = () => {
  const token = localStorage.getItem('userToken');
  return {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  };
};

const getHeaderUpload = () => {
  const token = localStorage.getItem('userToken');
  return {
    Authorization: `Bearer ${token}`,
  };
};

export function getApi(url: string) {
  return axios({
    method: 'get',
    url,
  });
}

export function deleteApi(url: string, data: any) {
  return axios({
    method: 'delete',
    url,
    data: { id: data.id },
    headers: getHeader(),
  });
}

export function postApi(url: string, data: any) {
  return axios({
    method: 'post',
    url,
    data,
    headers: getHeader(),
  });
}

export function putApi(url: string, data: any) {
  return axios({
    method: 'put',
    url,
    data,
    headers: getHeader(),
  });
}

export function uploadApi(url: string, data: any) {
  let formData = new FormData();
  formData.append('fileUpload', data.fileUpload);
  formData.append('folder', data.folder);
  return axios({
    method: 'post',
    url,
    data: formData,
    headers: getHeaderUpload(),
  });
}
