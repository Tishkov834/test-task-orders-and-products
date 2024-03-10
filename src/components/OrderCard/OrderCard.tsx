import React, {
  FC, MouseEventHandler, useEffect, useState,
} from 'react';

import { useAppDispatch, useAppSelector } from '../../customHooks/redux';
import {
  setProductsModalModalIsOpen, setProductsModalOrderId,
  setProductsModalOrderName,
  setProductsModalProducts,
} from '../../redux/productsModalReducer';
import {
  setDeleteOrderModalIsOpen,
  setDeleteOrderModalOrderId,
  setDeleteOrderModalProducts,
} from '../../redux/deleteOrderModalReducer';
import { arrowIcon, itemsIcon } from '../../assets/icons';
import { ProductType } from '../../types/types';
import { formatDate } from '../../helpers/formatDate';
import DeleteButton from '../common/DeleteButton';
import './styles.css';

type OrderCardProps = {
  id: number
  title: string
  date: string
  products: ProductType[]
};

const OrderCard: FC<OrderCardProps> = ({
  id, title, products, date,
}) => {
  const [totalUSD, setTotalUSD] = useState<number | null>(null);
  const [totalUAH, setTotalUAH] = useState<number | null>(null);

  const dispatch = useAppDispatch();
  const { modalIsOpen, orderId } = useAppSelector((state) => state.productsModal.productsModal);

  const openProductModal = () => {
    dispatch(setProductsModalModalIsOpen(true));
    dispatch(setProductsModalOrderName(title));
    dispatch(setProductsModalOrderId(id));
    dispatch(setProductsModalProducts(products));
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      openProductModal();
    }
  };

  const handleDelete: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    dispatch(setDeleteOrderModalIsOpen(true));
    dispatch(setDeleteOrderModalProducts(products));
    dispatch(setDeleteOrderModalOrderId(id));
  };

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
    <div className="card-layout" onClick={openProductModal} onKeyDown={handleKeyDown} role="button" tabIndex={0}>
      {!modalIsOpen && (<p className="card-title">{title}</p>)}
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
      {!modalIsOpen && (
      <div className="info-wrapper">
        <span className="additional-info">{totalUSD && `${totalUSD} $`}</span>
        <span className="main-info">{totalUAH && `${totalUAH} UAH`}</span>
      </div>
      )}
      {modalIsOpen
        ? (
          <div className="active-order">
            <div className={`active-icon ${orderId === id ? 'active' : ''}`}>
              {arrowIcon}
            </div>
          </div>
        )
        : (
          <DeleteButton onClick={handleDelete} />
        )}

    </div>
  );
};

export default OrderCard;
