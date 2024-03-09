import axiosInstance from './axiosInstance';

export const getOrders = () => axiosInstance.get('/orders');
