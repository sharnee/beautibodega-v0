import { configureStore } from '@reduxjs/toolkit'
import authSlice from './AuthSlice'
import userSlice from './UserSlice';
import cartSlice from './CartSlice';


import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const persistAuthReducer = persistReducer(persistConfig, authSlice)
const persistUserReducer = persistReducer(persistConfig, userSlice)
const persistCartReducer = persistReducer(persistConfig, cartSlice)

export default configureStore({
  reducer: {
    auth: persistAuthReducer,
    user: persistUserReducer,
    cart: persistCartReducer
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
})