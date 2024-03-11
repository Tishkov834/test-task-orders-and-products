import React, { FC } from 'react';

import './styles.css';

type ItemInfoProps = {
  mainText: string
  additionalText: string
};

const ItemInfo: FC<ItemInfoProps> = ({ additionalText, mainText }) => (
  <div className="info-wrapper">
    <span className="additional-info">{additionalText}</span>
    <span className="main-info">{mainText}</span>
  </div>
);

export default ItemInfo;
