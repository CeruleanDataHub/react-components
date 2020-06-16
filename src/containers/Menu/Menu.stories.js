import React from "react";

import { Menu } from "./Menu";

export default {
  title: "Menu",
  component: Menu,
};

const items = [
  { name: "First", icon: "cog" },
  { name: "Second", icon: "eye" },
];

export const ChartStory = () => <Menu items={items} />;
