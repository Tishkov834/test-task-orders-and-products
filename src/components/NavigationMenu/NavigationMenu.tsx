import { Link, useLocation } from 'react-router-dom';

import { ORDERS_URL, PRODUCTS_URL } from '../../constants/endpoints';
import './styles.css';

const NavigationMenu = () => {
  const location = useLocation();

  return (
    <ul className="navigation-menu-wrapper">
      <li className="navigation-menu-item">
        <Link className={`navigation-menu-link ${location.pathname === ORDERS_URL ? 'active' : ''}`} to={ORDERS_URL}>Приход</Link>
      </li>
      <li className="navigation-menu-item">
        <Link className={`navigation-menu-link ${location.pathname === PRODUCTS_URL ? 'active' : ''}`} to={PRODUCTS_URL}>Продукты</Link>
      </li>
    </ul>
  );
};

export default NavigationMenu;
