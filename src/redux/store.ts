import { configureStore } from '@reduxjs/toolkit';

import productsModalReducer from './productsModalReducer';
import deleteOrderModalReducer from './deleteOrderModalReducer';
import ordersReducer from './ordersReducer';

const store = configureStore({
  reducer: {
    productsModal: productsModalReducer,
    deleteOrderModal: deleteOrderModalReducer,
    orders: ordersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
