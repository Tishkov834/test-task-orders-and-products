import React, { FC } from 'react';

import ProductCard from '../ProductCard';
import { ProductType } from '../../types/types';
import './styles.css';

type ProductsListProps = {
  products: ProductType[]
};

const ProductsList: FC<ProductsListProps> = ({ products }) => (
  <ul className="all-products-list">
    {
        products.map(({
          id, title, photo, serialNumber, type, date, price, guarantee, orderId,
        }: ProductType) => (
          <li className="product-item" key={id}>
            <ProductCard
              title={title}
              photo={photo}
              serialNumber={serialNumber}
              type={type}
              date={date}
              prices={price}
              guarantee={guarantee}
              orderId={orderId}
            />
          </li>
        ))
        }
  </ul>
);
export default ProductsList;
