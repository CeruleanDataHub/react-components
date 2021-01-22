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
  it("should render", () => {
    const component = mount(<Navigation />);

    expect(component).toMatchHtmlSnapshot();
  });

  it("should render children menu", () => {
    const component = mount(
      <Navigation>
        <Menu items={menuItems} />
      </Navigation>
    );

    expect(component).toMatchHtmlSnapshot();
  });

  it("should have menu toggle event listener", () => {
    const component = mount(
      <Navigation onMenuToggle={() => null}>
        <Menu items={menuItems} />
      </Navigation>
    );

    expect(component).toMatchHtmlSnapshot();
  });

  it("should render children menu closed when given appropriate property", () => {
    const component = mount(
      <Navigation menuInitialState={false}>
        <Menu items={menuItems} />
      </Navigation>
    );

    expect(component).toMatchHtmlSnapshot();
  });

  it("should call onMenuToggle callback function", () => {
    const handleClick = jest.fn();
    const wrapper = mount(
      <Navigation onMenuToggle={handleClick}>
        <Menu items={menuItems} />
      </Navigation>
    );
    expect(handleClick).not.toHaveBeenCalled();
    wrapper
      .find("button")
      .first()
      .simulate("click");
    expect(handleClick).toHaveBeenCalled();
  });

  it("should call default props onMenuToggle function when no onMenuToggle property is passed", () => {
    const component = mount(
      <Navigation>
        <Menu items={menuItems} />
      </Navigation>
    );
    component.props().onMenuToggle();

    expect(component).toMatchHtmlSnapshot();
  });
});
