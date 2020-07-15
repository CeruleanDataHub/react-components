import { mount } from "enzyme";
import React from "react";
import renderer from "react-test-renderer";

import { Dropdown } from "./Dropdown";

describe("Dropdown", () => {
  it("should render dropdown", () => {
    const component = renderer.create(<Dropdown>Content</Dropdown>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render dropdown in open state", () => {
    const component = renderer.create(<Dropdown isOpen>Content</Dropdown>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render react node children", () => {
    const component = renderer.create(
      <Dropdown isOpen>
        <div>Test content</div>
      </Dropdown>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should have onClick listener", () => {
    const component = renderer.create(
      <Dropdown onClick={() => null}>Content</Dropdown>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should fire onClick event callback function", () => {
    const handleClick = jest.fn();
    const component = mount(<Dropdown onClick={handleClick}>Content</Dropdown>);
    expect(handleClick).not.toHaveBeenCalled();
    component.find("button").simulate("click");
    expect(handleClick).toHaveBeenCalled();
  });

  it("should call default props onClick function when no onClick property is passed", () => {
    const component = renderer.create(<Dropdown>Content</Dropdown>);
    const tree = component.toJSON();
    component.root.props.onClick();
    expect(tree).toMatchSnapshot();
  });
});
