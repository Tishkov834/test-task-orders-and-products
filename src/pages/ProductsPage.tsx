import React, { useEffect, useState } from 'react';

import { getProducts } from '../api/products';
import { getOrders } from '../api/orders';
import { ProductType } from '../types/types';
import PageWrapper from '../components/common/PageWrapper';
import Filter from '../components/Filter';
import ProductsList from '../components/ProductsList';
import { useAppDispatch } from '../customHooks/redux';
import { setOrdersData } from '../redux/ordersReducer';
import { ProductTypeFilter } from '../constants/filters';

const ProductsPage = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [selectedType, setSelectedType] = useState<ProductTypeFilter>(ProductTypeFilter.ALL);

  const filteredProducts = selectedType === ProductTypeFilter.ALL
    ? products
    : products.filter((product) => product.type === selectedType);

  const dispatch = useAppDispatch();

  useEffect(() => {
    getProducts()
      .then(({ data }) => setProducts(data));

    getOrders()
      .then(({ data }) => {
        dispatch(setOrdersData(data));
      });
  }, []);

  return (
    <PageWrapper
      title="Продукты"
      amount={products.length}
      filters={(<Filter selectedType={selectedType} setSelectedType={setSelectedType} />)}
    >
      <ProductsList products={filteredProducts} />
    </PageWrapper>
  );
};

export default ProductsPage;
