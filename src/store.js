import { configureStore } from '@reduxjs/toolkit'
import userReducer from './features/user/userSlice';
import festivalReducer from './features/festival/festivalSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    festival: festivalReducer,
  },
})