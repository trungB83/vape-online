import { createAsyncThunk } from '@reduxjs/toolkit';
import CONFIGS from 'configs';
import { GET_POST, GET_POSTS } from 'store/posts/type';
import { getApi } from '../api';
import { buildUrl } from 'helpers/common';
import { ActionParams } from 'interfaces';

export const fetchPost = createAsyncThunk(GET_POST, async (params: ActionParams, { rejectWithValue }) => {
  try {
    const endpoint = `${CONFIGS.API_URL}/api/post/${params.info.id}`;
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

export const fetchPosts = createAsyncThunk(GET_POSTS, async (params: ActionParams, { rejectWithValue }) => {
  try {
    const endpoint = buildUrl(`${CONFIGS.API_URL}/api/posts`, params.info);
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
