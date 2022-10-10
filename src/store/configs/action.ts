import { createAsyncThunk } from '@reduxjs/toolkit';
import CONFIGS from 'configs';
import { ActionParams } from 'interfaces';
import { GET_CONFIG, GET_CONFIGS } from 'store/configs/type';
import { getApi } from '../api';

export const fetchConfig = createAsyncThunk(GET_CONFIG, async (params: ActionParams, { rejectWithValue }) => {
  try {
    const endpoint = `${CONFIGS.API_URL}/api/config/${params.info.id}`;
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

export const fetchConfigs = createAsyncThunk(GET_CONFIGS, async (params: ActionParams, { rejectWithValue }) => {
  try {
    const endpoint = `${CONFIGS.API_URL}/api/client-configs`;
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
