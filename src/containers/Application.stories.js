import React from 'react';
import { Application } from './Application.jsx';
import { Header } from './Header/Header.jsx';
import { Navigation } from './Navigation/Navigation.jsx';
import { Menu } from './Menu/Menu.jsx';
import { Dashboard } from './Dashboard/Dashboard.jsx';
import { Card } from './Card/Card.jsx';

export default {
  title: 'Denim Data Hub',
  component: Application,
};

const menuItems = [
  {
    name: 'Home',
    iconClass: 'lnr-home',
  },
  {
    name: 'Users',
    iconClass: 'lnr-users',
  },
  {
    name: 'Devices',
    iconClass: 'lnr-rocket',
  },
  {
    name: 'Costs',
    iconClass: 'lnr-briefcase',
  },
];

export const AdminFrontpage = () => (
  <Application>
    <Header />
    <Navigation>
      <Menu items={menuItems} />
    </Navigation>
    <Dashboard>
      <Card item={{ iconClass: 'lnr-users', title: 'Users' }}> 100 users </Card>
      <Card item={{ iconClass: 'lnr-rocket', title: 'Devices' }}> 98 devices </Card>
      <Card item={{ iconClass: 'lnr-briefcase', title: 'Costs' }}> 300k € incured </Card>
    </Dashboard>
  </Application>
);
