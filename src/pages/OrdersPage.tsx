import { useEffect, useState } from 'react';

import { getOrders } from '../api/orders';
import OrdersList from '../components/OrdersList';

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getOrders()
      .then(({ data }) => setOrders(data));
  }, []);

  return (
    <div>
      <h1>{`Приходы / ${orders.length}`}</h1>
      <OrdersList orders={orders} />
    </div>
  );
};

export default OrdersPage;
