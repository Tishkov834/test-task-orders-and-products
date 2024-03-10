import axiosInstance from './axiosInstance';

export const getOrders = () => axiosInstance.get('/orders');

export const deleteOrder = (id: number) => axiosInstance.delete(`/orders/${id}`);
