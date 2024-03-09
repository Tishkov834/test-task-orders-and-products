import React from 'react';

import { useAppDispatch, useAppSelector } from '../../customHooks/redux';
import { closeIcon } from '../../assets/icons';
import {
  setProductsModalModalIsOpen, setProductsModalOrderId,
  setProductsModalOrderName,
  setProductsModalProducts,
} from '../../redux/productsModalReducer';
import './styles.css';
import DeleteButton from '../common/DeleteButton';

const ProductsModal = () => {
  const { modalIsOpen, products, orderName } = useAppSelector((state) => state.productsModal.productsModal);
  const dispatch = useAppDispatch();

  if (!modalIsOpen) {
    return null;
  }

  const onCloseModal = () => {
    dispatch(setProductsModalModalIsOpen(false));
    dispatch(setProductsModalOrderName(''));
    dispatch(setProductsModalOrderId(null));
    dispatch(setProductsModalProducts([]));
  };

  return (
    <div className="product-modal-wrapper">
      <h1 className="product-modal-title">{orderName}</h1>
      <ul className="products-list">
        {
            products.map(({
              id, title, photo, serialNumber, type,
            }) => (
              <li className="products-list-item" key={id}>
                <div className="product-card">
                  <img className="product-card-photo" src={photo} alt="product" />
                  <div className="product-card-info">
                    <p className="product-card-title">{title}</p>
                    <span className="product-card-serial">{serialNumber}</span>
                  </div>
                  <p className="product-card-type">{type}</p>
                  <DeleteButton />
                </div>
              </li>
            ))
        }
      </ul>
      <button className="close-btn" onClick={onCloseModal}>
        {closeIcon}
      </button>

    </div>
  );
};

export default ProductsModal;
