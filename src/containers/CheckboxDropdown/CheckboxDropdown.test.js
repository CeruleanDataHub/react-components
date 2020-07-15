import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";
import renderer from "react-test-renderer";

import { CheckboxDropdown } from "./CheckboxDropdown";

const items = [
  { value: "1", label: "Item 1" },
  { value: "2", label: "Item 2" }
];

describe("CheckboxDropdown", () => {
  it("should render", () => {
    const component = renderer.create(<CheckboxDropdown />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render label", () => {
    const component = renderer.create(
      <CheckboxDropdown label="hello" items={items} isOpen />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render react node label", () => {
    const component = renderer.create(
      <CheckboxDropdown label={<div>hello</div>} items={items} isOpen />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render in open state", () => {
    const component = renderer.create(
      <CheckboxDropdown items={items} isOpen />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should have onClick listener", () => {
    const component = renderer.create(
      <CheckboxDropdown items={items} onClick={() => null} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should fire onClick event callback function", () => {
    const handleClick = jest.fn();
    const component = mount(
      <CheckboxDropdown items={items} onClick={handleClick} />
    );
    expect(handleClick).not.toHaveBeenCalled();
    component.find("button").simulate("click");
    expect(handleClick).toHaveBeenCalled();
  });

  it("should call default props onClick function when no onClick property is passed", () => {
    const component = renderer.create(<CheckboxDropdown items={items} />);
    const tree = component.toJSON();
    component.root.props.onClick();
    expect(tree).toMatchSnapshot();
  });

  it("should be able to select item from list", () => {
    const wrapper = mount(<CheckboxDropdown items={items} isOpen />);
    wrapper
      .find("input")
      .first()
      .simulate("change");

    expect(toJson(wrapper, { mode: "deep" })).toMatchSnapshot();
  });
});
