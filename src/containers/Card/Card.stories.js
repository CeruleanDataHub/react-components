import React from 'react';

import { Card } from './Card';

export default {
  title: 'Card',
  component: Card,
};

export const CardStory = () => (
  <div style={{ width: '500px' }}>
    <Card item={{ iconClass: 'users', title: 'Users' }}>You have 30 users</Card>
  </div>
);
