import React, { FC } from 'react';

import Header from '../Header';
import NavigationMenu from '../NavigationMenu';
import './styles.css';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => (
  <>
    <Header />
    <div className="layout-wrapper">
      <aside className="aside-wrapper">
        <NavigationMenu />
      </aside>
      <main className="main-wrapper">
        {children}
      </main>
    </div>
  </>
);

export default Layout;
