import React, { FC } from 'react';

import OrderCard from '../OrderCard';
import ProductsModal from '../ProductsModal';
import { OrderType } from '../../types/types';
import './styles.css';

type OrdersListProps = {
  orders: OrderType[];
};

const OrdersList: FC<OrdersListProps> = ({ orders }) => (
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
  </div>
);

export default OrdersList;
