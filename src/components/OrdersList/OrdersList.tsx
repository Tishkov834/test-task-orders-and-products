import React, { FC } from 'react';

import OrderCard from '../OrderCard';
import { OrderType } from '../../types/types';
import './styles.css';

type OrdersListProps = {
  orders: OrderType[];
};

const OrdersList: FC<OrdersListProps> = ({ orders }) => (
  <ul className="orders-list-wrapper">
    {
        orders.map(({
          id, title, products, date,
        }: OrderType) => (
          <li className="orders-list-item" key={id}>
            <OrderCard title={title} date={date} products={products} />
          </li>
        ))
    }
  </ul>
);

export default OrdersList;
