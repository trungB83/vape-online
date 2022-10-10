import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
// import reducers
import postReducer from './posts/reducer';
import userReducer from './users/reducer';
import configReducer from './configs/reducer';

const reducer = {
  post: postReducer,
  user: userReducer,
  config: configReducer,
};

export const store =  configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;