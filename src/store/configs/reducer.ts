import { createSlice } from "@reduxjs/toolkit";
import { fetchConfig, fetchConfigs } from "store/configs/action";

export const configSlice = createSlice({
  name: "config",
  initialState: {
    list: {
      loading: false,
      result: {},
      error: {},
    },
    item: {
      loading: false,
      result: {},
      error: {},
    },
  },
  extraReducers: {
    [fetchConfig.pending as any]: (state, action) => {
      state.item.loading = true;
    },
    [fetchConfig.fulfilled as any]: (state, action) => {
      state.item.loading = false;
      state.item.result = action.payload;
    },
    [fetchConfig.rejected as any]: (state, action) => {
      state.item.loading = false;
      state.item.error = action.error;
    },
    [fetchConfigs.pending as any]: (state, action) => {
      state.list.loading = true;
    },
    [fetchConfigs.fulfilled as any]: (state, action) => {
      state.list.loading = false;
      const configObjects = action.payload.data.configs.reduce(
        (obj: any, item: any) =>
          Object.assign(obj, {
            [item.ma_cau_hinh]: { ...item, value: JSON.parse(item.du_lieu) },
          }),
        {}
      );
      const result = {
        ...action.payload,
        data: { ...action.payload.data, ...configObjects },
      };
      state.list.result = result;
    },
    [fetchConfigs.rejected as any]: (state, action) => {
      state.list.loading = false;
      state.list.error = action.error;
    },
  },
  reducers: {},
});

export const config = (state: any) => state.config;

export default configSlice.reducer;
