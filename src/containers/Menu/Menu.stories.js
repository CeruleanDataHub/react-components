import React from "react";

import { Menu } from "./Menu.jsx";

export default {
  title: "Menu",
  component: Menu,
};

const items = [
  { name: "First", iconClass: "lnr-cog" },
  { name: "Second", iconClass: "lnr-eye" },
];

export const ChartStory = () => <Menu items={items} />;
