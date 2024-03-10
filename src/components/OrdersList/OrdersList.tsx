import React, { FC } from 'react';

import OrderCard from '../OrderCard';
import ProductsModal from '../ProductsModal';
import ConfirmationModal from '../ConfirmationModal';
import { useAppDispatch, useAppSelector } from '../../customHooks/redux';
import { deleteOrder } from '../../api/orders';
import {
  setDeleteOrderModalIsOpen,
  setDeleteOrderModalOrderId,
  setDeleteOrderModalProducts,
} from '../../redux/deleteOrderModalReducer';
import { OrderType } from '../../types/types';
import './styles.css';

type OrdersListProps = {
  orders: OrderType[]
  setOrders: (value: OrderType[])=> void
};

const OrdersList: FC<OrdersListProps> = ({ orders, setOrders }) => {
  const { modalIsOpen, orderId, products: orderProducts } = useAppSelector((state) => state.deleteOrderModal.deleteOrderModal);
  const dispatch = useAppDispatch();

  const onClose = () => {
    dispatch(setDeleteOrderModalIsOpen(false));
    dispatch(setDeleteOrderModalProducts([]));
    dispatch(setDeleteOrderModalOrderId(null));
  };

  const handleDeleteOrder = () => {
    if (orderId) {
      deleteOrder(orderId).then(() => {
        setOrders(orders.filter(({ id }) => id !== orderId));
        onClose();
      });
    }
  };

  return (
    <div className="orders-list-wrapper">
      <ul className="orders-list">
        {
        orders.map(({
          id, title, products, date,
        }: OrderType) => (
          <li className="orders-list-item" key={id}>
            <OrderCard id={id} title={title} date={date} products={products} />
          </li>
        ))
    }
      </ul>
      <ProductsModal />
      <ConfirmationModal isOpen={modalIsOpen} onClose={onClose} onConfirm={handleDeleteOrder} title="Вы уверены, что хотите удалить этот подход?">
        <ul className="products-list">
          {
            orderProducts.map(({
              id, title, photo, serialNumber,
            }) => (
              <li className="products-list-item" key={id}>
                <div className="product-card">
                  <img className="product-card-photo" src={photo} alt="product" />
                  <div className="product-card-info">
                    <p className="product-card-title">{title}</p>
                    <span className="product-card-serial">{serialNumber}</span>
                  </div>
                </div>
              </li>
            ))
          }
        </ul>
      </ConfirmationModal>
    </div>
  );
};

export default OrdersList;
