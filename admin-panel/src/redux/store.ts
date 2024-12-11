import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cartSlice';
import LoadingReducer from './features/loadingSlice';
import producerReducer from './features/productSlice';
export const store = configureStore({
  reducer: {
    cartReducer,
    producerReducer,
    LoadingReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
