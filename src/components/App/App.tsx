import {
  BrowserRouter as Router, Route, Routes, Navigate,
} from 'react-router-dom';

import OrdersPage from '../../pages/OrdersPage';
import ProductsPage from '../../pages/ProductsPage';
import NavigationMenu from '../NavigationMenu';
import './normalize.css';

function App() {
  return (
    <Router>
      <div>
        <NavigationMenu />
        <Routes>
          <Route path="/" element={<Navigate to="/products" />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/orders" element={<OrdersPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
