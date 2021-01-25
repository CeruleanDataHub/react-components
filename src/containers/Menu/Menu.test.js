import PropTypes from "prop-types";
import React from "react";
import { mount } from "enzyme";

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
    const component = mount(<Menu />);

    expect(component).toMatchHtmlSnapshot();
  });

  it("should render items", () => {
    const component = mount(<Menu items={menuItems} />);

    expect(component).toMatchHtmlSnapshot();
  });

  it("should render open menu", () => {
    const component = mount(<Menu items={menuItems} menuOpen />);

    expect(component).toMatchHtmlSnapshot();
  });

  it("should render closed menu", () => {
    const component = mount(<Menu items={menuItems} menuOpen={false} />);

    expect(component).toMatchHtmlSnapshot();
  });

  it("should render without link component", () => {
    const menuItemsWithoutLink = [
      {
        name: "Home",
        icon: "home"
      }
    ];
    const component = mount(<Menu items={menuItemsWithoutLink} />);

    expect(component).toMatchHtmlSnapshot();
  });
});
