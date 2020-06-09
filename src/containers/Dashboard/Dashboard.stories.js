import React from 'react';
import { Dashboard } from './Dashboard.jsx';

export default {
  title: 'Dashboard',
  component: Dashboard,
};

export const DashboardStory = () => (
  <Dashboard>
    <div> Dashboard item</div>
    <div> Dashboard item</div>
    <div> Dashboard item</div>
  </Dashboard>
);
