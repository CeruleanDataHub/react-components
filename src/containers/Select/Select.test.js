import { mount } from "enzyme";
import React from "react";
import renderer from "react-test-renderer";

import { Select } from "./Select";

describe("Select", () => {
  it("should render in closed state", () => {
    const component = renderer.create(
      <Select items={[{ id: 1, value: "test" }]} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render in open state", () => {
    const component = renderer.create(
      <Select items={[{ id: 1, value: "test" }]} isOpen />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render label", () => {
    const component = renderer.create(
      <Select items={[{ id: 1, value: "test" }]} label="Test" />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render selected option", () => {
    const component = renderer.create(
      <Select
        items={[{ id: 1, value: "test" }]}
        selectedOption={{ id: 1 }}
        isOpen
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should be able to open the select component", () => {
    const open = jest.fn();
    const wrapper = mount(
      <Select items={[{ id: 1, value: "test" }]} onOpen={open} />
    );

    expect(open).not.toHaveBeenCalled();
    wrapper.find("button").simulate("click");
    expect(open).toHaveBeenCalled();
  });

  it("should select value from list", () => {
    const handleChange = jest.fn();
    const wrapper = mount(
      <Select
        items={[{ id: 1, value: "test" }]}
        isOpen
        onChange={handleChange}
      />
    );

    expect(handleChange).not.toHaveBeenCalled();
    wrapper
      .find("div.select")
      .first()
      .simulate("click");
    expect(handleChange).toHaveBeenCalled();
  });

  it("should be able to call the default onOpen function when no onOpen callback provided", () => {
    const wrapper = mount(<Select items={[{ id: 1, value: "test" }]} />);

    wrapper.find("button").simulate("click");
  });

  it("should be able to call the default onChange function when no onChange callback provided", () => {
    const wrapper = mount(<Select items={[{ id: 1, value: "test" }]} isOpen />);

    wrapper
      .find("div.select")
      .first()
      .simulate("click");
  });
});
