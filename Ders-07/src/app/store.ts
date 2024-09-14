import { configureStore } from '@reduxjs/toolkit';
import productsSlice from '../slices/productsSlice';
import checkoutSlice from '../slices/checkoutSlice';

export const store = configureStore({
  reducer: {
    products : productsSlice,
    checkout: checkoutSlice
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch