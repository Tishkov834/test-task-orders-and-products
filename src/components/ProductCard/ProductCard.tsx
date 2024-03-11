import React, { FC, useMemo } from 'react';

import ItemInfo from '../common/ItemInfo';
import DeleteButton from '../common/DeleteButton';
import ProductTitle from '../common/ProductTitle';
import { useAppSelector } from '../../customHooks/redux';
import { formatDate } from '../../helpers/formatDate';
import { OrderType, PriceType } from '../../types/types';
import './styles.css';

type ProductCardProps = {
  photo: string
  title: string
  serialNumber: number
  type: string
  guarantee: {
    start: string
    end: string
  }
  prices: PriceType[]
  orderId: number
  date: string
};
const ProductCard: FC<ProductCardProps> = ({
  photo, title, serialNumber, type, guarantee, prices, orderId, date,
}) => {
  const { orders } = useAppSelector((state) => state.orders);

  const getCurrentPrice = (allPrices: PriceType[], symbol: string) => {
    const currentPrice = allPrices.find((price) => price.symbol === symbol);
    return currentPrice?.value;
  };

  const getOrderName = useMemo(() => {
    const ordersMap: { [orderId: number]: string } = {};

    orders.forEach(({ id, title: orderTitle }: OrderType) => {
      ordersMap[id] = orderTitle;
    });

    return ordersMap;
  }, [orders]);

  return (
    <div className="product-card-layout">
      <img className="product-photo" src={photo} alt="product" />

      <ProductTitle title={title} serialNumber={serialNumber} />

      <p className="product-type">{type}</p>

      <ItemInfo
        mainText={`по ${formatDate(guarantee.end, false)}`}
        additionalText={`с ${formatDate(guarantee.start, false)}`}
      />

      <ItemInfo
        mainText={`${getCurrentPrice(prices, 'UAH')} UAH`}
        additionalText={`${getCurrentPrice(prices, 'USD')} $`}
      />

      <p className="product-order-name">{getOrderName[orderId]}</p>

      <ItemInfo mainText={formatDate(date, false)} additionalText={formatDate(date, false)} />

      <DeleteButton />
    </div>
  );
};

export default ProductCard;
