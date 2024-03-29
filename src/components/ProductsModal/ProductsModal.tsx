import React from 'react';

import { useAppDispatch, useAppSelector } from '../../customHooks/redux';
import DeleteButton from '../common/DeleteButton';
import CloseButton from '../common/CloseButton';
import ProductTitle from '../common/ProductTitle';
import {
  setProductsModalModalIsOpen, setProductsModalOrderId,
  setProductsModalOrderName,
  setProductsModalProducts,
} from '../../redux/productsModalReducer';
import './styles.css';

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
                  <ProductTitle title={title} serialNumber={serialNumber} />
                  <p className="product-card-type">{type}</p>
                  <DeleteButton />
                </div>
              </li>
            ))
        }
      </ul>
      <CloseButton onClose={onCloseModal} />
    </div>
  );
};

export default ProductsModal;
