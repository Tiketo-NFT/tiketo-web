import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import userReducer from '../features/user/userSlice';
import festivalReducer from '../features/festival/festivalSlice';

const rootReducer = combineReducers({
  user: userReducer,
  festival: festivalReducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk]
});

export const persistor = persistStore(store);