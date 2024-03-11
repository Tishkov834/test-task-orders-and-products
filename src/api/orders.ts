import axiosInstance from './axiosInstance';
import { ORDERS_URL } from '../constants/endpoints';

export const getOrders = () => axiosInstance.get(ORDERS_URL);

export const deleteOrder = (id: number) => axiosInstance.delete(`${ORDERS_URL}/${id}`);
