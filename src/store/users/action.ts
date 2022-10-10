import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import CONFIGS from 'configs';
import { ActionParams } from 'interfaces';
import { GET_USER, GET_USERS, LOGIN, LOGOUT, FORGOT_PASSWORD, REGISTER, EDIT_USER, VERIFY, CHANGE_PASSWORD } from 'store/users/type';
import { getApi, postApi, putApi } from '../api';

export const fetchUser = createAsyncThunk(GET_USER, async (params: ActionParams, { rejectWithValue }) => {
  try {
    const endpoint = `${CONFIGS.API_URL}/api/user/${params.info.id}`;
    const response = await getApi(endpoint);
    const data = response.data;
    if (params.onSuccess) {
      params.onSuccess(data);
    }
    return data;
  } catch (err: any) {
    if (params.onError) {
      params.onError(err.response.data);
    }
    return rejectWithValue(err.response.data);
  }
});

export const fetchUsers = createAsyncThunk(GET_USERS, async (params: ActionParams, { rejectWithValue }) => {
  try {
    const endpoint = `${CONFIGS.API_URL}/api/users`;
    const response = await getApi(endpoint);
    const data = response.data;
    if (params.onSuccess) {
      params.onSuccess(data);
    }
    return data;
  } catch (err: any) {
    if (params.onError) {
      params.onError(err.response.data);
    }
    return rejectWithValue(err.response.data);
  }
});

export const doLogin = createAsyncThunk(LOGIN, async (params: ActionParams, { rejectWithValue }) => {
  try {
    const endpoint = `${CONFIGS.API_URL}/api/user/login`;
    const response = await postApi(endpoint, params.info);
    const data = response.data;
    localStorage.setItem('userToken', data.token);
    localStorage.setItem('userInfo', JSON.stringify(data.data));
    if (params.onSuccess) {
      params.onSuccess(data);
    }
    return data;
  } catch (err: any) {
    if (params.onError) {
      params.onError(err.response.data);
    }
    return rejectWithValue(err.response.data);
  }
});

export const doLogout = createAsyncThunk(LOGOUT, async (params: ActionParams, { rejectWithValue }) => {
  try {
    const endpoint = `${CONFIGS.API_URL}/api/user/logout`;
    const response = await postApi(endpoint, params);
    const data = response.data;

    localStorage.removeItem('userToken');
    localStorage.removeItem('userInfo');

    if (params.onSuccess) {
      params.onSuccess(data);
    }
    return data;
  } catch (err: any) {
    if (params.onError) {
      params.onError(err.response.data);
    }
    return rejectWithValue(err.response.data);
  }
});

export const doRegister = createAsyncThunk(REGISTER, async (params: ActionParams, { rejectWithValue }) => {
  try {
    const endpoint = `${CONFIGS.API_URL}/api/user/regUser`;
    const response = await postApi(endpoint, params);
    const data = response.data;
    if (params.onSuccess) {
      params.onSuccess(data);
    }
    return data;
  } catch (err: any) {
    if (params.onError) {
      params.onError(err.response.data);
    }
    return rejectWithValue(err.response.data);
  }
});

export const doForgotPassword = createAsyncThunk(FORGOT_PASSWORD, async (params: ActionParams, { rejectWithValue }) => {
  try {
    const endpoint = `${CONFIGS.API_URL}/api/user/forgot-password`;
    const response = await postApi(endpoint, params);
    const data = response.data;

    if (params.onSuccess) {
      params.onSuccess(data);
    }
    return data;
  } catch (err: any) {
    if (params.onError) {
      params.onError(err.response.data);
    }
    return rejectWithValue(err.response.data);
  }
});

export const doChangePassword = createAsyncThunk(CHANGE_PASSWORD, async (params: ActionParams, { rejectWithValue }) => {
  try {
    const endpoint = `${CONFIGS.API_URL}/api/user/change-password`;
    const response = await postApi(endpoint, params);
    const data = response.data;

    if (params.onSuccess) {
      params.onSuccess(data);
    }
    return data;
  } catch (err: any) {
    if (params.onError) {
      params.onError(err.response.data);
    }
    return rejectWithValue(err.response.data);
  }
});

export const doEditUser = createAsyncThunk(EDIT_USER, async (params: ActionParams, { rejectWithValue }) => {
  try {
    const endpoint = `${CONFIGS.API_URL}/api/user/${params.info.id}`;
    const response = await putApi(endpoint, params.info);
    const data = response.data;

    if (params.onSuccess) {
      params.onSuccess(data);
    }
    return data;
  } catch (err: any) {
    if (params.onError) {
      params.onError(err.response.data);
    }
    return rejectWithValue(err.response.data);
  }
});

export const doVerify = createAsyncThunk(VERIFY, async (params: ActionParams, { rejectWithValue }) => {
  try {
    const endpoint = `${CONFIGS.API_URL}/api/user-confirmation/${params.info.id}`;
    const response = await putApi(endpoint, params);
    const data = response.data;
    if (params.onSuccess) {
      params.onSuccess(data);
    }
    return data;
  } catch (err: any) {
    if (params.onError) {
      params.onError(err.response.data);
    }
    return rejectWithValue(err.response.data);
  }
});
