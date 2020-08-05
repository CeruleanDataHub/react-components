import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";
import renderer from "react-test-renderer";

import { Select } from "./Select";

describe("Select", () => {
  it("should render", () => {
    const component = renderer.create(
      <Select items={[{ id: "1", value: "test" }]} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render selected option", () => {
    const component = renderer.create(
      <Select items={[{ id: "1", value: "test" }]} selectedOption="test" />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render option groups", () => {
    const items = [
      {
        group: "Group 1",
        children: [
          { id: "1", value: "Label 1" },
          { id: "2", value: "Label 2" }
        ]
      },
      {
        group: "Group 2",
        children: [
          {
            id: "3",
            value:
              "Extra long line of text which will overflow the select container."
          }
        ]
      }
    ];
    const component = renderer.create(
      <Select items={items} selectedOption="Label 1" />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should call onChange handler", () => {
    const handleChange = jest.fn();
    const component = mount(
      <Select items={[{ id: "1", value: "test" }]} onChange={handleChange} />
    );
    component.simulate("change");
    expect(handleChange).toHaveBeenCalled();
  });

  it("should be able to call the default onChange function when no onChange callback provided", () => {
    const component = mount(<Select items={[{ id: "1", value: "test" }]} />);
    component.simulate("change");

    expect(toJson(component)).toMatchSnapshot();
  });
});
