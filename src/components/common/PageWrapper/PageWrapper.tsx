import React, { FC } from 'react';

import './styles.css';

type PageWrapperProps = {
  children: React.ReactNode
  filters?: React.ReactNode
  title: string
  amount: number
};

const PageWrapper: FC<PageWrapperProps> = ({
  children, filters, title, amount,
}) => (
  <div className="page-wrapper">
    <div className="page-header">
      <h1>{`${title} / ${amount}`}</h1>
      <div className="page-filters">
        {filters}
      </div>
    </div>
    {children}
  </div>
);

PageWrapper.defaultProps = {
  filters: null,
};

export default PageWrapper;
