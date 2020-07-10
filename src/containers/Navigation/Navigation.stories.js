import React, { useState } from "react";
import styled from "styled-components";

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

const NavigationWrapper = styled.div`
  transition: width linear 280ms;
  background-color: rgba(0, 0, 0, 0.75);
  color: #ffffff;
  width: ${({ menuOpen }) => (menuOpen ? 20 : 4)}em;

  button {
    color: #ffffff;
  }

  .menu-text {
    transition: opacity linear 280ms;
    /* text still selectable in browser */
    opacity: ${({ menuOpen }) => (menuOpen ? 1 : 0)};
  }
`;

export const NavigationWithToggleAndAnimationStory = () => {
  const [menuOpen, setMenuOpen] = useState(true);

  return (
    <NavigationWrapper menuOpen={menuOpen}>
      <Navigation onMenuToggle={setMenuOpen} menuInitialState={menuOpen}>
        <Menu items={menuItems} menuOpen={menuOpen} />
      </Navigation>
    </NavigationWrapper>
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
