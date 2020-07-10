import { withKnobs } from "@storybook/addon-knobs";
import React from "react";

import { Menu } from "./Menu";

export default {
  title: "Menu",
  component: Menu,
  decorators: [withKnobs]
};

const items = [
  { name: "First", icon: "cog" },
  { name: "Second", icon: "eye" }
];

export const MenuStory = () => <Menu items={items} />;
export const MenuOpenStory = () => <Menu items={items} menuOpen />;
export const MenuClosedStory = () => <Menu items={items} menuOpen={false} />;
