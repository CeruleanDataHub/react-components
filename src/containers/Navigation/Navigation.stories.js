import React, { useState } from "react";

import { Menu } from "../Menu/Menu";
import { Navigation } from "./Navigation";

export default {
  title: "Navigation",
  component: Navigation
};

const menuItems = [
  { name: "First", icon: "cog" },
  { name: "Second", icon: "eye" }
];

export const NavigationStory = () => <Navigation />;

export const NavigationWithToggleStory = () => {
  const [menuOpen, setMenuOpen] = useState(true);
  return (
    <Navigation onMenuToggle={setMenuOpen}>
      <Menu items={menuItems} menuOpen={menuOpen} />
    </Navigation>
  );
};

export const NavigationWithOpenMenuStory = () => (
  <Navigation>
    <Menu items={menuItems} menuOpen />
  </Navigation>
);

export const NavigationWithClosedMenuStory = () => (
  <Navigation menuInitialState={false}>
    <Menu items={menuItems} menuOpen={false} />
  </Navigation>
);
