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
import ItemInfo from '../common/ItemInfo';
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
  const [totalUSD, setTotalUSD] = useState<string>('');
  const [totalUAH, setTotalUAH] = useState<string>('');

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

      if (usdTotal !== 0) setTotalUSD(String(usdTotal));
      if (uahTotal !== 0) setTotalUAH(String(uahTotal));
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

      <ItemInfo mainText={formatDate(date, false)} additionalText={formatDate(date)} />

      {!modalIsOpen && (
        <ItemInfo mainText={totalUAH && `${totalUAH} UAH`} additionalText={totalUSD && `${totalUSD} $`} />
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
