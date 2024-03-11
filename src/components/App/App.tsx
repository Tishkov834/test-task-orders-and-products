import {
  BrowserRouter as Router, Route, Routes, Navigate,
} from 'react-router-dom';
import { Provider } from 'react-redux';

import OrdersPage from '../../pages/OrdersPage';
import ProductsPage from '../../pages/ProductsPage';
import Layout from '../Layout';
import store from '../../redux/store';
import { ORDERS_URL, PRODUCTS_URL } from '../../constants/endpoints';
import './normalize.css';
import './styles.css';

const App = () => (
  <Provider store={store}>
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to={ORDERS_URL} />} />
          <Route path={PRODUCTS_URL} element={<ProductsPage />} />
          <Route path={ORDERS_URL} element={<OrdersPage />} />
        </Routes>
      </Layout>
    </Router>
  </Provider>
);

export default App;
