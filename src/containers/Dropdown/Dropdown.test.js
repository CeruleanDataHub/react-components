import { mount } from "enzyme";
import toJson from "enzyme-to-json";
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

  it("should have onClick listener", () => {
    const component = renderer.create(
      <Dropdown items={items} onClick={() => null} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should fire onClick event callback function", () => {
    const handleClick = jest.fn();
    const component = mount(<Dropdown items={items} onClick={handleClick} />);
    expect(handleClick).not.toHaveBeenCalled();
    component.find("button").simulate("click");
    expect(handleClick).toHaveBeenCalled();
  });

  it("should call default props onClick function when no onClick property is passed", () => {
    const component = renderer.create(<Dropdown items={items} />);
    const tree = component.toJSON();
    component.root.props.onClick();
    expect(tree).toMatchSnapshot();
  });

  it("should be able to select item from list", () => {
    const wrapper = mount(<Dropdown items={items} isOpen />);
    wrapper
      .find("input")
      .first()
      .simulate("change");

    expect(toJson(wrapper, { mode: "deep" })).toMatchSnapshot();
  });
});
