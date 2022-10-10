import { createSlice } from '@reduxjs/toolkit';
import { fetchUser, fetchUsers, doLogin, doLogout, doRegister, doForgotPassword, doChangePassword, doEditUser, doVerify } from 'store/users/action';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    login: {
      loading: false,
      result: {},
      error: {},
    },
    logout: {
      loading: false,
      result: {},
      error: {},
    },
    register: {
      loading: false,
      result: {},
      error: {},
    },
    forgotpassword: {
      loading: false,
      result: {},
      error: {},
    },
    changepassword: {
      loading: false,
      result: {},
      error: {},
    },
    edituser: {
      loading: false,
      result: {},
      error: {},
    },
    verify: {
      loading: false,
      result: {},
      error: {},
    },

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
    [fetchUser.pending as any]: (state, action) => {
      state.item.loading = true;
      state.item.result = {};
      state.item.error = {};
    },
    [fetchUser.fulfilled as any]: (state, action) => {
      state.item.loading = false;
      state.item.result = action.payload;
      state.item.error = {};
    },
    [fetchUser.rejected as any]: (state, action) => {
      state.item.loading = false;
      state.item.error = action.error;
      state.item.result = {};
    },
    [fetchUsers.pending as any]: (state, action) => {
      state.list.loading = true;
      state.list.result = {};
      state.list.error = {};
    },
    [fetchUsers.fulfilled as any]: (state, action) => {
      state.list.loading = false;
      state.list.result = action.payload;
      state.list.error = {};
    },
    [fetchUsers.rejected as any]: (state, action) => {
      state.list.loading = false;
      state.list.error = action.error;
      state.list.result = {};
    },

    // do login
    [doLogin.pending as any]: (state, action) => {
      state.login.loading = true;
      state.login.result = {};
      state.login.error = {};
    },
    [doLogin.fulfilled as any]: (state, action) => {
      state.login.loading = false;
      state.login.result = action.payload;
      state.login.error = {};
    },
    [doLogin.rejected as any]: (state, action) => {
      state.login.loading = false;
      state.login.error = action.error;
      state.login.result = {};
    },

    // do logout
    [doLogout.pending as any]: (state, action) => {
      state.logout.loading = true;
      state.logout.result = {};
      state.logout.error = {};
    },
    [doLogout.fulfilled as any]: (state, action) => {
      state.logout.loading = false;
      state.logout.result = action.payload;
      state.logout.error = {};
    },
    [doLogout.rejected as any]: (state, action) => {
      localStorage.removeItem('userToken');
      localStorage.removeItem('userInfo');
      state.logout.loading = false;
      state.logout.error = action.error;
      state.logout.result = {};
    },

    // do Register
    [doRegister.pending as any]: (state, action) => {
      state.register.loading = true;
      state.register.result = {};
      state.register.error = {};
    },
    [doRegister.fulfilled as any]: (state, action) => {
      state.register.loading = false;
      state.register.result = action.payload;
      state.register.error = {};
    },
    [doRegister.rejected as any]: (state, action) => {
      state.register.loading = false;
      state.register.error = action.error;
      state.register.result = {};
    },

    // do forgotpassword
    [doForgotPassword.pending as any]: (state, action) => {
      state.forgotpassword.loading = true;
      state.forgotpassword.result = {};
      state.forgotpassword.error = {};
    },
    [doForgotPassword.fulfilled as any]: (state, action) => {
      state.forgotpassword.loading = false;
      state.forgotpassword.result = action.payload;
      state.forgotpassword.error = {};
    },
    [doForgotPassword.rejected as any]: (state, action) => {
      state.forgotpassword.loading = false;
      state.forgotpassword.error = action.error;
      state.forgotpassword.result = {};
    },
    // do changepassword
    [doChangePassword.pending as any]: (state, action) => {
      state.changepassword.loading = true;
      state.changepassword.result = {};
      state.changepassword.error = {};
    },
    [doChangePassword.fulfilled as any]: (state, action) => {
      state.changepassword.loading = false;
      state.changepassword.result = action.payload;
      state.changepassword.error = {};
    },
    [doChangePassword.rejected as any]: (state, action) => {
      state.changepassword.loading = false;
      state.changepassword.error = action.error;
      state.changepassword.result = {};
    },
    // do edituser
    [doEditUser.pending as any]: (state, action) => {
      state.edituser.loading = true;
      state.edituser.result = {};
      state.edituser.error = {};
    },
    [doEditUser.fulfilled as any]: (state, action) => {
      state.edituser.loading = false;
      state.edituser.result = action.payload;
      state.edituser.error = {};
    },
    [doEditUser.rejected as any]: (state, action) => {
      state.edituser.loading = false;
      state.edituser.error = action.error;
      state.edituser.result = {};
    },
    // do verify
    [doVerify.pending as any]: (state, action) => {
      state.verify.loading = true;
      state.verify.result = {};
      state.verify.error = {};
    },
    [doVerify.fulfilled as any]: (state, action) => {
      state.verify.loading = false;
      state.verify.result = action.payload;
      state.verify.error = {};
    },
    [doVerify.rejected as any]: (state, action) => {
      state.verify.loading = false;
      state.verify.error = action.error;
      state.verify.result = {};
    },
  },
});

export const user = (state: any) => state.user;

export default userSlice.reducer;
