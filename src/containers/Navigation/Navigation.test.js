import { mount } from "enzyme";
import React from "react";
import renderer from "react-test-renderer";

import { Menu } from "../Menu/Menu";
import { Navigation } from "./Navigation";

const menuItems = [
  {
    name: "Home",
    icon: "home"
  },
  {
    name: "Users",
    icon: "users"
  },
  {
    name: "Devices",
    icon: "rocket"
  },
  {
    name: "Costs",
    icon: "briefcase"
  }
];

describe("Navigation", () => {
  it("should render", () => {
    const component = renderer.create(<Navigation />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render children menu", () => {
    const component = renderer.create(
      <Navigation>
        <Menu items={menuItems} />
      </Navigation>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should have menu toggle event listener", () => {
    const component = renderer.create(
      <Navigation onMenuToggle={() => null}>
        <Menu items={menuItems} />
      </Navigation>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render children menu closed when given appropriate property", () => {
    const component = renderer.create(
      <Navigation menuInitialState={false}>
        <Menu items={menuItems} />
      </Navigation>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
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
    const component = renderer.create(
      <Navigation>
        <Menu items={menuItems} />
      </Navigation>
    );
    component.root.props.onMenuToggle();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
