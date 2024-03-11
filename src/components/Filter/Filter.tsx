import React, { FC } from 'react';

import { ProductTypeFilter } from '../../constants/filters';
import './styles.css';

type FilterProps = {
  selectedType: ProductTypeFilter;
  setSelectedType: (type: ProductTypeFilter) => void;
};

const Filter: FC<FilterProps> = ({ selectedType, setSelectedType }) => (
  <div className="filter-wrapper">
    <h2 className="filter-title">Тип:</h2>
    <select
      className="filter-select"
      value={selectedType}
      onChange={(e) => setSelectedType(e.target.value as ProductTypeFilter)}
    >
      <option value={ProductTypeFilter.ALL}>Все</option>
      <option value={ProductTypeFilter.MONITORS}>Мониторы</option>
      <option value={ProductTypeFilter.PHONES}>Телефоны</option>
    </select>
  </div>
);

export default Filter;
