import { useEffect, useState } from 'react';

import { getOrders } from '../api/orders';
import OrdersList from '../components/OrdersList';
import PageWrapper from '../components/common/PageWrapper';
import { OrderType } from '../types/types';

const OrdersPage = () => {
  const [orders, setOrders] = useState<OrderType[]>([]);

  useEffect(() => {
    getOrders()
      .then(({ data }) => setOrders(data));
  }, []);

  return (
    <PageWrapper title="Приходы" amount={orders.length}>
      <OrdersList orders={orders} setOrders={setOrders} />
    </PageWrapper>
  );
};

export default OrdersPage;
