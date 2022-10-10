import { createSlice } from '@reduxjs/toolkit';
import { fetchPost, fetchPosts } from 'store/posts/action';

export const postSlice = createSlice({
  name: 'post',
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
  reducers: {},
  extraReducers: {
    [fetchPost.pending as any ]: (state, action) => {
      state.item.loading = true;
      state.item.result = {};
      state.item.error = {};
    },
    [fetchPost.fulfilled as any ]: (state, action) => {
      state.item.loading = false;
      state.item.result = action.payload;
      state.item.error = {};
    },
    [fetchPost.rejected as any ]: (state, action) => {
      state.item.loading = false;
      state.item.error = action.error;
      state.item.result = {};
    },
    [fetchPosts.pending as any ]: (state, action) => {
      state.list.loading = true;
      state.list.result = {};
      state.list.error = {};
    },
    [fetchPosts.fulfilled as any ]: (state, action) => {
      state.list.loading = false;
      state.list.result = action.payload;
      state.list.error = {};
    },
    [fetchPosts.rejected as any ]: (state, action) => {
      state.list.loading = false;
      state.list.error = action.error;
      state.list.result = {};
    },
  },
});

export const post = (state: any) => state.post;

export default postSlice.reducer;
