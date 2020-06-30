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

describe("Menu", () => {
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
});
