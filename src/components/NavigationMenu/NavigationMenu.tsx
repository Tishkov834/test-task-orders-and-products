import { Link } from 'react-router-dom';

function NavigationMenu() {
  return (
    <div>
      <Link to="/products">Products</Link>
      <Link to="/orders">Orders</Link>
    </div>
  );
}

export default NavigationMenu;
