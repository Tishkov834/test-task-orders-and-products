import axiosInstance from './axiosInstance';
import { PRODUCTS_URL } from '../constants/endpoints';

export const getProducts = () => axiosInstance.get(PRODUCTS_URL);
