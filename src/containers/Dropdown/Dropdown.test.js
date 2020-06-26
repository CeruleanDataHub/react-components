import React from "react";
import renderer from "react-test-renderer";

import { Dropdown } from "./Dropdown";

const items = [
  { value: "1", label: "Item 1" },
  { value: "2", label: "Item 2" }
];

describe("Dropdown", () => {
  it("should render dropdown", () => {
    const component = renderer.create(<Dropdown />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render dropdown in open state", () => {
    const component = renderer.create(<Dropdown items={items} isOpen />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
