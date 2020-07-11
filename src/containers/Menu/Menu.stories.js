import { withKnobs } from "@storybook/addon-knobs";
import PropTypes from "prop-types";
import React from "react";

import { Menu } from "./Menu";

export default {
  title: "Menu",
  component: Menu,
  decorators: [withKnobs]
};

const MenuLinkExample = ({ to, children }) => <a href={to}>{children}</a>;

MenuLinkExample.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node
};

MenuLinkExample.defaultProps = {
  to: "",
  children: ""
};

const items = [
  {
    name: "First",
    icon: "cog",
    LinkComponent: MenuLinkExample,
    to: "#first"
  },
  {
    name: "Second",
    icon: "eye",
    LinkComponent: MenuLinkExample,
    to: "#second"
  }
];

export const MenuStory = () => <Menu items={items} />;
export const MenuOpenStory = () => <Menu items={items} menuOpen />;
export const MenuClosedStory = () => <Menu items={items} menuOpen={false} />;
