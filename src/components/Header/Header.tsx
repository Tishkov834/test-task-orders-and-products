import React from 'react';

import CurrentDate from '../CurrentDate';
import './styles.css';

const Header = () => (
  <header className="header-wrapper">
    <div className="header-wrapper-content">
      <h1 className="header-wrapper-content-title">Orders & Products</h1>
      <CurrentDate />
    </div>
  </header>
);

export default Header;
