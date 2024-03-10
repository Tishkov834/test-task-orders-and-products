import { useEffect, useState } from 'react';

import { getOrders } from '../api/orders';
import OrdersList from '../components/OrdersList';
import { OrderType } from '../types/types';

const OrdersPage = () => {
  const [orders, setOrders] = useState<OrderType[]>([]);

  useEffect(() => {
    getOrders()
      .then(({ data }) => setOrders(data));
  }, []);

  return (
    <div>
      <h1>{`Приходы / ${orders.length}`}</h1>
      <OrdersList orders={orders} setOrders={setOrders} />
    </div>
  );
};

export default OrdersPage;
