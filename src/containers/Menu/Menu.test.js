import PropTypes from "prop-types";
import React from "react";
import renderer from "react-test-renderer";

import { Menu } from "./Menu";

const MenuLinkExample = ({ to, children }) => <a href={to}>{children}</a>;

MenuLinkExample.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node
};

MenuLinkExample.defaultProps = {
  to: "",
  children: ""
};

const menuItems = [
  {
    name: "Home",
    icon: "home",
    LinkComponent: MenuLinkExample,
    to: "#home"
  },
  {
    name: "Users",
    icon: "users",
    LinkComponent: MenuLinkExample,
    to: "#users"
  },
  {
    name: "Devices",
    icon: "rocket",
    LinkComponent: MenuLinkExample,
    to: "#devices"
  },
  {
    name: "Costs",
    icon: "briefcase",
    LinkComponent: MenuLinkExample,
    to: "#costs"
  }
];

describe("Menu", () => {
  it("should render", () => {
    const component = renderer.create(<Menu />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render items", () => {
    const component = renderer.create(<Menu items={menuItems} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render open menu", () => {
    const component = renderer.create(<Menu items={menuItems} menuOpen />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render closed menu", () => {
    const component = renderer.create(
      <Menu items={menuItems} menuOpen={false} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render without link component", () => {
    const menuItemsWithoutLink = [
      {
        name: "Home",
        icon: "home"
      }
    ];
    const component = renderer.create(<Menu items={menuItemsWithoutLink} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
