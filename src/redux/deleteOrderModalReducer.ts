import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ProductType } from '../types/types';

type DeleteOrderModalState = {
  deleteOrderModal: {
    modalIsOpen: boolean
    orderId: number | null
    products: ProductType[]

  }
};

const initialState: DeleteOrderModalState = {
  deleteOrderModal: {
    modalIsOpen: false,
    orderId: null,
    products: [],
  },
};

export const deleteOrderModalSlice = createSlice({
  name: 'deleteOrderModalSlice',
  initialState,
  reducers: {
    setDeleteOrderModalIsOpen: (state, action: PayloadAction<boolean>) => {
      state.deleteOrderModal.modalIsOpen = action.payload;
    },
    setDeleteOrderModalProducts: (state, action: PayloadAction<ProductType[]>) => {
      state.deleteOrderModal.products = action.payload;
    },
    setDeleteOrderModalOrderId: (state, action: PayloadAction<number | null>) => {
      state.deleteOrderModal.orderId = action.payload;
    },
  },
});

export const {
  setDeleteOrderModalIsOpen,
  setDeleteOrderModalProducts,
  setDeleteOrderModalOrderId,
} = deleteOrderModalSlice.actions;

export default deleteOrderModalSlice.reducer;
