import { configureStore } from '@reduxjs/toolkit';

import productsModalReducer from './productsModalReducer';

const store = configureStore({
  reducer: {
    productsModal: productsModalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
