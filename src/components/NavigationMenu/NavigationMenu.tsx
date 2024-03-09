import { Link, useLocation } from 'react-router-dom';

import './styles.css';

const NavigationMenu = () => {
  const location = useLocation();

  return (
    <ul className="navigation-menu-wrapper">
      <li className="navigation-menu-item">
        <Link className={`navigation-menu-link ${location.pathname === '/orders' ? 'active' : ''}`} to="/orders">Приход</Link>
      </li>
      <li className="navigation-menu-item">
        <Link className={`navigation-menu-link ${location.pathname === '/products' ? 'active' : ''}`} to="/products">Продукты</Link>
      </li>
    </ul>
  );
};

export default NavigationMenu;
