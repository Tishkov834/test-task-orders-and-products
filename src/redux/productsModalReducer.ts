import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ProductType } from '../types/types';

type ProductsModalState = {
  productsModal: {
    modalIsOpen: boolean
    orderName: string
    orderId: number | null
    products: ProductType[]

  }
};

const initialState: ProductsModalState = {
  productsModal: {
    modalIsOpen: false,
    orderName: '',
    orderId: null,
    products: [],
  },
};

export const productsModalSlice = createSlice({
  name: 'productsModalSlice',
  initialState,
  reducers: {
    setProductsModalModalIsOpen: (state, action: PayloadAction<boolean>) => {
      state.productsModal.modalIsOpen = action.payload;
    },
    setProductsModalProducts: (state, action: PayloadAction<ProductType[]>) => {
      state.productsModal.products = action.payload;
    },
    setProductsModalOrderName: (state, action: PayloadAction<string>) => {
      state.productsModal.orderName = action.payload;
    },
    setProductsModalOrderId: (state, action: PayloadAction<number | null>) => {
      state.productsModal.orderId = action.payload;
    },
  },
});

export const {
  setProductsModalModalIsOpen,
  setProductsModalProducts,
  setProductsModalOrderName,
  setProductsModalOrderId,
} = productsModalSlice.actions;

export default productsModalSlice.reducer;
