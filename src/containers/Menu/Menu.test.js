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

const menuItemsStub = [
  {
    name: "Home",
    icon: "home",
    LinkComponent: MenuLinkExample,
    to: "#home"
  }
];

describe("Menu", () => {
  it("renders", () => {
    const component = mount(<Menu />);

    expect(component).toMatchHtmlSnapshot();
  });

  it("given items with link component, has items", () => {
    const component = mount(<Menu items={menuItemsStub} />);

    expect(component.find("SingleItem[data-menu-item-test]")).toExist();
  });

  it('given "menuOpen" prop, MenuTextItem is open', () => {
    const component = mount(<Menu items={menuItemsStub} menuOpen />);

    expect(component.find("MenuTextItem")).toHaveProp("menuOpen", true);
  });

  it('given no "menuOpen" prop, MenuTextItem is not open', () => {
    const component = mount(<Menu items={menuItemsStub} menuOpen={false} />);

    expect(component.find("MenuTextItem")).toHaveProp("menuOpen", false);
  });

  it("given items with no link component, has items", () => {
    const menuItemsWithoutLinkStub = [
      {
        name: "Home",
        icon: "home"
      }
    ];

    const component = mount(<Menu items={menuItemsWithoutLinkStub} />);

    expect(component.find("SingleItem[data-menu-item-test]")).toExist();
  });
});
