import React, { FC } from 'react';

import './styles.css';

type ProductTitleProps = {
  title: string
  serialNumber: number
};
const ProductTitle:FC <ProductTitleProps> = ({ title, serialNumber }) => (
  <div className="product-card-info">
    <p className="product-card-title">{title}</p>
    <span className="product-card-serial">{serialNumber}</span>
  </div>
);

export default ProductTitle;
