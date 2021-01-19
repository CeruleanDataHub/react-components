import { mount } from "enzyme";
import React from "react";
import renderer from "react-test-renderer";

import { Tab } from "./Tab";
import { Icon } from "../Icon/Icon";

describe("Tab", () => {
  it("should render correctly", () => {
    const component = renderer.create(<Tab onClick={() => {}} text="Tab" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render correctly in active state", () => {
    const component = renderer.create(
      <Tab onClick={() => {}} text="Tab" active />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should fire onClick event callback function", () => {
    const handleClick = jest.fn();
    const component = mount(<Tab text="Tab" onClick={handleClick} />);
    expect(handleClick).not.toHaveBeenCalled();
    component
      .find("div")
      .at(1)
      .simulate("click");
    expect(handleClick).toHaveBeenCalled();
  });

  it("should render icon", () => {
    const component = mount(
      <Tab onClick={() => {}} icon={<Icon name="chef-hat" />} />
    );

    expect(component.contains(<Icon name="chef-hat" />)).toBe(true);
  });
});
