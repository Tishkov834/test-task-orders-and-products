import { configureStore } from '@reduxjs/toolkit';

import productsModalReducer from './productsModalReducer';
import deleteOrderModalReducer from './deleteOrderModalReducer';

const store = configureStore({
  reducer: {
    productsModal: productsModalReducer,
    deleteOrderModal: deleteOrderModalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
