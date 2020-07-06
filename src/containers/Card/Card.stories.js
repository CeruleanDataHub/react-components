import { withKnobs } from "@storybook/addon-knobs";
import React from "react";

import { Card } from "./Card";

export default {
  title: "Card",
  component: Card,
  decorators: [withKnobs]
};

export const CardStory = () => (
  <div style={{ width: "500px" }}>
    <Card title="Users" icon="users">
      You have 30 users
    </Card>
  </div>
);
