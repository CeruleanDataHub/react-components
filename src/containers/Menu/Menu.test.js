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

describe("Menu", () => {
  let component;
  let itemsStub;

  beforeEach(() => {
    itemsStub = [
      {
        name: "Home",
        icon: "home",
        LinkComponent: MenuLinkExample,
        to: "#home"
      }
    ];

    component = mount(<Menu items={itemsStub} />);
  });

  it("renders", () => {
    expect(component).toMatchHtmlSnapshot();
  });

  it("has items", () => {
    expect(component.find("SingleItem[data-menu-item-test]")).toExist();
  });

  it("MenuTextItem is open", () => {
    expect(component.find("MenuTextItem")).toHaveProp("menuOpen", true);
  });

  it('given "menuOpen" prop is false, MenuTextItem is not open', () => {
    component = mount(<Menu items={itemsStub} menuOpen={false} />);

    expect(component.find("MenuTextItem")).toHaveProp("menuOpen", false);
  });

  it("given items with no link component, has items", () => {
    itemsStub = [
      {
        name: "Home",
        icon: "home"
      }
    ];
    component = mount(<Menu items={itemsStub} />);

    expect(component.find("SingleItem[data-menu-item-test]")).toExist();
  });
});
