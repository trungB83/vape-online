import { configureStore } from '@reduxjs/toolkit'

import ROOTREDUCER from './reducers'

const store = configureStore({ reducer: ROOTREDUCER })