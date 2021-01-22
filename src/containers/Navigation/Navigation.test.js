import { mount } from "enzyme";
import PropTypes from "prop-types";
import React from "react";

import { Menu } from "../Menu/Menu";
import { Navigation } from "./Navigation";

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

describe("Navigation", () => {
  it("renders", () => {
    const component = mount(<Navigation>Some children</Navigation>);

    expect(component).toMatchHtmlSnapshot();
  });

  it("given Menu as children, has Menu", () => {
    const component = mount(
      <Navigation>
        <Menu items={menuItems} />
      </Navigation>
    );

    expect(component.find("Menu")).toExist();
  });

  it("given menu initial state is false, has menu icon", () => {
    const component = mount(
      <Navigation menuInitialState={false}>
        <Menu items={menuItems} />
      </Navigation>
    );

    expect(component.find("Icon[data-icon-test]")).toHaveProp("name", "menu");
  });

  it("given onMenuToggle, does not call callback function yet", () => {
    const onMenuToggleMock = jest.fn();
    mount(
      <Navigation onMenuToggle={onMenuToggleMock}>
        <Menu items={menuItems} />
      </Navigation>
    );

    expect(onMenuToggleMock).not.toHaveBeenCalled();
  });

  it("given onMenuToggle, when called, calls callback function", () => {
    const onMenuToggleMock = jest.fn();
    const component = mount(
      <Navigation onMenuToggle={onMenuToggleMock}>
        <Menu items={menuItems} />
      </Navigation>
    );

    component.props().onMenuToggle();

    expect(onMenuToggleMock).toHaveBeenCalled();
  });

  it("should call default props onMenuToggle function when no onMenuToggle property is passed", () => {
    const component = mount(
      <Navigation>
        <Menu items={menuItems} />
      </Navigation>
    );

    const actual = component.props().onMenuToggle();

    expect(actual).toBeNull();
  });
});
