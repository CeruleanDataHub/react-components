import React from "react";
import renderer from "react-test-renderer";

import { Menu } from "./Menu";

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
});
