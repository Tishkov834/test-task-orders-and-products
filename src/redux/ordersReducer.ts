import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { OrderType } from '../types/types';

type OrdersState = {
  orders: OrderType[]
};

const initialState: OrdersState = {
  orders: [],
};

export const ordersSlice = createSlice({
  name: 'ordersSlice',
  initialState,
  reducers: {
    setOrdersData: (state, action: PayloadAction<OrderType[]>) => {
      state.orders = action.payload;
    },
  },
});

export const {
  setOrdersData,
} = ordersSlice.actions;

export default ordersSlice.reducer;
