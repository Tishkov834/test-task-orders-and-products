import React, { FC, useEffect, useState } from 'react';

import { deleteIcon, itemsIcon } from '../../assets/icons';
import { ProductType } from '../../types/types';
import { formatDate } from '../../helpers/formatDate';
import './styles.css';

type OrderCardProps = {
  title: string
  date: string
  products: ProductType[]
};

const OrderCard: FC<OrderCardProps> = ({ title, products, date }) => {
  const [totalUSD, setTotalUSD] = useState<number | null>(null);
  const [totalUAH, setTotalUAH] = useState<number | null>(null);

  useEffect(() => {
    const calculateTotal = () => {
      const { usdTotal, uahTotal } = products.reduce(
        (acc, product) => {
          product.price.forEach((price) => {
            if (price.symbol === 'USD') {
              acc.usdTotal += price.value;
            } else if (price.symbol === 'UAH') {
              acc.uahTotal += price.value;
            }
          });
          return acc;
        },
        { usdTotal: 0, uahTotal: 0 },
      );

      if (usdTotal !== 0) setTotalUSD(usdTotal);
      if (uahTotal !== 0) setTotalUAH(uahTotal);
    };

    calculateTotal();
  }, [products]);

  return (
    <div className="card-layout">
      <p className="card-title">{title}</p>
      <div className="card-products">
        <div className="item-icon">{itemsIcon}</div>
        <div className="card-products-info">
          <span className="card-products-info-amount">{products.length}</span>
          <span className="card-products-info-title">Продукта</span>
        </div>
      </div>
      <div className="info-wrapper">
        <span className="additional-info">{formatDate(date)}</span>
        <span className="main-info">{formatDate(date, false)}</span>
      </div>
      <div className="info-wrapper">
        <span className="additional-info">{totalUSD && `${totalUSD} $`}</span>
        <span className="main-info">{totalUAH && `${totalUAH} UAH`}</span>
      </div>
      <button className="delete-btn">
        {deleteIcon}
      </button>
    </div>
  );
};

export default OrderCard;
